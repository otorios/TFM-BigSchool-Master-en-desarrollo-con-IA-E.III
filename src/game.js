// Reglas puras del juego: no leen el DOM ni modifican el almacenamiento.
export function shuffle(items, random = Math.random) {
  const shuffled = [...items];
  // Fisher-Yates crea una mezcla uniforme sin modificar el catálogo original.
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

export function createDeck(chapter, random = Math.random) {
  const cards = chapter.pairs.flatMap((pair) => [
    {
      id: `${pair.id}-concept`,
      pairId: pair.id,
      type: 'concept',
      name: pair.name,
      symbol: pair.symbol,
      image: pair.image,
      alt: pair.alt,
    },
    {
      id: `${pair.id}-clue`,
      pairId: pair.id,
      type: 'clue',
      clue: pair.clue,
    },
  ]);

  return shuffle(cards, random);
}

export function cardsMatch(firstCard, secondCard) {
  return (
    firstCard.id !== secondCard.id &&
    firstCard.pairId === secondCard.pairId &&
    firstCard.type !== secondCard.type
  );
}

export function remainingEnergy(energy, errorCost) {
  return Math.max(0, energy - errorCost);
}

export function getReturnOutcome(totalScore) {
  if (totalScore >= 30) {
    return {
      label: 'Regreso rápido',
      message: 'ATLAS conserva una gran reserva de energía y pone rumbo directo a la Tierra.',
    };
  }

  if (totalScore >= 18) {
    return {
      label: 'Regreso seguro',
      message: 'ATLAS inicia un regreso estable y seguro con LURRA protegida.',
    };
  }

  return {
    label: 'Regreso de ahorro',
    message: 'ATLAS toma una ruta más lenta para ahorrar energía, pero la misión se completa con éxito.',
  };
}
