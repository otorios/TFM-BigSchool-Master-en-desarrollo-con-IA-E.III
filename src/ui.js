function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function clearApp(app) {
  app.replaceChildren();
}

export function createButton(label, onClick, variant = 'primary') {
  const button = element('button', `button button--${variant}`, label);
  button.type = 'button';
  button.addEventListener('click', onClick);
  return button;
}

export function createHeader(chapter, state, playerName) {
  const header = element('header', 'mission-header');
  const titleGroup = element('div');
  titleGroup.append(
    element('p', 'eyebrow', `Cadete ${playerName}`),
    element('h1', 'mission-title', chapter.title),
  );

  const stats = element('div', 'stats');
  const energy = element('span', 'stat');
  energy.dataset.stat = 'energy';
  energy.textContent = `Energía: ${state.energy}/12`;
  const attempts = element('span', 'stat');
  attempts.dataset.stat = 'attempts';
  attempts.textContent = `Intentos: ${state.attempts}`;
  const timer = element('span', 'stat');
  timer.dataset.stat = 'timer';
  timer.textContent = 'Tiempo: 00:00';
  stats.append(energy, attempts, timer);
  header.append(titleGroup, stats);
  return header;
}

export function createMissionPanel(chapter) {
  const panel = element('aside', 'mission-panel panel');
  panel.append(
    element('p', 'eyebrow', 'COSMO // Objetivo de misión'),
    element('h2', null, chapter.objective),
    element('p', 'cosmo-message', chapter.intro),
  );

  const progressLabel = element('p', 'progress-label', `Reparación: 0/${chapter.pairs.length}`);
  progressLabel.dataset.progressLabel = '';
  const progress = element('progress', 'repair-progress');
  progress.dataset.progress = '';
  progress.max = chapter.pairs.length;
  progress.value = 0;
  panel.append(progressLabel, progress);
  return panel;
}

export function createCard(card, onSelect) {
  const button = element('button', `memory-card memory-card--${card.type} is-revealed`);
  button.type = 'button';
  button.dataset.cardId = card.id;
  button.setAttribute('aria-label', 'Carta visible durante la observación');

  const inner = element('span', 'card-inner');
  const back = element('span', 'card-face card-back');
  back.append(element('span', 'card-emblem', 'MQ'), element('span', null, 'ATLAS'));

  const front = element('span', `card-face card-front card-front--${card.type}`);
  if (card.type === 'concept') {
    const visual = element('span', 'concept-visual');
    if (card.image) {
      const image = element('img', 'concept-image');
      image.src = card.image;
      image.alt = card.alt ?? `Imagen de ${card.name}`;
      image.loading = 'eager';
      image.draggable = false;
      visual.append(image);
    } else {
      visual.textContent = card.symbol;
      visual.setAttribute('aria-hidden', 'true');
    }
    front.append(visual, element('strong', 'concept-name', card.name));
  } else {
    front.append(element('span', 'clue-label', 'Pista'), element('span', 'clue-text', card.clue));
  }

  inner.append(back, front);
  button.append(inner);
  button.addEventListener('click', () => onSelect(card));
  return button;
}

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const rest = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${rest}`;
}

export function updateStats(app, state, pairCount) {
  const energy = app.querySelector('[data-stat="energy"]');
  const attempts = app.querySelector('[data-stat="attempts"]');
  const timer = app.querySelector('[data-stat="timer"]');
  const progress = app.querySelector('[data-progress]');
  const progressLabel = app.querySelector('[data-progress-label]');
  if (energy) energy.textContent = `Energía: ${state.energy}/12`;
  if (attempts) attempts.textContent = `Intentos: ${state.attempts}`;
  if (timer) timer.textContent = `Tiempo: ${formatTime(state.elapsedSeconds)}`;
  if (progress) progress.value = state.matchedPairIds.length;
  if (progressLabel) {
    progressLabel.textContent = `Reparación: ${state.matchedPairIds.length}/${pairCount}`;
  }
}

export function setCardState(app, cardId, state) {
  const card = app.querySelector(`[data-card-id="${cardId}"]`);
  if (!card) return;
  card.classList.toggle('is-revealed', state === 'revealed');
  card.classList.toggle('is-matched', state === 'matched');
  card.disabled = state === 'matched';
  card.setAttribute(
    'aria-label',
    state === 'matched' ? 'Pareja encontrada' : state === 'revealed' ? 'Carta visible' : 'Carta oculta',
  );
}

export function showToast(app, message, type = 'info') {
  const previous = app.querySelector('.toast');
  if (previous) previous.remove();
  const toast = element('p', `toast toast--${type}`, message);
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
  app.append(toast);
  window.setTimeout(() => toast.remove(), 1800);
}

export { element };
