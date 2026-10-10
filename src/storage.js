const STORAGE_KEY = 'memoryQuestProgress';

const emptyProgress = () => ({
  version: 1,
  playerName: '',
  nextChapter: 0,
  totalScore: 0,
  repairedModules: [],
  completed: false,
});

export function normalizePlayerName(value) {
  return String(value ?? '').trim().slice(0, 30);
}

export function validateProgress(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;

  const playerName = normalizePlayerName(value.playerName);
  const nextChapter = Number.isInteger(value.nextChapter) ? value.nextChapter : -1;
  const totalScore = Number.isInteger(value.totalScore) ? value.totalScore : -1;
  const repairedModules = Array.isArray(value.repairedModules)
    ? value.repairedModules.filter((item) => typeof item === 'string').slice(0, 3)
    : null;

  if (
    value.version !== 1 ||
    !playerName ||
    nextChapter < 0 ||
    nextChapter > 3 ||
    totalScore < 0 ||
    totalScore > 36 ||
    repairedModules === null ||
    typeof value.completed !== 'boolean'
  ) {
    return null;
  }

  return {
    version: 1,
    playerName,
    nextChapter,
    totalScore,
    repairedModules,
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
