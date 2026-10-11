import { chapters, MAX_ENERGY, MAX_TOTAL_SCORE } from './data/chapters.js';

const STORAGE_KEY = 'memoryQuestProgress';
const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F]/g;

const emptyProgress = () => ({
  version: 1,
  playerName: '',
  nextChapter: 0,
  totalScore: 0,
  repairedModules: [],
  completed: false,
});

export function normalizePlayerName(value) {
  return String(value ?? '')
    .replace(CONTROL_CHARACTERS, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 30);
}

export function validateProgress(value) {
  // localStorage pertenece al navegador y debe tratarse siempre como una entrada no fiable.
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;

  const playerName = normalizePlayerName(value.playerName);
  const nextChapter = Number.isInteger(value.nextChapter) ? value.nextChapter : -1;
  const totalScore = Number.isInteger(value.totalScore) ? value.totalScore : -1;
  const repairedModules = value.repairedModules;
  const expectedModules = chapters.slice(0, nextChapter).map((chapter) => chapter.module);
  const modulesAreValid =
    Array.isArray(repairedModules) &&
    repairedModules.length === expectedModules.length &&
    repairedModules.every((module, index) => module === expectedModules[index]);
  const completionIsValid = value.completed === (nextChapter === chapters.length);
  const scoreIsValid =
    totalScore >= 0 &&
    totalScore <= MAX_TOTAL_SCORE &&
    totalScore <= nextChapter * MAX_ENERGY;

  // Las relaciones entre campos impiden aceptar un progreso alterado pero plausible por separado.
  if (
    value.version !== 1 ||
    !playerName ||
    nextChapter < 0 ||
    nextChapter > chapters.length ||
    !scoreIsValid ||
    !modulesAreValid ||
    !completionIsValid
  ) {
    return null;
  }

  return {
    version: 1,
    playerName,
    nextChapter,
    totalScore,
    repairedModules: [...repairedModules],
    completed: value.completed,
  };
}

export function loadProgress(storage = window.localStorage) {
  try {
    const rawValue = storage.getItem(STORAGE_KEY);
    if (!rawValue) return null;
    const progress = validateProgress(JSON.parse(rawValue));
    if (!progress) storage.removeItem(STORAGE_KEY);
    return progress;
  } catch {
    try {
      storage.removeItem(STORAGE_KEY);
    } catch {
      // El juego puede continuar sin persistencia si el navegador la bloquea.
    }
    return null;
  }
}

export function saveProgress(progress, storage = window.localStorage) {
  const validProgress = validateProgress(progress);
  if (!validProgress) return false;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(validProgress));
    return true;
  } catch {
    return false;
  }
}

export function startProgress(playerName) {
  return {
    ...emptyProgress(),
    playerName: normalizePlayerName(playerName),
  };
}

export function clearProgress(storage = window.localStorage) {
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {
    // No se necesita bloquear el reinicio si localStorage no está disponible.
  }
}
