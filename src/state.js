import { MAX_ENERGY } from './data/chapters.js';

export function createGameState(chapterIndex = 0) {
  return {
    chapterIndex,
    energy: MAX_ENERGY,
    attempts: 0,
    errors: 0,
    selectedCardIds: [],
    matchedPairIds: [],
    boardLocked: true,
    startedAt: null,
    elapsedSeconds: 0,
  };
}

export function resetChapterState(state) {
  return createGameState(state.chapterIndex);
}
