import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePlayerName, validateProgress } from '../src/storage.js';

test('recorta y limita el nombre sin interpretar caracteres especiales', () => {
  assert.equal(normalizePlayerName('  <Cadete & COSMO>  '), '<Cadete & COSMO>');
  assert.equal(normalizePlayerName('a'.repeat(40)).length, 30);
});

test('rechaza progreso manipulado', () => {
  assert.equal(validateProgress({ version: 1, playerName: 'Ada', nextChapter: 99 }), null);
});

test('acepta una estructura de progreso válida', () => {
  const progress = {
    version: 1,
    playerName: 'Ada',
    nextChapter: 1,
    totalScore: 10,
    repairedModules: ['Módulo de comunicaciones'],
    completed: false,
  };
  assert.deepEqual(validateProgress(progress), progress);
});
