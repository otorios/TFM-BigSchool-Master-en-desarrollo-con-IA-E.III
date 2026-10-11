import { MAX_ENERGY } from './data/chapters.js';

// Este estado dura únicamente mientras se juega el capítulo actual.
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
