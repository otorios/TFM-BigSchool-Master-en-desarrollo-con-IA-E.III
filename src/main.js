import './styles.css';
import { chapters, MAX_ENERGY } from './data/chapters.js';
import { cardsMatch, createDeck, getReturnOutcome, remainingEnergy } from './game.js';
import { createGameState } from './state.js';
import {
  clearProgress,
  loadProgress,
  normalizePlayerName,
  saveProgress,
  startProgress,
} from './storage.js';
import {
  clearApp,
  createButton,
  createCard,
  createHeader,
  createMissionPanel,
  element,
  formatTime,
  setCardState,
  showToast,
  updateStats,
} from './ui.js';

const app = document.querySelector('#app');
let progress = loadProgress();
let state = null;
let deck = [];
let timerId = null;
let observationId = null;

function stopTimers() {
  window.clearInterval(timerId);
  window.clearInterval(observationId);
  timerId = null;
  observationId = null;
}

function renderStart() {
  stopTimers();
  clearApp(app);

  const screen = element('section', 'start-screen panel');
  screen.append(
    element('p', 'eyebrow', 'Misión ORIOS // Nave ATLAS'),
    element('h1', 'game-logo', 'Memory Quest'),
    element('p', 'game-subtitle', 'Señal estelar'),
    element(
      'p',
      'lead',
      'Relaciona conceptos de astronomía, repara la nave y descubre el origen de una señal imposible.',
    ),
  );

  const form = element('form', 'name-form');
  const label = element('label', null, 'Nombre del cadete');
  label.htmlFor = 'player-name';
  const input = element('input', 'text-input');
  input.id = 'player-name';
  input.name = 'playerName';
  input.maxLength = 30;
  input.autocomplete = 'nickname';
  input.required = true;
  input.placeholder = 'Escribe tu nombre';
  const validation = element('p', 'validation-message');
  validation.id = 'name-error';
  input.setAttribute('aria-describedby', validation.id);
  form.append(label, input, validation);
  form.append(
    createButton('Comenzar misión', () => {}, 'primary'),
  );
  form.lastElementChild.type = 'submit';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const playerName = normalizePlayerName(input.value);
    if (!playerName) {
      validation.textContent = 'Introduce un nombre para comenzar.';
      input.focus();
      return;
    }
    progress = startProgress(playerName);
    saveProgress(progress);
    renderChapterIntro(0);
  });
  screen.append(form);

  if (progress) {
    const continueBox = element('div', 'continue-box');
    const chapterNumber = Math.min(progress.nextChapter + 1, chapters.length);
    continueBox.append(
      element('p', null, `Progreso de ${progress.playerName}: capítulo ${chapterNumber} de ${chapters.length}.`),
      createButton(
        progress.completed ? 'Ver resultado final' : 'Continuar aventura',
        () => (progress.completed ? renderFinal() : renderChapterIntro(progress.nextChapter)),
        'secondary',
      ),
      createButton('Nueva partida', () => {
        clearProgress();
        progress = null;
        renderStart();
      }, 'ghost'),
    );
    screen.append(continueBox);
  }

  app.append(screen);
  input.focus();
}

function renderChapterIntro(chapterIndex) {
  stopTimers();
  const chapter = chapters[chapterIndex];
  clearApp(app);
  const screen = element('section', 'chapter-intro panel');
  screen.append(
    element('p', 'eyebrow', `Capítulo ${chapter.id} de ${chapters.length}`),
    element('h1', null, chapter.title),
    element('p', 'lead', chapter.intro),
  );

  const rules = element('ul', 'rules-list');
  [
    `${chapter.pairs.length} parejas semánticas`,
    `${chapter.observationSeconds} segundos de observación`,
    `${MAX_ENERGY} puntos de energía`,
    `−${chapter.errorCost} por cada error`,
  ].forEach((rule) => rules.append(element('li', null, rule)));
  screen.append(rules, createButton('Iniciar capítulo', () => startChapter(chapterIndex)));
  app.append(screen);
}

function startChapter(chapterIndex) {
  stopTimers();
  const chapter = chapters[chapterIndex];
  state = createGameState(chapterIndex);
  deck = createDeck(chapter);
  clearApp(app);

  app.append(createHeader(chapter, state, progress.playerName));
  const layout = element('div', 'game-layout');
  layout.append(createMissionPanel(chapter));
  const boardArea = element('section', 'board-area panel');
  const countdown = element('p', 'countdown', `Observa las cartas: ${chapter.observationSeconds}`);
  countdown.dataset.countdown = '';
  const board = element('div', `card-grid card-grid--${chapter.pairs.length}`);
  board.setAttribute('aria-label', `Tablero del capítulo ${chapter.id}`);
  deck.forEach((card) => board.append(createCard(card, handleCardSelection)));
  boardArea.append(countdown, board);
  layout.append(boardArea);
  app.append(layout);
  updateStats(app, state, chapter.pairs.length);

  let remaining = chapter.observationSeconds;
  observationId = window.setInterval(() => {
    remaining -= 1;
    countdown.textContent = remaining > 0 ? `Observa las cartas: ${remaining}` : '¡Comienza!';
    if (remaining <= 0) {
      window.clearInterval(observationId);
      observationId = null;
      deck.forEach((card) => setCardState(app, card.id, 'hidden'));
      state.boardLocked = false;
      state.startedAt = Date.now();
      startTimer();
      window.setTimeout(() => countdown.remove(), 800);
    }
  }, 1000);
}

function startTimer() {
  timerId = window.setInterval(() => {
    state.elapsedSeconds = Math.floor((Date.now() - state.startedAt) / 1000);
    updateStats(app, state, chapters[state.chapterIndex].pairs.length);
  }, 1000);
}

function handleCardSelection(card) {
  if (state.boardLocked || state.matchedPairIds.includes(card.pairId)) return;
  if (state.selectedCardIds.includes(card.id)) return;

  state.selectedCardIds.push(card.id);
  setCardState(app, card.id, 'revealed');
  if (state.selectedCardIds.length < 2) return;

  state.boardLocked = true;
  state.attempts += 1;
  const [firstId, secondId] = state.selectedCardIds;
  const firstCard = deck.find((item) => item.id === firstId);
  const secondCard = deck.find((item) => item.id === secondId);
  const chapter = chapters[state.chapterIndex];

  if (cardsMatch(firstCard, secondCard)) {
    window.setTimeout(() => {
      state.matchedPairIds.push(firstCard.pairId);
      state.selectedCardIds = [];
      setCardState(app, firstId, 'matched');
      setCardState(app, secondId, 'matched');
      updateStats(app, state, chapter.pairs.length);
      showToast(app, `Relación correcta: ${firstCard.name ?? secondCard.name}.`, 'success');
      if (state.matchedPairIds.length === chapter.pairs.length) {
        completeChapter();
      } else {
        state.boardLocked = false;
      }
    }, 500);
    return;
  }

  state.errors += 1;
  state.energy = remainingEnergy(state.energy, chapter.errorCost);
  updateStats(app, state, chapter.pairs.length);
  window.setTimeout(() => {
    setCardState(app, firstId, 'hidden');
    setCardState(app, secondId, 'hidden');
    state.selectedCardIds = [];
    if (state.energy === 0) {
      renderDefeat();
    } else {
      state.boardLocked = false;
      showToast(app, `No forman pareja. Energía restante: ${state.energy}.`, 'error');
    }
  }, 900);
}

function completeChapter() {
  stopTimers();
  state.elapsedSeconds = Math.floor((Date.now() - state.startedAt) / 1000);
  const chapter = chapters[state.chapterIndex];
  progress.totalScore += state.energy;
  progress.repairedModules.push(chapter.module);
  progress.nextChapter = state.chapterIndex + 1;
  progress.completed = progress.nextChapter >= chapters.length;
  saveProgress(progress);

  clearApp(app);
  const screen = element('section', 'result-screen panel');
  screen.append(
    element('p', 'eyebrow', 'Sistema reparado'),
    element('h1', null, chapter.module),
    element('p', 'lead', chapter.success),
  );
  const summary = element('dl', 'result-summary');
  [
    ['Energía conservada', `${state.energy}/12`],
    ['Intentos', String(state.attempts)],
    ['Errores', String(state.errors)],
    ['Tiempo', formatTime(state.elapsedSeconds)],
  ].forEach(([label, value]) => {
    summary.append(element('dt', null, label), element('dd', null, value));
  });
  screen.append(summary);
  screen.append(
    createButton(
      progress.completed ? 'Ver desenlace' : 'Continuar al siguiente capítulo',
      () => (progress.completed ? renderFinal() : renderChapterIntro(progress.nextChapter)),
    ),
  );
  app.append(screen);
}

function renderDefeat() {
  stopTimers();
  const chapter = chapters[state.chapterIndex];
  clearApp(app);
  const screen = element('section', 'result-screen panel');
  screen.append(
    element('p', 'eyebrow eyebrow--danger', 'Energía agotada'),
    element('h1', null, 'ATLAS necesita otro intento'),
    element(
      'p',
      'lead',
      `El capítulo se reiniciará, pero conservarás todos los módulos reparados anteriormente. COSMO ha vuelto a preparar ${chapter.title}.`,
    ),
    createButton('Reintentar capítulo', () => startChapter(state.chapterIndex)),
    createButton('Volver al inicio', renderStart, 'ghost'),
  );
  app.append(screen);
}

function renderFinal() {
  stopTimers();
  clearApp(app);
  const outcome = getReturnOutcome(progress.totalScore);
  const screen = element('section', 'final-screen panel');
  screen.append(
    element('p', 'eyebrow', 'Misión ORIOS completada'),
    element('h1', null, outcome.label),
    element(
      'p',
      'lead',
      'La antigua baliza respondió a la identificación de emergencia de ATLAS. Sus datos completan el mapa, COSMO despierta a la capitana y LURRA está a salvo.',
    ),
    element('p', 'outcome-message', outcome.message),
    element('p', 'final-score', `${progress.totalScore}/36 puntos de energía`),
  );
  const modules = element('ul', 'module-list');
  progress.repairedModules.forEach((module) => modules.append(element('li', null, module)));
  screen.append(
    modules,
    createButton('Jugar de nuevo', () => {
      clearProgress();
      progress = null;
      renderStart();
    }),
  );
  app.append(screen);
}

renderStart();
