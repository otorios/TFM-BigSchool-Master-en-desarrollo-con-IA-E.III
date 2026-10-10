import test from 'node:test';
import assert from 'node:assert/strict';
import { cardsMatch, createDeck, getReturnOutcome, remainingEnergy } from '../src/game.js';
import { formatTime } from '../src/ui.js';
import { chapters } from '../src/data/chapters.js';

const chapter = {
  pairs: [
    { id: 'sun', name: 'Sol', clue: 'Una estrella', symbol: '☀', image: null },
    { id: 'earth', name: 'Tierra', clue: 'Un planeta', symbol: '⊕', image: null },
  ],
};

test('crea dos cartas por pareja', () => {
  const deck = createDeck(chapter, () => 0.5);
  assert.equal(deck.length, 4);
  assert.equal(deck.filter((card) => card.pairId === 'sun').length, 2);
});

test('solo empareja concepto y pista de la misma relación', () => {
  const deck = createDeck(chapter, () => 0.5);
  const concept = deck.find((card) => card.id === 'sun-concept');
  const clue = deck.find((card) => card.id === 'sun-clue');
  const wrong = deck.find((card) => card.id === 'earth-clue');
  assert.equal(cardsMatch(concept, clue), true);
  assert.equal(cardsMatch(concept, wrong), false);
});

test('la energía nunca es negativa', () => {
  assert.equal(remainingEnergy(2, 3), 0);
  assert.equal(remainingEnergy(12, 2), 10);
});

test('clasifica los tres resultados del regreso', () => {
  assert.equal(getReturnOutcome(36).label, 'Regreso rápido');
  assert.equal(getReturnOutcome(24).label, 'Regreso seguro');
  assert.equal(getReturnOutcome(6).label, 'Regreso de ahorro');
});

test('muestra tiempos superiores a un minuto en minutos y segundos', () => {
  assert.equal(formatTime(65), '01:05');
  assert.equal(formatTime(125), '02:05');
});

test('mantiene las pistas breves y legibles', () => {
  const clues = chapters.flatMap((item) => item.pairs.map((pair) => pair.clue));
  assert.equal(clues.every((clue) => clue.length <= 70), true);
});
