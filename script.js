/* ===== Данные ароматов ===== */
const AROMAS = [
  {
    id: 'lavender',
    name: 'Лаванда',
    description: 'Спокойствие, сон, расслабление',
    tags: 'Травяной • Спокойный',
    icon: '🪻',
    mood: 'Спокойствие'
  },
  {
    id: 'vanilla',
    name: 'Ваниль',
    description: 'Тепло, уют, нежность',
    tags: 'Сладкий • Уютный',
    icon: '🍦',
    mood: 'Уют'
  },
  {
    id: 'pine_mandarin',
    name: 'Хвоя и мандарин',
    description: 'Праздник, свежесть, Новый год',
    tags: 'Хвойный • Праздничный',
    icon: '🍊',
    mood: 'Праздник'
  },
  {
    id: 'grapefruit_vetiver',
    name: 'Грейпфрут и ветивер',
    description: 'Энергия, собранность, уверенность',
    tags: 'Свежий • Деловой',
    icon: '🌿',
    mood: 'Энергия'
  },
  {
    id: 'quince_spice',
    name: 'Печёная айва с пряностями',
    description: 'Осень, дом, чай, тепло',
    tags: 'Тёплый • Пряный',
    icon: '🍯',
    mood: 'Уют'
  },
  {
    id: 'cedar_rose',
    name: 'Белый кедр и роза',
    description: 'Элегантность, женственность, мягкость',
    tags: 'Цветочный • Благородный',
    icon: '🌹',
    mood: 'Романтика'
  },
  {
    id: 'mango',
    name: 'Манго',
    description: 'Яркость, лето, радость',
    tags: 'Фруктовый • Солнечный',
    icon: '🥭',
    mood: 'Радость'
  },
  {
    id: 'morning_dew',
    name: 'Утренняя роса',
    description: 'Чистота, свежесть, лёгкость',
    tags: 'Свежий • Лёгкий',
    icon: '💧',
    mood: 'Свежесть'
  },
  {
    id: 'lavender_sage',
    name: 'Лаванда и шалфей',
    description: 'Спокойствие, фокус, ясность',
    tags: 'Травяной • Спокойный',
    icon: '🪻',
    mood: 'Фокус'
  },
  {
    id: 'citrus_charge',
    name: 'Цитрусовый заряд',
    description: 'Энергия, бодрость, позитив',
    tags: 'Цитрусовый • Энергичный',
    icon: '🍋',
    mood: 'Энергия'
  }
];

/* ===== Данные клиентов ===== */
const CLIENTS = [
  {
    name: 'Софья',
    avatar: '👩‍💼',
    moodTag: 'Деловая',
    request: '«Завтра важная презентация. Нужен аромат, который даст энергию и поможет собраться.»',
    correctAroma: 'grapefruit_vetiver',
    category: 'business',
    explanation: 'Свежий цитрусово-древесный характер помогает почувствовать собранность и уверенность.',
    reward: 1,
    hint: 'Подумайте об аромате с нотами цитруса и древесной собранности.'
  },
  {
    name: 'Марина',
    avatar: '😴',
    moodTag: 'Уставшая',
    request: '«Хочу вечером выключить голову, зажечь свечу и просто отдохнуть.»',
    correctAroma: 'lavender',
    category: 'relax',
    explanation: 'Лаванда ассоциируется со спокойствием, расслаблением и мягким вечерним ритуалом.',
    reward: 1,
    hint: 'Классический травяной аромат для вечернего покоя.'
  },
  {
    name: 'Анна',
    avatar: '💃',
    moodTag: 'Романтичная',
    request: '«Мне нужен аромат для красивого вечера, чтобы было женственно и нежно.»',
    correctAroma: 'cedar_rose',
    category: 'romantic',
    explanation: 'Роза звучит женственно, а кедр добавляет глубину и элегантность.',
    reward: 1,
    hint: 'Цветочные ноты с благородной древесной глубиной.'
  },
  {
    name: 'Ирина',
    avatar: '🎄',
    moodTag: 'Праздничная',
    request: '«Хочу аромат, чтобы дома сразу стало ощущение праздника.»',
    correctAroma: 'pine_mandarin',
    category: 'festive',
    explanation: 'Хвоя и мандарин создают настроение зимнего праздника и домашнего тепла.',
    reward: 1,
    hint: 'Зимний аромат с хвойными и цитрусовыми нотами.'
  },
  {
    name: 'Ольга',
    avatar: '🏡',
    moodTag: 'Домашняя',
    request: '«Хочу аромат для кухни-гостиной: чай, плед, уют и спокойный вечер.»',
    correctAroma: 'quince_spice',
    category: 'cozy',
    explanation: 'Пряная айва создаёт ощущение тёплого дома, чая и мягкого света.',
    reward: 1,
    hint: 'Тёплый пряный аромат, как чашка чая у камина.'
  },
  {
    name: 'Кристина',
    avatar: '☀️',
    moodTag: 'Яркая',
    request: '«Мне хочется чего-то летнего, сочного и радостного.»',
    correctAroma: 'mango',
    category: 'bright',
    explanation: 'Манго звучит солнечно, сочно и поднимает настроение.',
    reward: 1,
    hint: 'Сочный фруктовый аромат, как луч солнца.'
  },
  {
    name: 'Елена',
    avatar: '🤍',
    moodTag: 'Минималистка',
    request: '«Мне нужен чистый лёгкий аромат, чтобы не был тяжёлым.»',
    correctAroma: 'morning_dew',
    category: 'minimal',
    explanation: 'Утренняя роса создаёт ощущение чистоты, воздуха и лёгкости.',
    reward: 1,
    hint: 'Лёгкий свежий аромат, как утренний воздух.'
  },
  {
    name: 'Виктория',
    avatar: '📚',
    moodTag: 'Сосредоточенная',
    request: '«Хочу аромат для рабочего стола, чтобы не отвлекал, а помогал думать.»',
    correctAroma: 'lavender_sage',
    category: 'focus',
    explanation: 'Лаванда и шалфей дают ощущение спокойного фокуса и ясности.',
    reward: 1,
    hint: 'Травяной аромат для ясности и спокойной концентрации.'
  },
  {
    name: 'Дарья',
    avatar: '⚡',
    moodTag: 'Энергичная',
    request: '«Нужен аромат на утро, чтобы проснуться и зарядиться настроением.»',
    correctAroma: 'citrus_charge',
    category: 'energy',
    explanation: 'Цитрусовые ноты ассоциируются с бодростью, свежестью и позитивом.',
    reward: 1,
    hint: 'Бодрящий цитрусовый аромат для утреннего заряда.'
  },
  {
    name: 'Наталья',
    avatar: '🎁',
    moodTag: 'Заботливая',
    request: '«Ищу подарок для подруги. Хочется, чтобы было тепло, нежно и не слишком ярко.»',
    correctAroma: 'vanilla',
    category: 'gift',
    explanation: 'Ваниль звучит мягко, уютно и подходит для душевного подарка.',
    reward: 1,
    hint: 'Нежный сладковатый аромат, как объятие.'
  }
];

const DAILY_TIPS = [
  'Слушайте не только слова клиента, но и его настроение — оно подскажет верный аромат.',
  'Энергичные ароматы часто содержат цитрусовые ноты.',
  'Для вечернего отдыха идеально подходят лавандовые композиции.',
  'Праздничное настроение создают хвойные и пряные ароматы.',
  'Романтичный вечер звучит лучше с цветочными и древесными нотами.'
];

const CLIENTS_PER_DAY = 5;

/* ===== Состояние игры ===== */
const state = {
  sales: 0,
  happyClients: 0,
  totalHappy: 0,
  mood: 50,
  hearts: 0,
  streak: 0,
  currentStreak: 0,
  dayClients: [],
  currentIndex: 0,
  answered: false,
  hintUsed: false,
  daySales: 0,
  dayHappy: 0,
  questProgress: 0,
  questTarget: 3,
  questMood: 'Энергия',
  favorites: []
};

/* ===== DOM-элементы ===== */
const els = {
  welcomeScreen: document.getElementById('welcomeScreen'),
  gameScreen: document.getElementById('gameScreen'),
  summaryScreen: document.getElementById('summaryScreen'),
  startDayBtn: document.getElementById('startDayBtn'),
  newDayBtn: document.getElementById('newDayBtn'),
  clientCard: document.getElementById('clientCard'),
  clientAvatar: document.getElementById('clientAvatar'),
  clientName: document.getElementById('clientName'),
  clientMood: document.getElementById('clientMood'),
  clientRequest: document.getElementById('clientRequest'),
  aromaGrid: document.getElementById('aromaGrid'),
  resultBlock: document.getElementById('resultBlock'),
  resultMessage: document.getElementById('resultMessage'),
  resultExplanation: document.getElementById('resultExplanation'),
  resultSparks: document.getElementById('resultSparks'),
  nextClientBtn: document.getElementById('nextClientBtn'),
  hintBtn: document.getElementById('hintBtn'),
  hintBox: document.getElementById('hintBox'),
  salesCount: document.getElementById('salesCount'),
  happyCount: document.getElementById('happyCount'),
  moodBar: document.getElementById('moodBar'),
  moodPercent: document.getElementById('moodPercent'),
  heartsCount: document.getElementById('heartsCount'),
  clientIndicator: document.getElementById('clientIndicator'),
  moodCircleFill: document.getElementById('moodCircleFill'),
  moodCircleText: document.getElementById('moodCircleText'),
  reputationTitle: document.getElementById('reputationTitle'),
  streakCount: document.getElementById('streakCount'),
  questProgress: document.getElementById('questProgress'),
  favoritesList: document.getElementById('favoritesList'),
  summarySales: document.getElementById('summarySales'),
  summaryHappy: document.getElementById('summaryHappy'),
  summaryMood: document.getElementById('summaryMood'),
  summaryReputation: document.getElementById('summaryReputation'),
  summaryText: document.getElementById('summaryText'),
  dailyTip: document.getElementById('dailyTip')
};

/* ===== Утилиты ===== */
function getAromaById(id) {
  return AROMAS.find(a => a.id === id);
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickDayClients() {
  return shuffleArray(CLIENTS).slice(0, CLIENTS_PER_DAY);
}

function pickAromaOptions(correctId) {
  const others = AROMAS.filter(a => a.id !== correctId);
  const wrong = shuffleArray(others).slice(0, 3);
  return shuffleArray([getAromaById(correctId), ...wrong]);
}

function getReputation(totalHappy) {
  if (totalHappy >= 9) return 'Легенда Коварства Ароматов';
  if (totalHappy >= 6) return 'Мастер ароматных историй';
  if (totalHappy >= 3) return 'Хозяйка уютной лавки';
  return 'Начинающий аромаэксперт';
}

function clampMood(value) {
  return Math.max(0, Math.min(100, value));
}

function getSummaryText(dayHappy, daySales) {
  if (dayHappy === CLIENTS_PER_DAY) {
    return 'Волшебный день! Каждый гость ушёл с улыбкой и идеальным ароматом. Лавка сияет, как золотая свеча в сумерках.';
  }
  if (dayHappy >= 3) {
    return 'Хороший день в лавке. Большинство клиентов довольны, а ароматный уют согревает сердца.';
  }
  if (dayHappy >= 1) {
    return 'День был непростым, но вы учитесь понимать настроения. Завтра получится ещё лучше!';
  }
  return 'Сегодня гости искали своё настроение... Завтра новый день — и новые ароматные истории.';
}

/* ===== SVG градиент для круга настроения ===== */
function initMoodGradient() {
  const svg = document.querySelector('.mood-circle svg');
  if (!svg.querySelector('defs')) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c9a0a0"/>
        <stop offset="100%" stop-color="#c9a962"/>
      </linearGradient>
    `;
    svg.insertBefore(defs, svg.firstChild);
  }
}

/* ===== Обновление UI ===== */
function updateStats() {
  els.salesCount.textContent = state.sales;
  els.happyCount.textContent = state.happyClients;
  els.heartsCount.textContent = state.hearts;
  els.streakCount.textContent = state.streak;

  const mood = clampMood(state.mood);
  els.moodBar.style.width = mood + '%';
  els.moodPercent.textContent = mood + '%';
  els.moodCircleText.textContent = mood + '%';

  const circumference = 264;
  const offset = circumference - (circumference * mood / 100);
  els.moodCircleFill.style.strokeDashoffset = offset;

  els.reputationTitle.textContent = getReputation(state.totalHappy);
  els.questProgress.textContent = `${state.questProgress} / ${state.questTarget}`;
}

function updateClientIndicator() {
  const num = state.currentIndex + 1;
  els.clientIndicator.textContent = `Клиент ${num} из ${CLIENTS_PER_DAY}`;
}

function showScreen(screen) {
  els.welcomeScreen.classList.add('hidden');
  els.gameScreen.classList.add('hidden');
  els.summaryScreen.classList.add('hidden');
  screen.classList.remove('hidden');
}

/* ===== Рендер клиента ===== */
function renderClient() {
  const client = state.dayClients[state.currentIndex];
  if (!client) return;

  state.answered = false;
  state.hintUsed = false;

  els.clientCard.classList.remove('animate-in');
  void els.clientCard.offsetWidth;
  els.clientCard.classList.add('animate-in');

  els.clientAvatar.textContent = client.avatar;
  els.clientName.textContent = client.name;
  els.clientMood.textContent = client.moodTag;
  els.clientRequest.textContent = client.request;

  els.hintBox.classList.add('hidden');
  els.hintBox.textContent = '';
  els.hintBtn.disabled = false;

  els.resultBlock.classList.add('hidden');
  els.resultBlock.classList.remove('success', 'partial');
  els.resultSparks.innerHTML = '';

  const options = pickAromaOptions(client.correctAroma);
  els.aromaGrid.innerHTML = '';

  options.forEach(aroma => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'aroma-card';
    card.dataset.id = aroma.id;
    card.innerHTML = `
      <span class="aroma-icon">${aroma.icon}</span>
      <div class="aroma-name">${aroma.name}</div>
      <div class="aroma-desc">${aroma.description}</div>
      <div class="aroma-tags">${aroma.tags}</div>
    `;
    card.addEventListener('click', () => handleAromaChoice(aroma.id, card));
    els.aromaGrid.appendChild(card);
  });

  updateClientIndicator();
}

/* ===== Выбор аромата ===== */
function handleAromaChoice(chosenId, cardEl) {
  if (state.answered) return;
  state.answered = true;

  const client = state.dayClients[state.currentIndex];
  const isCorrect = chosenId === client.correctAroma;
  const correctAroma = getAromaById(client.correctAroma);

  const allCards = els.aromaGrid.querySelectorAll('.aroma-card');
  allCards.forEach(card => {
    card.classList.add('disabled');
    if (card.dataset.id === chosenId) {
      card.classList.add('selected');
    }
    if (card.dataset.id === client.correctAroma) {
      card.classList.add('correct');
    }
    if (card.dataset.id === chosenId && !isCorrect) {
      card.classList.add('wrong');
    }
  });

  els.hintBtn.disabled = true;

  if (isCorrect) {
    state.sales += 1;
    state.happyClients += 1;
    state.totalHappy += 1;
    state.daySales += 1;
    state.dayHappy += 1;
    state.hearts += 1;
    state.currentStreak += 1;

    const moodBoost = Math.random() > 0.5 ? 15 : 10;
    state.mood = clampMood(state.mood + moodBoost);

    if (correctAroma.mood === state.questMood) {
      state.questProgress = Math.min(state.questTarget, state.questProgress + 1);
    }

    addFavorite(correctAroma);
    showResult(true, client, correctAroma);
    spawnSparks(true);
  } else {
    state.mood = clampMood(state.mood + 3);
    state.currentStreak = 0;
    showResult(false, client, correctAroma);
  }

  updateStats();
}

function showResult(isCorrect, client, correctAroma) {
  els.resultBlock.classList.remove('hidden');

  if (isCorrect) {
    els.resultBlock.classList.add('success');
    els.resultMessage.textContent = 'Отличный выбор! Клиент доволен.';
  } else {
    els.resultBlock.classList.add('partial');
    els.resultMessage.textContent =
      `Не совсем то настроение. Лучше подошёл бы аромат «${correctAroma.name}».`;
  }

  els.resultExplanation.textContent = client.explanation;

  const isLast = state.currentIndex >= CLIENTS_PER_DAY - 1;
  els.nextClientBtn.textContent = isLast ? 'Завершить день' : 'Следующий клиент';
}

function spawnSparks(isHearts) {
  const symbols = isHearts ? ['💖', '✨', '💫', '🌸', '⭐'] : [];
  const container = els.resultSparks;

  for (let i = 0; i < 12; i++) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    spark.style.left = 30 + Math.random() * 40 + '%';
    spark.style.top = 30 + Math.random() * 40 + '%';
    const angle = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 60;
    spark.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    spark.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    spark.style.animationDelay = Math.random() * 0.3 + 's';
    container.appendChild(spark);
  }
}

/* ===== Избранные ароматы ===== */
function addFavorite(aroma) {
  if (state.favorites.some(f => f.id === aroma.id)) return;
  state.favorites.push(aroma);
  renderFavorites();
}

function renderFavorites() {
  if (state.favorites.length === 0) {
    els.favoritesList.innerHTML = '<span class="favorites-empty">Удачные подборы появятся здесь</span>';
    return;
  }

  els.favoritesList.innerHTML = state.favorites.map(a => `
    <span class="favorite-chip">
      <span class="fav-icon">${a.icon}</span>
      ${a.name}
    </span>
  `).join('');
}

/* ===== Подсказка ===== */
function useHint() {
  if (state.hintUsed || state.answered) return;
  state.hintUsed = true;

  const client = state.dayClients[state.currentIndex];
  els.hintBox.textContent = '💡 ' + client.hint;
  els.hintBox.classList.remove('hidden');
  els.hintBtn.disabled = true;
}

/* ===== Следующий клиент / итоги ===== */
function nextClient() {
  if (state.currentIndex >= CLIENTS_PER_DAY - 1) {
    endDay();
    return;
  }

  state.currentIndex += 1;
  renderClient();
}

function endDay() {
  if (state.dayHappy === CLIENTS_PER_DAY) {
    state.streak += 1;
  } else {
    state.streak = 0;
  }

  els.summarySales.textContent = state.daySales;
  els.summaryHappy.textContent = state.dayHappy;
  els.summaryMood.textContent = clampMood(state.mood) + '%';
  els.summaryReputation.textContent = getReputation(state.totalHappy);
  els.summaryText.textContent = getSummaryText(state.dayHappy, state.daySales);

  updateStats();
  showScreen(els.summaryScreen);
}

/* ===== Начало дня ===== */
function startDay() {
  state.dayClients = pickDayClients();
  state.currentIndex = 0;
  state.daySales = 0;
  state.dayHappy = 0;
  state.questProgress = 0;
  state.answered = false;
  state.hintUsed = false;

  els.dailyTip.textContent = DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];

  updateStats();
  showScreen(els.gameScreen);
  renderClient();
}

function startNewDay() {
  startDay();
}

/* ===== Инициализация ===== */
function init() {
  initMoodGradient();
  updateStats();
  renderFavorites();

  els.startDayBtn.addEventListener('click', startDay);
  els.newDayBtn.addEventListener('click', startNewDay);
  els.nextClientBtn.addEventListener('click', nextClient);
  els.hintBtn.addEventListener('click', useHint);

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
