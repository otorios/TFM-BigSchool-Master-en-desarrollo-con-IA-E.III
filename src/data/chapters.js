export const chapters = [
  {
    id: 1,
    title: 'Una voz entre las estrellas',
    objective: 'Restablecer las comunicaciones de ATLAS.',
    module: 'Módulo de comunicaciones',
    observationSeconds: 8,
    errorCost: 1,
    intro:
      'La tormenta ha dejado a ATLAS sin comunicaciones. COSMO necesita tu ayuda para reconstruir el transmisor y descubrir el origen de una señal imposible.',
    success:
      'Las comunicaciones vuelven a funcionar. La señal menciona ORIOS y LURRA, aunque parece proceder de una tecnología mucho más antigua.',
    pairs: [
      {
        id: 'sun',
        name: 'Sol',
        clue: 'Soy la estrella situada en el centro del sistema solar.',
        symbol: '☀',
        image: null,
      },
      {
        id: 'earth',
        name: 'Tierra',
        clue: 'Soy el planeta en el que vivimos y tengo agua líquida en mi superficie.',
        symbol: '⊕',
        image: null,
      },
      {
        id: 'moon',
        name: 'Luna',
        clue: 'Soy el satélite natural que orbita la Tierra.',
        symbol: '☾',
        image: null,
      },
      {
        id: 'milky-way',
        name: 'Vía Láctea',
        clue: 'Soy la galaxia en la que se encuentra el sistema solar.',
        symbol: '✦',
        image: null,
      },
    ],
  },
  {
    id: 2,
    title: 'Las semillas de la Tierra',
    objective: 'Recuperar la protección de la Cápsula LURRA.',
    module: 'Módulo de protección de LURRA',
    observationSeconds: 12,
    errorCost: 2,
    intro:
      'El laboratorio pierde energía y las semillas de LURRA están en peligro. Reconstruye su sistema de protección antes de que la reserva se agote.',
    success:
      'LURRA está estable. COSMO descubre en la señal un protocolo de conservación casi idéntico y un mapa incompleto hacia una antigua baliza.',
    pairs: [
      {
        id: 'atmosphere',
        name: 'Atmósfera',
        clue: 'Soy la capa de gases que rodea un planeta.',
        symbol: '◉',
        image: null,
      },
      {
        id: 'magnetosphere',
        name: 'Magnetosfera',
        clue: 'Soy la región dominada por el campo magnético de un planeta y ayudo a protegerlo de partículas procedentes del espacio.',
        symbol: '⌁',
        image: null,
      },
      {
        id: 'habitable-zone',
        name: 'Zona habitable',
        clue: 'Soy la región alrededor de una estrella donde podría existir agua líquida en la superficie de un planeta.',
        symbol: '◎',
        image: null,
      },
      {
        id: 'exoplanet',
        name: 'Exoplaneta',
        clue: 'Soy un planeta que orbita una estrella distinta del Sol.',
        symbol: '●',
        image: null,
      },
      {
        id: 'comet',
        name: 'Cometa',
        clue: 'Estoy formado por hielo, roca y polvo; al acercarme al Sol puedo desarrollar una cola.',
        symbol: '☄',
        image: null,
      },
      {
        id: 'asteroid',
        name: 'Asteroide',
        clue: 'Soy un cuerpo rocoso o metálico, más pequeño que un planeta, que orbita el Sol.',
        symbol: '◆',
        image: null,
      },
    ],
  },
  {
    id: 3,
    title: 'El camino a casa',
    objective: 'Reconstruir la navegación y reactivar la propulsión.',
    module: 'Módulo de navegación y propulsión',
    observationSeconds: 16,
    errorCost: 3,
    intro:
      'El mapa de la baliza está incompleto. Reconstruye las referencias estelares para encontrar una ruta segura de regreso a la Tierra.',
    success:
      'La ruta está completa. La baliza reconoció el protocolo de LURRA y respondió a la identificación de emergencia de ATLAS: nunca conoció el futuro.',
    pairs: [
      {
        id: 'orbit',
        name: 'Órbita',
        clue: 'Soy la trayectoria que sigue un objeto alrededor de otro por efecto de la gravedad.',
        symbol: '⟲',
        image: null,
      },
      {
        id: 'gravity',
        name: 'Gravedad',
        clue: 'Soy la fuerza de atracción que existe entre los cuerpos con masa.',
        symbol: '↓',
        image: null,
      },
      {
        id: 'light-year',
        name: 'Año luz',
        clue: 'Soy la distancia que recorre la luz durante un año.',
        symbol: '↝',
        image: null,
      },
      {
        id: 'constellation',
        name: 'Constelación',
        clue: 'Soy una región del cielo asociada a un patrón reconocible de estrellas.',
        symbol: '⁂',
        image: null,
      },
      {
        id: 'nebula',
        name: 'Nebulosa',
        clue: 'Soy una nube de gas y polvo situada entre las estrellas o alrededor de ellas.',
        symbol: '☁',
        image: null,
      },
      {
        id: 'supernova',
        name: 'Supernova',
        clue: 'Soy la enorme explosión que puede producirse al final de la vida de una estrella.',
        symbol: '✺',
        image: null,
      },
      {
        id: 'pulsar',
        name: 'Púlsar',
        clue: 'Soy una estrella de neutrones que gira rápidamente y emite pulsos regulares.',
        symbol: '⌁',
        image: null,
      },
      {
        id: 'black-hole',
        name: 'Agujero negro',
        clue: 'Soy un objeto con una gravedad tan intensa que ni siquiera la luz puede escapar.',
        symbol: '◍',
        image: null,
      },
    ],
  },
];

export const MAX_ENERGY = 12;
export const MAX_TOTAL_SCORE = MAX_ENERGY * chapters.length;
