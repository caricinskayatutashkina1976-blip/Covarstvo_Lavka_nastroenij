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

const DAILY_QUESTS = [
  {
    text: 'Подберите 3 аромата с настроением «Энергия»',
    type: 'mood',
    mood: 'Энергия',
    target: 3,
    gemReward: 5,
    heartReward: 2
  },
  {
    text: 'Удовольте 3 клиентов за день',
    type: 'happy',
    target: 3,
    gemReward: 4,
    heartReward: 3
  },
  {
    text: 'Подберите 2 аромата с настроением «Уют»',
    type: 'mood',
    mood: 'Уют',
    target: 2,
    gemReward: 4,
    heartReward: 2
  },
  {
    text: 'Сделайте 4 удачных подбора подряд',
    type: 'streak',
    target: 4,
    gemReward: 6,
    heartReward: 4
  },
  {
    text: 'Подберите 2 аромата с настроением «Спокойствие» или «Фокус»',
    type: 'moodMulti',
    moods: ['Спокойствие', 'Фокус'],
    target: 2,
    gemReward: 5,
    heartReward: 2
  }
];

const REPUTATION_TIERS = [
  { min: 0, title: 'Начинающий аромаэксперт', stars: 1, next: 3 },
  { min: 3, title: 'Хозяйка уютной лавки', stars: 2, next: 6 },
  { min: 6, title: 'Мастер ароматных историй', stars: 3, next: 9 },
  { min: 9, title: 'Легенда Коварства Ароматов', stars: 4, next: null }
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
  questMoods: [],
  questType: 'mood',
  questGemReward: 5,
  questHeartReward: 2,
  questCompleted: false,
  questClaimed: false,
  gems: 0,
  favorites: [],
  maxPickStreak: 0
};

/* ===== DOM-элементы ===== */
const els = {
  welcomeScreen: document.getElementById('welcomeScreen'),
  gameScreen: document.getElementById('gameScreen'),
  summaryScreen: document.getElementById('summaryScreen'),
  startDayBtn: document.getElementById('startDayBtn'),
  newDayBtn: document.getElementById('newDayBtn'),
  clientCard: document.getElementById('clientCard'),
  clientArrival: document.getElementById('clientArrival'),
  arrivalText: document.getElementById('arrivalText'),
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
  heartsCard: document.getElementById('heartsCard'),
  heartsFloat: document.getElementById('heartsFloat'),
  clientIndicator: document.getElementById('clientIndicator'),
  moodCircleFill: document.getElementById('moodCircleFill'),
  moodCircleText: document.getElementById('moodCircleText'),
  reputationTitle: document.getElementById('reputationTitle'),
  reputationStars: document.getElementById('reputationStars'),
  reputationTier: document.getElementById('reputationTier'),
  reputationBarFill: document.getElementById('reputationBarFill'),
  reputationProgressLabel: document.getElementById('reputationProgressLabel'),
  reputationCard: document.getElementById('reputationCard'),
  streakCount: document.getElementById('streakCount'),
  pickStreakCount: document.getElementById('pickStreakCount'),
  streakCard: document.getElementById('streakCard'),
  streakIcon: document.getElementById('streakIcon'),
  questText: document.getElementById('questText'),
  questReward: document.getElementById('questReward'),
  questHeartReward: document.getElementById('questHeartReward'),
  questComplete: document.getElementById('questComplete'),
  questCard: document.getElementById('questCard'),
  questBadge: document.getElementById('questBadge'),
  questProgress: document.getElementById('questProgress'),
  questBarFill: document.getElementById('questBarFill'),
  favoritesList: document.getElementById('favoritesList'),
  favoritesCount: document.getElementById('favoritesCount'),
  toastContainer: document.getElementById('toastContainer'),
  summarySales: document.getElementById('summarySales'),
  summaryHappy: document.getElementById('summaryHappy'),
  summaryMood: document.getElementById('summaryMood'),
  summaryReputation: document.getElementById('summaryReputation'),
  summaryHearts: document.getElementById('summaryHearts'),
  summaryStreak: document.getElementById('summaryStreak'),
  summaryQuestReward: document.getElementById('summaryQuestReward'),
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

function formatAromaTags(tags) {
  return tags.split('•').map(t => t.trim()).filter(Boolean)
    .map(t => `<span class="aroma-tag-pill">${t}</span>`).join('');
}

function getAromaTheme(tags) {
  const t = tags.toLowerCase();
  if (/свеж|лёгк|легк/.test(t)) return 'theme-fresh';
  if (/цитрус|солнеч|фрукт|энергич/.test(t)) return 'theme-citrus';
  if (/цветоч|романт|благород/.test(t)) return 'theme-floral';
  if (/прян|тёпл|тепл|уют|сладк/.test(t)) return 'theme-spice';
  if (/травян|хвой|спокой|фокус/.test(t)) return 'theme-herbal';
  return 'theme-warm';
}

function getReputation(totalHappy) {
  const tier = getReputationTier(totalHappy);
  return tier.title;
}

function getReputationTier(totalHappy) {
  let current = REPUTATION_TIERS[0];
  for (let i = REPUTATION_TIERS.length - 1; i >= 0; i--) {
    if (totalHappy >= REPUTATION_TIERS[i].min) {
      current = REPUTATION_TIERS[i];
      break;
    }
  }
  return current;
}

function getReputationProgress(totalHappy) {
  const tier = getReputationTier(totalHappy);
  if (tier.next === null) {
    return { current: totalHappy - tier.min, needed: 0, pct: 100, label: 'Максимальный уровень!' };
  }
  const current = totalHappy - tier.min;
  const needed = tier.next - tier.min;
  return {
    current,
    needed,
    pct: (current / needed) * 100,
    label: `${current} / ${needed} до следующего уровня`
  };
}

function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(4 - count);
}

function pickDailyQuest() {
  return DAILY_QUESTS[Math.floor(Math.random() * DAILY_QUESTS.length)];
}

function applyDailyQuest(quest) {
  state.questType = quest.type;
  state.questTarget = quest.target;
  state.questMood = quest.mood || '';
  state.questMoods = quest.moods || [];
  state.questGemReward = quest.gemReward;
  state.questHeartReward = quest.heartReward;
  state.questProgress = 0;
  state.questCompleted = false;
  state.questClaimed = false;

  if (els.questText) els.questText.textContent = quest.text;
  if (els.questReward) els.questReward.textContent = quest.gemReward;
  if (els.questHeartReward) els.questHeartReward.textContent = quest.heartReward;
  if (els.questComplete) els.questComplete.classList.add('hidden');
  if (els.questCard) els.questCard.classList.remove('quest-done');
  if (els.questBadge) els.questBadge.textContent = 'Ежедневное';
}

function checkQuestProgress(isCorrect, correctAroma) {
  if (!isCorrect || state.questCompleted) return;

  let advanced = false;

  switch (state.questType) {
    case 'mood':
      if (correctAroma.mood === state.questMood) advanced = true;
      break;
    case 'moodMulti':
      if (state.questMoods.includes(correctAroma.mood)) advanced = true;
      break;
    case 'happy':
      advanced = true;
      break;
    case 'streak':
      if (state.currentStreak >= state.questTarget) {
        state.questProgress = state.questTarget;
        completeQuest();
        return;
      }
      return;
    default:
      break;
  }

  if (advanced) {
    state.questProgress = Math.min(state.questTarget, state.questProgress + 1);
    if (state.questProgress >= state.questTarget) {
      completeQuest();
    }
  }
}

function completeQuest() {
  if (state.questCompleted) return;
  state.questCompleted = true;

  state.gems += state.questGemReward;
  addHearts(state.questHeartReward, 'Задание выполнено!');

  if (els.questComplete) els.questComplete.classList.remove('hidden');
  if (els.questCard) els.questCard.classList.add('quest-done');
  if (els.questBadge) els.questBadge.textContent = 'Готово ✓';

  showToast(`Ежедневное задание выполнено! +${state.questGemReward} 💎 +${state.questHeartReward} 💖`, 'quest');
}

function addHearts(amount, reason) {
  state.hearts += amount;
  if (els.heartsCard) {
    els.heartsCard.classList.remove('hearts-pop');
    void els.heartsCard.offsetWidth;
    els.heartsCard.classList.add('hearts-pop');
  }
  spawnFloatingHearts(amount);
  if (reason) showToast(`+${amount} 💖 ${reason}`, 'heart');
}

function spawnFloatingHearts(count) {
  if (!els.heartsFloat) return;
  const n = Math.min(count, 5);
  for (let i = 0; i < n; i++) {
    const h = document.createElement('span');
    h.className = 'floating-heart';
    h.textContent = '💖';
    h.style.left = 20 + Math.random() * 60 + '%';
    h.style.animationDelay = i * 0.12 + 's';
    els.heartsFloat.appendChild(h);
    setTimeout(() => h.remove(), 1200);
  }
}

function showToast(message, type = 'info') {
  if (!els.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  els.toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-show'));
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

function updateStreakUI() {
  if (els.pickStreakCount) els.pickStreakCount.textContent = state.currentStreak;
  if (els.streakCount) els.streakCount.textContent = state.streak;

  if (els.streakCard) {
    els.streakCard.classList.toggle('streak-hot', state.currentStreak >= 3);
    els.streakCard.classList.toggle('streak-fire', state.streak >= 1);
  }
  if (els.streakIcon) {
    if (state.currentStreak >= 5) els.streakIcon.textContent = '🔥';
    else if (state.currentStreak >= 3) els.streakIcon.textContent = '✨';
    else els.streakIcon.textContent = '🕯️';
  }
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
        <stop offset="0%" stop-color="#D8AAA2"/>
        <stop offset="100%" stop-color="#C99B6A"/>
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

  const mood = clampMood(state.mood);
  els.moodBar.style.width = mood + '%';
  els.moodPercent.textContent = mood + '%';
  els.moodCircleText.textContent = mood + '%';

  const circumference = 264;
  const offset = circumference - (circumference * mood / 100);
  els.moodCircleFill.style.strokeDashoffset = offset;

  const tier = getReputationTier(state.totalHappy);
  const repProgress = getReputationProgress(state.totalHappy);

  els.reputationTitle.textContent = tier.title;
  if (els.reputationStars) els.reputationStars.textContent = renderStars(tier.stars);
  if (els.reputationTier) els.reputationTier.textContent = tier.stars;
  if (els.reputationBarFill) els.reputationBarFill.style.width = repProgress.pct + '%';
  if (els.reputationProgressLabel) els.reputationProgressLabel.textContent = repProgress.label;

  els.questProgress.textContent = `${state.questProgress} / ${state.questTarget}`;
  if (els.questBarFill) {
    const pct = (state.questProgress / state.questTarget) * 100;
    els.questBarFill.style.width = pct + '%';
  }

  if (els.favoritesCount) els.favoritesCount.textContent = state.favorites.length;

  updateStreakUI();
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

  els.clientCard.classList.remove('animate-in', 'client-visible');
  els.clientCard.classList.add('client-hidden');
  els.hintBox.classList.add('hidden');
  els.hintBox.textContent = '';
  els.hintBtn.disabled = false;
  els.resultBlock.classList.add('hidden');
  els.resultBlock.classList.remove('success', 'partial');
  els.resultSparks.innerHTML = '';
  els.aromaGrid.innerHTML = '';

  playClientEntrance(client);
}

function playClientEntrance(client) {
  if (els.clientArrival) {
    els.clientArrival.classList.remove('hidden');
    els.arrivalText.textContent = `В лавку входит ${client.name}...`;
    els.clientArrival.classList.remove('arrival-play');
    void els.clientArrival.offsetWidth;
    els.clientArrival.classList.add('arrival-play');
  }

  setTimeout(() => {
    if (els.clientArrival) els.clientArrival.classList.add('hidden');

    els.clientAvatar.textContent = client.avatar;
    els.clientName.textContent = client.name;
    els.clientMood.textContent = client.moodTag;
    els.clientRequest.textContent = client.request;

    els.clientCard.classList.remove('client-hidden');
    els.clientCard.classList.add('animate-in', 'client-visible');

    const options = pickAromaOptions(client.correctAroma);
    options.forEach((aroma, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `aroma-card aroma-enter ${getAromaTheme(aroma.tags)}`;
      card.style.animationDelay = (0.12 + i * 0.08) + 's';
      card.dataset.id = aroma.id;
      card.innerHTML = `
        <div class="aroma-card-shine"></div>
        <div class="aroma-card-art">
          <span class="aroma-icon">${aroma.icon}</span>
        </div>
        <div class="aroma-card-body">
          <div class="aroma-name">${aroma.name}</div>
          <div class="aroma-desc">${aroma.description}</div>
          <div class="aroma-tags">${formatAromaTags(aroma.tags)}</div>
        </div>
      `;
      card.addEventListener('click', () => handleAromaChoice(aroma.id, card));
      els.aromaGrid.appendChild(card);
    });

    updateClientIndicator();
  }, 900);
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
    state.currentStreak += 1;
    state.maxPickStreak = Math.max(state.maxPickStreak, state.currentStreak);

    addHearts(1, 'Удачный подбор!');

    if (state.currentStreak === 3) {
      addHearts(1, 'Серия из 3 подборов!');
      showToast('🔥 Серия из 3 удачных подборов!', 'streak');
    } else if (state.currentStreak === 5) {
      addHearts(2, 'Идеальная серия!');
      showToast('🔥 Потрясающая серия — 5 подряд!', 'streak');
    }

    const moodBoost = Math.random() > 0.5 ? 15 : 10;
    state.mood = clampMood(state.mood + moodBoost);

    checkQuestProgress(true, correctAroma);

    const favAdded = addFavorite(correctAroma);
    showResult(true, client, correctAroma);
    spawnSparks(true);

    if (els.reputationCard) {
      els.reputationCard.classList.remove('rep-levelup');
      void els.reputationCard.offsetWidth;
      els.reputationCard.classList.add('rep-pulse');
      setTimeout(() => els.reputationCard.classList.remove('rep-pulse'), 600);
    }
  } else {
    state.mood = clampMood(state.mood + 3);
    if (state.currentStreak >= 2) {
      showToast('Серия прервана. Но вы всё равно помогли клиенту!', 'info');
    }
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
  if (state.favorites.some(f => f.id === aroma.id)) return false;
  state.favorites.push(aroma);
  renderFavorites(true);
  showToast(`${aroma.icon} «${aroma.name}» добавлен в избранное!`, 'favorite');
  return true;
}

function renderFavorites(highlightNew) {
  if (state.favorites.length === 0) {
    els.favoritesList.innerHTML = '<span class="favorites-empty">Удачные подборы появятся здесь</span>';
    return;
  }

  els.favoritesList.innerHTML = state.favorites.map((a, i) => {
    const isNew = highlightNew && i === state.favorites.length - 1;
    return `
      <span class="favorite-slot${isNew ? ' favorite-new' : ''}" title="${a.name}">
        <span class="fav-icon">${a.icon}</span>
      </span>
    `;
  }).join('');
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
  const prevTier = getReputationTier(state.totalHappy - state.dayHappy);

  if (state.dayHappy === CLIENTS_PER_DAY) {
    state.streak += 1;
    addHearts(3, 'Идеальный день в лавке!');
    showToast('🌟 Идеальный день — все клиенты довольны!', 'streak');
  } else {
    state.streak = 0;
  }

  if (state.questType === 'happy' && !state.questCompleted && state.dayHappy >= state.questTarget) {
    state.questProgress = state.questTarget;
    completeQuest();
  }

  els.summarySales.textContent = state.daySales;
  els.summaryHappy.textContent = state.dayHappy;
  els.summaryMood.textContent = clampMood(state.mood) + '%';
  els.summaryReputation.textContent = getReputation(state.totalHappy);
  if (els.summaryHearts) els.summaryHearts.textContent = state.hearts;
  if (els.summaryStreak) els.summaryStreak.textContent = state.maxPickStreak;

  if (els.summaryQuestReward) {
    if (state.questCompleted) {
      els.summaryQuestReward.textContent =
        `✨ Задание дня выполнено! Получено: ${state.questGemReward} 💎 и ${state.questHeartReward} 💖`;
      els.summaryQuestReward.classList.remove('hidden');
    } else {
      els.summaryQuestReward.classList.add('hidden');
    }
  }

  els.summaryText.textContent = getSummaryText(state.dayHappy, state.daySales);

  const newTier = getReputationTier(state.totalHappy);
  if (newTier.stars > prevTier.stars) {
    showToast(`⭐ Новый уровень репутации: ${newTier.title}!`, 'quest');
  }

  state.maxPickStreak = 0;
  updateStats();
  showScreen(els.summaryScreen);
}

/* ===== Начало дня ===== */
function startDay() {
  state.dayClients = pickDayClients();
  state.currentIndex = 0;
  state.daySales = 0;
  state.dayHappy = 0;
  state.maxPickStreak = 0;
  state.currentStreak = 0;
  state.answered = false;
  state.hintUsed = false;

  applyDailyQuest(pickDailyQuest());
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
