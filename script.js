/* ===== Данные ароматов ===== */
const AROMAS = [
  {
    id: 'lavender',
    name: 'Лаванда',
    description: 'Спокойствие, сон, расслабление',
    tags: 'Травяной • Спокойный',
    image: 'assets/aromas/lavender.png',
    mood: 'Спокойствие'
  },
  {
    id: 'vanilla',
    name: 'Ваниль',
    description: 'Тепло, уют, нежность',
    tags: 'Сладкий • Уютный',
    image: 'assets/aromas/vanilla.png',
    mood: 'Уют'
  },
  {
    id: 'pine_mandarin',
    name: 'Хвоя и мандарин',
    description: 'Праздник, свежесть, Новый год',
    tags: 'Хвойный • Праздничный',
    image: 'assets/aromas/pine_mandarin.png',
    mood: 'Праздник'
  },
  {
    id: 'grapefruit_vetiver',
    name: 'Грейпфрут и ветивер',
    description: 'Энергия, собранность, уверенность',
    tags: 'Свежий • Деловой',
    image: 'assets/aromas/grapefruit_vetiver.png',
    mood: 'Энергия'
  },
  {
    id: 'quince_spice',
    name: 'Печёная айва с пряностями',
    description: 'Осень, дом, чай, тепло',
    tags: 'Тёплый • Пряный',
    image: 'assets/aromas/quince_spice.png',
    mood: 'Уют'
  },
  {
    id: 'cedar_rose',
    name: 'Белый кедр и роза',
    description: 'Элегантность, женственность, мягкость',
    tags: 'Цветочный • Благородный',
    image: 'assets/aromas/cedar_rose.png',
    mood: 'Романтика'
  },
  {
    id: 'mango',
    name: 'Манго',
    description: 'Яркость, лето, радость',
    tags: 'Фруктовый • Солнечный',
    image: 'assets/aromas/mango.png',
    mood: 'Радость'
  },
  {
    id: 'morning_dew',
    name: 'Утренняя роса',
    description: 'Чистота, свежесть, лёгкость',
    tags: 'Свежий • Лёгкий',
    image: 'assets/aromas/morning_dew.png',
    mood: 'Свежесть'
  },
  {
    id: 'lavender_sage',
    name: 'Лаванда и шалфей',
    description: 'Спокойствие, фокус, ясность',
    tags: 'Травяной • Спокойный',
    image: 'assets/aromas/lavender_sage.png',
    mood: 'Фокус'
  },
  {
    id: 'citrus_charge',
    name: 'Цитрусовый заряд',
    description: 'Энергия, бодрость, позитив',
    tags: 'Цитрусовый • Энергичный',
    image: 'assets/aromas/citrus_charge.png',
    mood: 'Энергия'
  }
];

/* ===== Данные клиентов ===== */
const CLIENTS = [
  {
    name: 'Софья',
    image: 'assets/clients/sofia.png',
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
    image: 'assets/clients/marina.png',
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
    image: 'assets/clients/anna.png',
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
    image: 'assets/clients/irina.png',
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
    image: 'assets/clients/olga.png',
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
    image: 'assets/clients/kristina.png',
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
    image: 'assets/clients/elena.png',
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
    image: 'assets/clients/viktoria.png',
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
    image: 'assets/clients/darya.png',
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
    image: 'assets/clients/natalya.png',
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

/* ===== Каталоги магазина ===== */
const SHOP_CANDLES = [
  { id: 'memory', name: 'Воспоминание', description: 'Мягкий янтарный свет и ноты ванили с кедром.', mood: 'Ностальгия', price: 120 },
  { id: 'botanical', name: 'Ожидание встречи', description: 'Ботаническая свеча с лавандой и зелёными нотами.', mood: 'Романтика', price: 140 },
  { id: 'pine_candle', name: 'Хвоя и мандарин', description: 'Праздничный аромат новогодней ёлки и цитруса.', mood: 'Праздник', price: 130 },
  { id: 'quince_candle', name: 'Печёная айва', description: 'Тёплые пряности и сладкая запечённая айва.', mood: 'Уют', price: 125 },
  { id: 'lavender_candle', name: 'Лаванда', description: 'Классическая лаванда для спокойного вечера.', mood: 'Спокойствие', price: 110 }
];

const SHOP_DIFFUSERS = [
  { id: 'lavender_field', name: 'Лавандовое поле', description: 'Мягкий травяной букет для спальни и гостиной.', room: 'Спальня, гостиная' },
  { id: 'grapefruit_diff', name: 'Грейпфрут и ветивер', description: 'Свежий деловой аромат для кабинета.', room: 'Кабинет, прихожая' },
  { id: 'dew_diff', name: 'Утренняя роса', description: 'Лёгкая свежесть для минималистичного интерьера.', room: 'Спальня, ванная' },
  { id: 'cedar_diff', name: 'Белый кедр и роза', description: 'Элегантный цветочно-древесный диффузор.', room: 'Гостиная, спальня' }
];

const SHOP_AUTO = [
  { id: 'creed', name: 'Creed Aventus', description: 'Благородный древесно-фруктовый характер.', audience: 'Уверенным водителям' },
  { id: 'citrus_auto', name: 'Цитрусовый заряд', description: 'Бодрящий цитрус для утренних поездок.', audience: 'Энергичным людям' },
  { id: 'mango_auto', name: 'Манго', description: 'Солнечный фруктовый аромат для лета.', audience: 'Любителям яркости' },
  { id: 'grapefruit_auto', name: 'Грейпфрут и ветивер', description: 'Собранный свежий аромат для авто.', audience: 'Деловым клиентам' },
  { id: 'cedar_auto', name: 'Белый кедр', description: 'Чистый древесный аромат для салона.', audience: 'Ценителям элегантности' }
];

const SHOP_OFFERS = [
  {
    id: 'cozy_set',
    name: 'Набор для уютного вечера',
    contents: 'Свеча «Лаванда», диффузор «Лавандовое поле», мини-ваниль',
    bonus: '+1 продажа при следующем правильном подборе',
    bonusType: 'extraSale'
  },
  {
    id: 'gift_set',
    name: 'Подарок до 1000 рублей',
    contents: 'Мини-свеча, саше, открытка с пожеланием',
    bonus: 'Бесплатная подсказка для всех клиентов сегодня',
    bonusType: 'freeHints'
  },
  {
    id: 'car_set',
    name: 'Аромат в машину',
    contents: 'Автопарфюм «Цитрусовый заряд» + освежитель',
    bonus: '+1 продажа и +5 настроения при следующем правильном подборе',
    bonusType: 'carBonus'
  }
];

const COLLECTIONS = [
  { id: 'cozy_evening', name: 'Уютный вечер', aromas: ['lavender', 'vanilla', 'quince_spice'], reward: { hearts: 3, mood: 10 } },
  { id: 'fresh_start', name: 'Свежий старт', aromas: ['morning_dew', 'citrus_charge', 'grapefruit_vetiver'], reward: { hearts: 2, mood: 8 } },
  { id: 'festive_home', name: 'Праздничный дом', aromas: ['pine_mandarin', 'quince_spice'], reward: { hearts: 2, mood: 10 } },
  { id: 'feminine_story', name: 'Женственная история', aromas: ['cedar_rose', 'vanilla'], reward: { hearts: 3, mood: 8 } },
  { id: 'for_car', name: 'Для авто', aromas: ['citrus_charge', 'mango', 'grapefruit_vetiver'], reward: { hearts: 2, mood: 12 } }
];

const HOSTESS_TIPS = [
  'Для делового настроения выбирайте свежие и древесные ароматы.',
  'Для уюта подойдут ваниль, айва и мягкие пряности.',
  'Для подарка лучше выбирать нежные и понятные ароматы.',
  'Для фокуса подойдут лаванда, шалфей, ветивер.',
  'Для праздника выбирайте хвою, мандарин и пряности.'
];

const MINI_SHOP_ITEMS = [
  { id: 'candles_pack', label: 'Купить 3 свечи', cost: 2, type: 'candles', amount: 3 },
  { id: 'diffusers_pack', label: 'Купить 2 диффузора', cost: 2, type: 'diffusers', amount: 2 },
  { id: 'bottles_pack', label: 'Купить 2 флакона', cost: 2, type: 'bottles', amount: 2 },
  { id: 'decor_pack', label: 'Купить декор', cost: 1, type: 'decor', amount: 2 }
];

const INV_REFILL_COSTS = {
  candles: { cost: 2, amount: 3, label: 'Пополнить свечи' },
  diffusers: { cost: 2, amount: 2, label: 'Пополнить диффузоры' },
  bottles: { cost: 2, amount: 2, label: 'Пополнить флаконы' },
  decor: { cost: 1, amount: 2, label: 'Купить декор' }
};

const SECTION_TITLES = {
  home: 'Главная',
  candles: 'Свечи',
  diffusers: 'Диффузоры',
  auto: 'Автопарфюм',
  offers: 'Спецпредложения',
  inventory: 'Инвентарь',
  collections: 'Коллекции'
};

const SECTION_INTROS = {
  candles: 'Пополняйте витрину свечами — уютная лавка привлекает больше гостей.',
  diffusers: 'Добавляйте диффузоры на полки — аромат мягко наполняет пространство.',
  auto: 'Выставляйте автопарфюм — для клиентов, которые ищут аромат в дорогу.',
  offers: 'Запускайте акции раз в день — они усиливают продажи и настроение лавки.',
  inventory: 'Смотрите запасы и покупайте ресурсы за продажи.',
  collections: 'Собирайте коллекции — каждый правильный подбор добавляет аромат в альбом.'
};

/* ===== Ссылка для связи с Натальей (MAX) ===== */
const NATALYA_CONTACT_URL = 'https://max.ru/u/f9LHodD0cOIGYo3gLQjiuZN4K6jviUocF6RpjxXXG5ZmBzCkKs_UmX4AzXI';

const icons = {
  menu: {
    home: 'assets/icons/menu/home.png',
    candles: 'assets/icons/menu/candle.png',
    diffusers: 'assets/icons/menu/diffuser.png',
    carPerfume: 'assets/icons/menu/car.png',
    offers: 'assets/icons/menu/gift.png',
    inventory: 'assets/icons/menu/inventory.png',
    collections: 'assets/icons/menu/collection.png'
  },
  stats: {
    sales: 'assets/icons/stats/sales.png',
    happy: 'assets/icons/stats/happy.png',
    mood: 'assets/icons/stats/mood.png',
    hearts: 'assets/icons/stats/hearts.png'
  },
  categories: {
    candle: 'assets/icons/categories/candle.png',
    diffuser: 'assets/icons/categories/diffuser.png',
    perfume: 'assets/icons/categories/perfume.png',
    flower: 'assets/icons/categories/flower.png'
  },
  inventory: {
    candle: 'assets/icons/inventory/candle.png',
    diffuser: 'assets/icons/inventory/diffuser.png',
    bottle: 'assets/icons/inventory/bottle.png',
    flower: 'assets/icons/inventory/flower.png',
    plus: 'assets/icons/inventory/plus.png'
  },
  ui: {
    task: 'assets/icons/ui/task.png',
    hint: 'assets/icons/ui/hint.png',
    trophy: 'assets/icons/ui/trophy.png',
    mood: 'assets/icons/ui/mood.png',
    star: 'assets/icons/ui/star.png',
    fire: 'assets/icons/ui/fire.png',
    story: 'assets/icons/ui/story.png',
    gift: 'assets/icons/ui/gift.png',
    bonus: 'assets/icons/ui/bonus.png',
    gem: 'assets/icons/ui/gem.png',
    brand: 'assets/icons/ui/brand.png',
    heart: 'assets/icons/ui/heart.png'
  }
};

const AROMA_TYPE_IMAGES = {
  cozy: { image: icons.categories.candle, product: icons.categories.candle },
  energy: { image: icons.categories.perfume, product: icons.menu.carPerfume },
  feminine: { image: icons.ui.star, product: icons.ui.star },
  calm: { image: icons.categories.diffuser, product: icons.categories.diffuser },
  festive: { image: icons.ui.gift, product: icons.ui.gift }
};

function iconInitial(text) {
  const t = String(text || '').trim();
  return t ? t.charAt(0).toUpperCase() : '?';
}

function iconImg(src, alt, className, fallbackText) {
  const fb = fallbackText || iconInitial(alt);
  return `
    <span class="icon-frame">
      <img src="${src}" alt="${alt}" class="${className}">
      <span class="icon-text-fallback hidden" aria-hidden="true">${fb}</span>
    </span>
  `;
}

function bindImageErrorLogging(root = document) {
  root.querySelectorAll('img').forEach(img => {
    if (img.dataset.errorLogBound) return;
    img.dataset.errorLogBound = '1';
    img.addEventListener('error', () => {
      console.warn('Не загрузилась картинка:', img.src);
    });
  });
}

function bindIconFallbacks(root = document) {
  root.querySelectorAll('.icon-frame img').forEach(img => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = '1';
    const frame = img.closest('.icon-frame');
    const fallback = frame?.querySelector('.icon-text-fallback');
    const showImage = () => {
      img.classList.remove('hidden');
      if (fallback) fallback.classList.add('hidden');
    };
    const showFallback = () => {
      img.classList.add('hidden');
      if (fallback) fallback.classList.remove('hidden');
    };
    img.addEventListener('load', showImage);
    img.addEventListener('error', showFallback);
    if (img.complete) {
      if (img.naturalWidth > 0) showImage();
      else showFallback();
    }
  });
}

function setIconContainer(el, src, alt, className, fallbackText) {
  if (!el) return;
  el.innerHTML = iconImg(src, alt, className, fallbackText);
  bindIconFallbacks(el);
}

function getAromaImage(aroma) {
  return aroma.image || `assets/aromas/${aroma.id}.png`;
}

function hideGamePromoBanner(persist = true) {
  state.promoBannerDismissed = true;
  if (els.gameIntroPanel) els.gameIntroPanel.classList.add('hidden');
  if (persist) sessionStorage.setItem(PROMO_BANNER_KEY, '1');
}

function updateGamePromoBannerVisibility() {
  if (!els.gameIntroPanel) return;
  const onGameScreen = els.gameScreen && !els.gameScreen.classList.contains('hidden');
  const beforeFirstPick = state.currentIndex === 0 && !state.answered;
  const sessionDismissed = sessionStorage.getItem(PROMO_BANNER_KEY) === '1';
  const show = onGameScreen && state.dayStarted && beforeFirstPick &&
    !state.promoBannerDismissed && !sessionDismissed;
  els.gameIntroPanel.classList.toggle('hidden', !show);
}

function openGamePersonalPickModal() {
  openModal('Персональный подбор аромата', `
    <p>Напишите, для чего нужен аромат: для себя, дома, машины или подарка. Наталья поможет подобрать свечу, диффузор, автопарфюм или распив парфюма.</p>
    <a class="btn-telegram" href="${NATALYA_CONTACT_URL}" target="_blank" rel="noopener noreferrer">Написать в MAX</a>
  `);
}

function openGameGiftModal() {
  openModal('Подарок до 1000 ₽', `
    <p>Можно подобрать мини-свечу, аромасаше, автопарфюм или небольшой ароматный набор. Напишите Наталье — она соберёт вариант под повод и бюджет.</p>
    <a class="btn-telegram btn-telegram-inline" href="${NATALYA_CONTACT_URL}" target="_blank" rel="noopener noreferrer">Написать Наталье</a>
  `);
}

function focusGamePlayArea() {
  if (els.clientCard) {
    els.clientCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

const SHARE_PROMO_TEXT = 'Кодовое слово ЛАВКА — назовите его Наталье при заказе свечи, диффузора, автопарфюма или подарочного набора и получите комплимент от Коварство Ароматов (мини-пробник, аромасаше или другой подарок). Бонус действует 7 дней. Один бонус — на один заказ.';
const GAME_TITLE = 'Коварство Ароматов: Лавка настроений';
const THEME_STORAGE_KEY = 'lavka_theme';

function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function applyTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_STORAGE_KEY, next);
  updateThemeToggleUI(next);
}

function updateThemeToggleUI(theme) {
  const isDark = theme === 'dark';
  if (els.themeLight) {
    els.themeLight.classList.toggle('active', !isDark);
    els.themeLight.setAttribute('aria-pressed', String(!isDark));
  }
  if (els.themeDark) {
    els.themeDark.classList.toggle('active', isDark);
    els.themeDark.setAttribute('aria-pressed', String(isDark));
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  const preferred = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = saved || document.documentElement.getAttribute('data-theme') || preferred;
  applyTheme(theme);
}

function bindThemeSwitch() {
  if (els.themeLight) {
    els.themeLight.addEventListener('click', () => applyTheme('light'));
  }
  if (els.themeDark) {
    els.themeDark.addEventListener('click', () => applyTheme('dark'));
  }
}

const LEGAL_DOCS = {
  privacy: {
    title: 'Политика конфиденциальности',
    body: `
      <p class="legal-doc-note">Текст документа будет размещён на сайте. Ниже — заглушка для ознакомления.</p>
      <div class="legal-doc-text">
        <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей игры «Коварство Ароматов: Лавка настроений» и сайта «Коварство Ароматов».</p>
        <p>Оператор обрабатывает персональные данные в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>
        <p>Мы собираем только те данные, которые вы добровольно указываете при обращении за подбором аромата (имя, предпочтения, бюджет, комментарий).</p>
        <p>Данные не передаются третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.</p>
      </div>
    `
  },
  consent: {
    title: 'Согласие на обработку персональных данных',
    body: `
      <p class="legal-doc-note">Текст документа будет размещён на сайте. Ниже — заглушка для ознакомления.</p>
      <div class="legal-doc-text">
        <p>Я даю согласие на обработку моих персональных данных (имя, контактные данные, сведения о предпочтениях), предоставленных при заполнении формы заявки на персональный подбор аромата.</p>
        <p>Цель обработки: связь со мной для подбора ароматической продукции и информирование об акциях «Коварство Ароматов».</p>
        <p>Согласие действует до момента его отзыва путём обращения к оператору.</p>
      </div>
    `
  },
  offer: {
    title: 'Публичная оферта',
    body: `
      <p class="legal-doc-note">Текст документа будет размещён на сайте. Ниже — заглушка для ознакомления.</p>
      <div class="legal-doc-text">
        <p>Настоящий документ является публичной офертой «Коварство Ароматов» о продаже ароматической продукции (свечи, диффузоры, автопарфюм, подарочные наборы).</p>
        <p>Акцептом оферты считается оформление заказа через согласованные каналы связи.</p>
        <p>Цены, ассортимент и условия доставки уточняются при оформлении заказа.</p>
      </div>
    `
  },
  bonus: {
    title: 'Условия бонуса',
    body: `
      <p class="legal-doc-note">Текст документа будет размещён на сайте. Ниже — заглушка для ознакомления.</p>
      <div class="legal-doc-text">
        <p>Кодовое слово <strong>ЛАВКА</strong> предоставляет бонус к заказу после прохождения мини-игры «Лавка настроений».</p>
        <p>Бонус действует при обращении к Наталье через мессенджер MAX в течение срока, указанного в актуальных условиях акции.</p>
        <p>Размер и вид бонуса определяются действующими правилами «Коварство Ароматов» на момент заказа.</p>
        <p>Бонус не суммируется с другими акциями, если иное не указано отдельно.</p>
      </div>
    `
  }
};

/* ===== Типы ароматного результата (лид-магнит) ===== */
const AROMA_TYPES = [
  {
    id: 'cozy',
    title: 'Эстет уюта',
    aromaIds: ['vanilla', 'quince_spice', 'lavender'],
    description: 'Вы выбираете тёплые, мягкие и обволакивающие ароматы. Для вас аромат — это не просто запах, а ощущение дома, заботы и красивого вечера.',
    product: 'Ароматическая свеча или уютный подарочный набор'
  },
  {
    id: 'energy',
    title: 'Энергия и уверенность',
    aromaIds: ['grapefruit_vetiver', 'citrus_charge', 'morning_dew'],
    description: 'Вам подходят свежие, бодрые и собранные ароматы. Они помогают включиться в день, почувствовать уверенность и ясность.',
    product: 'Автопарфюм или диффузор для рабочего пространства'
  },
  {
    id: 'feminine',
    title: 'Женственная история',
    aromaIds: ['cedar_rose', 'vanilla', 'mango'],
    description: 'Ваш ароматный стиль — мягкий, красивый и запоминающийся. Вам близки женственные, эстетичные и немного романтичные композиции.',
    product: 'Свеча, диффузор или распив парфюма для красивого образа'
  },
  {
    id: 'calm',
    title: 'Спокойствие и восстановление',
    aromaIds: ['lavender', 'lavender_sage', 'morning_dew'],
    description: 'Вы выбираете ароматы, которые помогают замедлиться, восстановиться и создать вокруг себя спокойное пространство.',
    product: 'Свеча для вечернего ритуала или диффузор для спальни'
  },
  {
    id: 'festive',
    title: 'Праздничное настроение',
    aromaIds: ['pine_mandarin', 'quince_spice', 'mango'],
    description: 'Вам нравятся ароматы, которые создают настроение, украшают момент и делают обычный день особенным.',
    product: 'Подарочный набор, праздничная свеча или аромат для дома'
  }
];

const DEFAULT_AROMA_TYPE_ID = 'cozy';

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
  maxPickStreak: 0,
  inventory: { candles: 7, diffusers: 5, bottles: 4, decor: 6 },
  collectedAromas: {},
  completedCollections: [],
  activePromo: null,
  promoUsedToday: false,
  promoBonusPending: false,
  freeHintsToday: false,
  currentNav: 'home',
  savedGameScreen: null,
  dayStarted: false,
  showcaseItems: { candles: [], diffusers: [], bottles: [] },
  dayCorrectAromas: [],
  currentAromaType: null,
  leadMessage: '',
  promoBannerDismissed: false
};

const PROMO_BANNER_KEY = 'lavka_promo_banner_dismissed';

/* ===== DOM-элементы ===== */
const els = {};

function cacheElements() {
  Object.assign(els, {
  welcomeScreen: document.getElementById('welcomeScreen'),
  gameScreen: document.getElementById('gameScreen'),
  summaryScreen: document.getElementById('summaryScreen'),
  startDayBtn: document.getElementById('startDayBtn'),
  newDayBtn: document.getElementById('newDayBtn'),
  gameIntroPanel: document.getElementById('gameIntroPanel'),
  gamePromoBanner: document.getElementById('gamePromoBanner'),
  gamePromoClose: document.getElementById('gamePromoClose'),
  gamePromoStartBtn: document.getElementById('gamePromoStartBtn'),
  btnGameWriteNatalya: document.getElementById('btnGameWriteNatalya'),
  btnGamePersonalPick: document.getElementById('btnGamePersonalPick'),
  btnGameGift1000: document.getElementById('btnGameGift1000'),
  clientCard: document.getElementById('clientCard'),
  clientArrival: document.getElementById('clientArrival'),
  arrivalText: document.getElementById('arrivalText'),
  clientAvatarFrame: document.getElementById('clientAvatarFrame'),
  clientAvatarImg: document.getElementById('clientAvatarImg'),
  clientAvatarFallback: document.getElementById('clientAvatarFallback'),
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
  dailyTip: document.getElementById('dailyTip'),
  sectionScreen: document.getElementById('sectionScreen'),
  sectionTitle: document.getElementById('sectionTitle'),
  sectionIntro: document.getElementById('sectionIntro'),
  sectionContent: document.getElementById('sectionContent'),
  backToShopBtn: document.getElementById('backToShopBtn'),
  promoBadge: document.getElementById('promoBadge'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalBox: document.getElementById('modalBox'),
  modalTitle: document.getElementById('modalTitle'),
  modalBody: document.getElementById('modalBody'),
  modalClose: document.getElementById('modalClose'),
  invCandlesQty: document.getElementById('invCandlesQty'),
  invDiffusersQty: document.getElementById('invDiffusersQty'),
  invBottlesQty: document.getElementById('invBottlesQty'),
  invDecorQty: document.getElementById('invDecorQty'),
  invAddBtn: document.getElementById('invAddBtn'),
  quotePlaque: document.getElementById('quotePlaque'),
  resultIcon: document.getElementById('resultIcon'),
  resultType: document.getElementById('resultType'),
  resultDesc: document.getElementById('resultDesc'),
  resultAromas: document.getElementById('resultAromas'),
  resultProductIcon: document.getElementById('resultProductIcon'),
  resultProductText: document.getElementById('resultProductText'),
  btnPersonalPick: document.getElementById('btnPersonalPick'),
  btnViewCandles: document.getElementById('btnViewCandles'),
  btnGift1000: document.getElementById('btnGift1000'),
  btnWriteNatalya: document.getElementById('btnWriteNatalya'),
  leadForm: document.getElementById('leadForm'),
  leadName: document.getElementById('leadName'),
  leadPurpose: document.getElementById('leadPurpose'),
  leadBudget: document.getElementById('leadBudget'),
  leadComment: document.getElementById('leadComment'),
  leadMessageBlock: document.getElementById('leadMessageBlock'),
  leadMessageText: document.getElementById('leadMessageText'),
  btnBuildMessage: document.getElementById('btnBuildMessage'),
  leadConsent: document.getElementById('leadConsent'),
  btnCopyMessage: document.getElementById('btnCopyMessage'),
  btnWriteTelegram: document.getElementById('btnWriteTelegram'),
  shareResultText: document.getElementById('shareResultText'),
  btnCopyShareResult: document.getElementById('btnCopyShareResult'),
  btnCopyPromo: document.getElementById('btnCopyPromo'),
  btnPlayAgain: document.getElementById('btnPlayAgain'),
  themeSwitch: document.getElementById('themeSwitch'),
  themeLight: document.getElementById('themeLight'),
  themeDark: document.getElementById('themeDark')
  });
}

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

function buildAromaArtHtml(aroma) {
  const src = getAromaImage(aroma);
  return `
    <img class="aroma-illustration" src="${src}" alt="${aroma.name}" loading="eager" decoding="async">
    <span class="aroma-illustration-fallback hidden" aria-hidden="true">${iconInitial(aroma.name)}</span>
  `;
}

function bindAromaIllustration(card, aroma) {
  const img = card.querySelector('.aroma-illustration');
  const fallback = card.querySelector('.aroma-illustration-fallback');
  if (!img || !fallback) return;

  const showImage = () => {
    img.classList.remove('hidden');
    fallback.classList.add('hidden');
  };

  const showFallback = () => {
    img.classList.add('hidden');
    fallback.classList.remove('hidden');
  };

  img.addEventListener('load', showImage);
  img.addEventListener('error', showFallback);

  if (img.complete) {
    if (img.naturalWidth > 0) showImage();
    else showFallback();
  }
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
  let html = '';
  for (let i = 0; i < 4; i++) {
    const filled = i < count;
    html += `<img src="${icons.ui.star}" alt="" class="reputation-star${filled ? '' : ' reputation-star--empty'}" aria-hidden="true">`;
  }
  return html;
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

  showToast(`Ежедневное задание выполнено! +${state.questGemReward} алмазов +${state.questHeartReward} сердец`, 'quest');
}

function addHearts(amount, reason) {
  state.hearts += amount;
  if (els.heartsCard) {
    els.heartsCard.classList.remove('hearts-pop');
    void els.heartsCard.offsetWidth;
    els.heartsCard.classList.add('hearts-pop');
  }
  spawnFloatingHearts(amount);
  if (reason) showToast(`+${amount} сердец: ${reason}`, 'heart');
}

function spawnFloatingHearts(count) {
  if (!els.heartsFloat) return;
  const n = Math.min(count, 5);
  for (let i = 0; i < n; i++) {
    const h = document.createElement('img');
    h.className = 'floating-heart';
    h.src = icons.stats.hearts;
    h.alt = 'Сердце';
    h.style.left = 20 + Math.random() * 60 + '%';
    h.style.animationDelay = i * 0.12 + 's';
    h.addEventListener('error', () => {
      h.replaceWith(Object.assign(document.createElement('span'), {
        className: 'floating-heart floating-heart--text',
        textContent: 'С'
      }));
    });
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
  }, 2600);
}

function addMood(amount, silent) {
  state.mood = clampMood(state.mood + amount);
  updateStats();
  if (!silent) showToast('Настроение лавки выросло', 'mood');
}

function updateInventoryUI() {
  if (els.invCandlesQty) els.invCandlesQty.textContent = state.inventory.candles;
  if (els.invDiffusersQty) els.invDiffusersQty.textContent = state.inventory.diffusers;
  if (els.invBottlesQty) els.invBottlesQty.textContent = state.inventory.bottles;
  if (els.invDecorQty) els.invDecorQty.textContent = state.inventory.decor;
}

function updatePromoBadge() {
  if (!els.promoBadge) return;
  if (state.activePromo) {
    els.promoBadge.innerHTML = `${iconImg(icons.ui.gift, 'Акция', 'ui-icon', 'А')} <span class="promo-badge-text">${state.activePromo.name}</span>`;
    els.promoBadge.classList.remove('hidden');
    bindIconFallbacks(els.promoBadge);
  } else {
    els.promoBadge.classList.add('hidden');
  }
}

function spendSales(amount) {
  if (state.sales < amount) return false;
  state.sales -= amount;
  updateStats();
  return true;
}

function openModal(title, bodyHtml) {
  if (!els.modalOverlay) return;
  els.modalTitle.textContent = title;
  els.modalBody.innerHTML = bodyHtml;
  els.modalOverlay.classList.remove('hidden');
}

function closeModal() {
  if (els.modalOverlay) els.modalOverlay.classList.add('hidden');
}

function openLegalModal(docId) {
  const doc = LEGAL_DOCS[docId];
  if (!doc) return;
  openModal(doc.title, `
    ${doc.body}
    <button type="button" class="btn btn-secondary btn-legal-close" id="legalModalClose">Закрыть</button>
  `);
  const closeBtn = document.getElementById('legalModalClose');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

function updateLeadSubmitState() {
  if (!els.btnBuildMessage || !els.leadConsent) return;
  els.btnBuildMessage.disabled = !els.leadConsent.checked;
}

function bindLegalLinks(root = document) {
  root.querySelectorAll('[data-legal]').forEach(btn => {
    if (btn.dataset.legalBound) return;
    btn.dataset.legalBound = '1';
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      openLegalModal(btn.dataset.legal);
    });
  });
}

function hideAllCenterScreens() {
  els.welcomeScreen.classList.add('hidden');
  els.gameScreen.classList.add('hidden');
  els.summaryScreen.classList.add('hidden');
  if (els.sectionScreen) els.sectionScreen.classList.add('hidden');
}

function getCurrentGameScreen() {
  if (!els.welcomeScreen.classList.contains('hidden')) return els.welcomeScreen;
  if (!els.gameScreen.classList.contains('hidden')) return els.gameScreen;
  if (!els.summaryScreen.classList.contains('hidden')) return els.summaryScreen;
  return state.savedGameScreen || els.welcomeScreen;
}

function showScreen(screen) {
  hideAllCenterScreens();
  screen.classList.remove('hidden');
  state.savedGameScreen = screen;
  if (screen !== els.sectionScreen) state.currentNav = 'home';
}

function returnToShop() {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-nav="home"]')?.classList.add('active');
  state.currentNav = 'home';
  hideAllCenterScreens();
  (state.savedGameScreen || els.welcomeScreen).classList.remove('hidden');
}

function navigateToSection(navId) {
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.nav === navId);
  });
  state.currentNav = navId;

  if (navId === 'home') {
    returnToShop();
    return;
  }

  if (els.sectionScreen.classList.contains('hidden')) {
    state.savedGameScreen = getCurrentGameScreen();
  }

  hideAllCenterScreens();
  els.sectionScreen.classList.remove('hidden');
  if (els.sectionTitle) els.sectionTitle.textContent = SECTION_TITLES[navId] || navId;
  if (els.sectionIntro) {
    els.sectionIntro.textContent = SECTION_INTROS[navId] || '';
    els.sectionIntro.classList.toggle('hidden', !SECTION_INTROS[navId]);
  }
  updatePromoBadge();
  renderSection(navId);
}

function renderShopCard(item, btnLabel, btnAction, iconSrc) {
  return `
    <article class="shop-card">
      <div class="shop-card-icon">${iconImg(iconSrc, item.name, 'inventory-icon', iconInitial(item.name))}</div>
      <h4 class="shop-card-name">${item.name}</h4>
      <p class="shop-card-desc">${item.description}</p>
      ${item.mood ? `<span class="shop-card-mood">${item.mood}</span>` : ''}
      ${item.room ? `<p class="shop-card-meta">Комната: ${item.room}</p>` : ''}
      ${item.audience ? `<p class="shop-card-meta">Кому: ${item.audience}</p>` : ''}
      ${item.price ? `<p class="shop-card-price">${iconImg(icons.ui.gem, 'Монеты', 'ui-icon ui-icon--inline', 'М')} ${item.price} монет</p>` : ''}
      ${item.contents ? `<p class="shop-card-meta">Состав: ${item.contents}</p>` : ''}
      ${item.bonus ? `<p class="offer-bonus">Бонус: ${item.bonus}</p>` : ''}
      <button class="btn-shop" type="button" data-action="${btnAction}" data-id="${item.id}">${btnLabel}</button>
    </article>
  `;
}

function renderSection(navId) {
  if (!els.sectionContent) return;
  let html = '';

  switch (navId) {
    case 'candles':
      html = `<div class="shop-grid">${SHOP_CANDLES.map(c =>
        renderShopCard(c, 'Добавить в витрину', 'add-candle', icons.inventory.candle)
      ).join('')}</div>`;
      break;

    case 'diffusers':
      html = `<div class="shop-grid">${SHOP_DIFFUSERS.map(d =>
        renderShopCard(d, 'Добавить в витрину', 'add-diffuser', icons.inventory.diffuser)
      ).join('')}</div>`;
      break;

    case 'auto':
      html = `<div class="shop-grid">${SHOP_AUTO.map(a =>
        renderShopCard(a, 'Добавить в витрину', 'add-auto', icons.inventory.bottle)
      ).join('')}</div>`;
      break;

    case 'offers':
      html = `<div class="shop-grid">${SHOP_OFFERS.map(o =>
        renderShopCard(
          o,
          state.promoUsedToday ? 'Акция уже запущена' : 'Запустить акцию',
          'launch-offer',
          icons.ui.gift
        )
      ).join('')}</div>`;
      if (state.promoUsedToday && state.activePromo) {
        html += `<p class="shop-card-meta" style="margin-top:12px;text-align:center">Активна: <strong>${state.activePromo.name}</strong></p>`;
      }
      break;

    case 'inventory':
      html = `
        <p class="section-lead">Все ресурсы лавки в одном месте. Покупайте за продажи — это ваши игровые монеты.</p>
        <div class="inventory-detail-grid">
          <div class="inv-detail-card">${iconImg(icons.inventory.candle, 'Свечи', 'inventory-icon', 'С')}<span class="inv-detail-label">Свечи</span><span class="inv-detail-value">${state.inventory.candles}</span></div>
          <div class="inv-detail-card">${iconImg(icons.inventory.diffuser, 'Диффузоры', 'inventory-icon', 'Д')}<span class="inv-detail-label">Диффузоры</span><span class="inv-detail-value">${state.inventory.diffusers}</span></div>
          <div class="inv-detail-card">${iconImg(icons.inventory.bottle, 'Флаконы', 'inventory-icon', 'Ф')}<span class="inv-detail-label">Флаконы</span><span class="inv-detail-value">${state.inventory.bottles}</span></div>
          <div class="inv-detail-card">${iconImg(icons.inventory.flower, 'Декор', 'inventory-icon', 'Д')}<span class="inv-detail-label">Декор</span><span class="inv-detail-value">${state.inventory.decor}</span></div>
          <div class="inv-detail-card">${iconImg(icons.stats.hearts, 'Сердца', 'inventory-icon', 'С')}<span class="inv-detail-label">Сердца</span><span class="inv-detail-value">${state.hearts}</span></div>
          <div class="inv-detail-card">${iconImg(icons.ui.gem, 'Алмазы', 'inventory-icon', 'А')}<span class="inv-detail-label">Алмазы</span><span class="inv-detail-value">${state.gems}</span></div>
        </div>
        <p class="shop-card-meta">Избранных ароматов: <strong>${state.favorites.length}</strong></p>
        <p class="shop-card-meta">Продаж (монеты): <strong>${state.sales}</strong></p>
        <div class="inv-actions">
          <button class="btn-inv-action" type="button" data-action="refill" data-type="candles">Пополнить свечи (2 продажи)</button>
          <button class="btn-inv-action" type="button" data-action="refill" data-type="diffusers">Пополнить диффузоры (2 продажи)</button>
          <button class="btn-inv-action" type="button" data-action="refill" data-type="bottles">Пополнить флаконы (2 продажи)</button>
          <button class="btn-inv-action" type="button" data-action="refill" data-type="decor">Купить декор (1 продажа)</button>
        </div>
      `;
      break;

    case 'collections':
      html = `<p class="section-lead">Правильные подборы добавляют ароматы в коллекции. Соберите все — получите награду.</p>`;
      html += COLLECTIONS.map(col => {
        const collected = col.aromas.filter(id => state.collectedAromas[id]);
        const pct = (collected.length / col.aromas.length) * 100;
        const done = state.completedCollections.includes(col.id);
        return `
          <div class="collection-card${done ? ' done' : ''}">
            <h4 class="collection-name">${done ? iconImg(icons.ui.star, 'Готово', 'ui-icon ui-icon--inline', 'Г') + ' ' : ''}${col.name}</h4>
            <div class="collection-aromas">
              ${col.aromas.map(id => {
                const a = getAromaById(id);
                const has = state.collectedAromas[id];
                if (!a) return `<span class="collection-aroma">${id}</span>`;
                return `<span class="collection-aroma${has ? ' collected' : ''}">
                  <img src="${getAromaImage(a)}" alt="${a.name}" class="collection-aroma-thumb">
                  <span class="collection-aroma-fallback hidden" aria-hidden="true">${iconInitial(a.name)}</span>
                  ${a.name}
                </span>`;
              }).join('')}
            </div>
            <div class="collection-progress-bar"><div class="collection-progress-fill" style="width:${pct}%"></div></div>
            <p class="collection-reward">Прогресс: ${collected.length}/${col.aromas.length} · Награда: ${col.reward.hearts} сердец, +${col.reward.mood} настроения</p>
          </div>
        `;
      }).join('');
      break;

    default:
      html = '<p>Раздел в разработке.</p>';
  }

  els.sectionContent.innerHTML = html;
  bindIconFallbacks(els.sectionContent);
  els.sectionContent.querySelectorAll('.collection-aroma-thumb').forEach(img => {
    img.addEventListener('error', () => {
      img.classList.add('hidden');
      img.parentElement?.querySelector('.collection-aroma-fallback')?.classList.remove('hidden');
    });
  });

  if (navId === 'offers' && state.promoUsedToday) {
    els.sectionContent.querySelectorAll('[data-action="launch-offer"]').forEach(btn => {
      btn.disabled = true;
    });
  }
}

function handleSectionAction(e) {
  const btn = e.currentTarget;
  if (btn.disabled) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;

  switch (action) {
    case 'add-candle':
      addToShowcase('candles', SHOP_CANDLES.find(c => c.id === id));
      break;
    case 'add-diffuser':
      addToShowcase('diffusers', SHOP_DIFFUSERS.find(d => d.id === id));
      break;
    case 'add-auto':
      addToShowcase('bottles', SHOP_AUTO.find(a => a.id === id));
      break;
    case 'launch-offer':
      launchOffer(SHOP_OFFERS.find(o => o.id === id));
      break;
    case 'refill':
      refillInventory(btn.dataset.type);
      break;
  }
}

function addToShowcase(type, item) {
  if (!item) return;
  const invKey = type === 'bottles' ? 'bottles' : type;
  state.inventory[invKey] += 1;
  if (!state.showcaseItems[type]) state.showcaseItems[type] = [];
  state.showcaseItems[type].push(item.name);
  updateInventoryUI();
  addMood(2, true);
  const labels = { candles: 'Свеча', diffusers: 'Диффузор', bottles: 'Автопарфюм' };
  showToast(`${labels[type] || 'Товар'} «${item.name}» добавлена в витрину`, 'success');
  showToast('Настроение лавки выросло', 'mood');
}

function launchOffer(offer) {
  if (!offer || state.promoUsedToday) {
    showToast('Акцию можно запустить только один раз за день', 'warning');
    return;
  }
  state.promoUsedToday = true;
  state.activePromo = offer;
  state.promoBonusPending = true;
  if (offer.bonusType === 'freeHints') state.freeHintsToday = true;
  addMood(5, true);
  updatePromoBadge();
  showToast('Акция запущена!', 'success');
  showToast('Настроение лавки выросло', 'mood');
  renderSection('offers');
}

function refillInventory(type) {
  const cfg = INV_REFILL_COSTS[type];
  if (!cfg) return;
  if (!spendSales(cfg.cost)) {
    showToast('Недостаточно продаж для покупки', 'warning');
    return;
  }
  state.inventory[type] += cfg.amount;
  updateInventoryUI();
  showToast(`${cfg.label}: +${cfg.amount}`, 'success');
  renderSection('inventory');
}

function trackCollection(aromaId) {
  if (!state.collectedAromas[aromaId]) {
    state.collectedAromas[aromaId] = true;
    showToast('Коллекция пополнена', 'success');
  }

  COLLECTIONS.forEach(col => {
    if (state.completedCollections.includes(col.id)) return;
    const allCollected = col.aromas.every(id => state.collectedAromas[id]);
    if (allCollected) {
      state.completedCollections.push(col.id);
      addHearts(col.reward.hearts, '');
      addMood(col.reward.mood, true);
      showToast(`Коллекция «${col.name}» собрана! +${col.reward.hearts} сердец`, 'success');
      showToast('Настроение лавки выросло', 'mood');
    }
  });
}

function applyPromoBonus() {
  if (!state.promoBonusPending || !state.activePromo) return;
  const offer = state.activePromo;
  if (offer.bonusType === 'extraSale') {
    state.sales += 1;
    showToast('Бонус акции: +1 продажа!', 'success');
  } else if (offer.bonusType === 'carBonus') {
    state.sales += 1;
    addMood(5, true);
    showToast('Бонус акции: +1 продажа и настроение!', 'success');
  }
  state.promoBonusPending = false;
}

function openQuickInventory(type) {
  const titles = { candles: 'Свечи в наличии', diffusers: 'Диффузоры', bottles: 'Флаконы и автопарфюм', decor: 'Декор лавки' };
  const qty = state.inventory[type];
  let listHtml = '';

  if (type === 'decor') {
    listHtml = `
      <p>Украшения, сухоцветы и вазы создают уют в лавке.</p>
      <p class="shop-card-meta">В наличии: <strong>${qty}</strong> единиц декора</p>
      <ul class="modal-list">
        <li>Сухие розы в вазах</li>
        <li>Подсвечники из латуни</li>
        <li>Ароматические букеты</li>
      </ul>
    `;
  } else {
    const items = state.showcaseItems[type] || [];
    if (items.length === 0) {
      listHtml = `<p class="shop-card-meta">В витрине пока ${qty} шт. Добавьте товары из раздела меню.</p>`;
    } else {
      const counts = {};
      items.forEach(name => { counts[name] = (counts[name] || 0) + 1; });
      listHtml = `<ul class="modal-list">${Object.entries(counts).map(([name, n]) =>
        `<li>${name} <span class="quick-list-qty">×${n}</span></li>`
      ).join('')}</ul>`;
      listHtml += `<p class="shop-card-meta">Всего: ${qty} шт.</p>`;
    }
  }

  openModal(titles[type], listHtml);
}

function openMiniShop() {
  const itemsHtml = MINI_SHOP_ITEMS.map(item => `
    <div class="modal-shop-item">
      <div class="modal-shop-item-info">
        <div class="modal-shop-item-title">${item.label}</div>
        <div class="modal-shop-item-cost">Стоимость: ${item.cost} продаж</div>
      </div>
      <button class="btn-modal-buy" type="button" data-mini="${item.id}">Купить</button>
    </div>
  `).join('');

  openModal('Мини-магазин ресурсов', `<p class="shop-card-meta">Ваши продажи: ${state.sales}</p>${itemsHtml}`);

  els.modalBody.querySelectorAll('[data-mini]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = MINI_SHOP_ITEMS.find(i => i.id === btn.dataset.mini);
      if (!item) return;
      if (!spendSales(item.cost)) {
        showToast('Недостаточно продаж', 'warning');
        return;
      }
      state.inventory[item.type] += item.amount;
      updateInventoryUI();
      showToast(`${item.label} — готово!`, 'success');
      closeModal();
    });
  });
}

function openHostessTip() {
  const tip = HOSTESS_TIPS[Math.floor(Math.random() * HOSTESS_TIPS.length)];
  openModal('Совет дня', `<p style="font-style:italic">«${tip}»</p>`);
}

function openFavoriteDetail(aroma) {
  const src = getAromaImage(aroma);
  openModal('Избранный аромат', `
    <div class="favorite-detail-card">
      <img src="${src}" alt="${aroma.name}" class="favorite-aroma-image favorite-detail-image">
      <span class="favorite-detail-fallback hidden" aria-hidden="true">${iconInitial(aroma.name)}</span>
      <h4 class="favorite-detail-name">${aroma.name}</h4>
      <span class="favorite-detail-mood">${aroma.mood}</span>
      <p>${aroma.description}</p>
      <p class="shop-card-meta">${aroma.tags}</p>
    </div>
  `);
  const img = els.modalBody.querySelector('.favorite-detail-image');
  if (img) {
    img.addEventListener('error', () => {
      img.classList.add('hidden');
      els.modalBody.querySelector('.favorite-detail-fallback')?.classList.remove('hidden');
    });
  }
}

function bindSectionContentEvents() {
  if (els.backToShopBtn) els.backToShopBtn.addEventListener('click', returnToShop);
  if (els.sectionContent) {
    els.sectionContent.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (btn) handleSectionAction({ currentTarget: btn });
    });
  }
}


function updateStreakUI() {
  if (els.pickStreakCount) els.pickStreakCount.textContent = state.currentStreak;
  if (els.streakCount) els.streakCount.textContent = state.streak;

  if (els.streakCard) {
    els.streakCard.classList.toggle('streak-hot', state.currentStreak >= 3);
    els.streakCard.classList.toggle('streak-fire', state.streak >= 1);
  }
  if (els.streakIcon) {
    if (state.currentStreak >= 5) {
      setIconContainer(els.streakIcon, icons.ui.fire, 'Серия', 'ui-icon', 'Ж');
    } else if (state.currentStreak >= 3) {
      setIconContainer(els.streakIcon, icons.ui.star, 'Серия', 'ui-icon', 'С');
    } else {
      setIconContainer(els.streakIcon, icons.menu.candles, 'Серия', 'ui-icon', 'С');
    }
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
  if (!svg || svg.querySelector('defs')) return;
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D8AAA2"/>
      <stop offset="100%" stop-color="#C99B6A"/>
    </linearGradient>
  `;
  svg.insertBefore(defs, svg.firstChild);
}

/* ===== Обновление UI ===== */
function updateStats() {
  if (els.salesCount) els.salesCount.textContent = state.sales;
  if (els.happyCount) els.happyCount.textContent = state.happyClients;
  if (els.heartsCount) els.heartsCount.textContent = state.hearts;

  const mood = clampMood(state.mood);
  if (els.moodBar) els.moodBar.style.width = mood + '%';
  if (els.moodPercent) els.moodPercent.textContent = mood + '%';
  if (els.moodCircleText) els.moodCircleText.textContent = mood + '%';

  if (els.moodCircleFill) {
    const circumference = 264;
    const offset = circumference - (circumference * mood / 100);
    els.moodCircleFill.style.strokeDashoffset = offset;
  }

  const tier = getReputationTier(state.totalHappy);
  const repProgress = getReputationProgress(state.totalHappy);

  if (els.reputationTitle) els.reputationTitle.textContent = tier.title;
  if (els.reputationStars) {
    els.reputationStars.innerHTML = renderStars(tier.stars);
    bindIconFallbacks(els.reputationStars);
  }
  if (els.reputationTier) els.reputationTier.textContent = tier.stars;
  if (els.reputationBarFill) els.reputationBarFill.style.width = repProgress.pct + '%';
  if (els.reputationProgressLabel) els.reputationProgressLabel.textContent = repProgress.label;

  if (els.questProgress) els.questProgress.textContent = `${state.questProgress} / ${state.questTarget}`;
  if (els.questBarFill) {
    const pct = (state.questProgress / state.questTarget) * 100;
    els.questBarFill.style.width = pct + '%';
  }

  if (els.favoritesCount) els.favoritesCount.textContent = state.favorites.length;

  updateStreakUI();
  updateInventoryUI();
  updatePromoBadge();
}

function updateClientIndicator() {
  const num = state.currentIndex + 1;
  els.clientIndicator.textContent = `Клиент ${num} из ${CLIENTS_PER_DAY}`;
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

function getClientInitial(name) {
  return (name || '?').trim().charAt(0).toUpperCase();
}

function showClientAvatarFallback(client) {
  const fallback = els.clientAvatarFallback;
  const img = els.clientAvatarImg;
  if (!fallback) return;

  if (img) {
    img.classList.add('hidden');
    img.removeAttribute('src');
  }

  fallback.textContent = getClientInitial(client.name);
  fallback.classList.remove('client-avatar-fallback--emoji');
  fallback.classList.remove('hidden');
}

function renderClientPortrait(client) {
  const img = els.clientAvatarImg;
  const fallback = els.clientAvatarFallback;

  if (!img || !fallback) return;

  img.classList.add('hidden');
  fallback.classList.add('hidden');

  if (!client.image) {
    showClientAvatarFallback(client);
    return;
  }

  img.alt = client.name;
  img.onload = () => {
    img.classList.remove('hidden');
    fallback.classList.add('hidden');
  };
  img.onerror = () => showClientAvatarFallback(client);
  img.src = client.image;

  if (img.complete) {
    if (img.naturalWidth > 0) {
      img.classList.remove('hidden');
      fallback.classList.add('hidden');
    } else {
      showClientAvatarFallback(client);
    }
  }
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
    hideClientArrival();

    renderClientPortrait(client);
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
          ${buildAromaArtHtml(aroma)}
        </div>
        <div class="aroma-card-body">
          <div class="aroma-name">${aroma.name}</div>
          <div class="aroma-desc">${aroma.description}</div>
          <div class="aroma-tags">${formatAromaTags(aroma.tags)}</div>
        </div>
      `;
      bindAromaIllustration(card, aroma);
      card.addEventListener('click', () => handleAromaChoice(aroma.id, card));
      els.aromaGrid.appendChild(card);
    });

    updateClientIndicator();
  }, 900);
}

function hideClientArrival() {
  if (els.clientArrival) {
    els.clientArrival.classList.add('hidden');
    els.clientArrival.classList.remove('arrival-play');
  }
}

/* ===== Выбор аромата ===== */
function handleAromaChoice(chosenId, cardEl) {
  if (state.answered) return;
  state.answered = true;
  hideGamePromoBanner();

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
      showToast('Серия из 3 удачных подборов!', 'streak');
    } else if (state.currentStreak === 5) {
      addHearts(2, 'Идеальная серия!');
      showToast('Потрясающая серия — 5 подряд!', 'streak');
    }

    const moodBoost = Math.random() > 0.5 ? 15 : 10;
    state.mood = clampMood(state.mood + moodBoost);

    checkQuestProgress(true, correctAroma);
    trackCollection(correctAroma.id);
    applyPromoBonus();

    state.dayCorrectAromas.push(correctAroma.name);

    const favAdded = addFavorite(correctAroma);
    showResult(true, client, correctAroma);
    spawnSparks();

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

function spawnSparks() {
  const sparkIcons = [icons.stats.hearts, icons.ui.star, icons.ui.fire];
  const container = els.resultSparks;

  for (let i = 0; i < 12; i++) {
    const spark = document.createElement('img');
    spark.className = 'spark spark-img';
    spark.src = sparkIcons[Math.floor(Math.random() * sparkIcons.length)];
    spark.alt = '';
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
  showToast(`«${aroma.name}» добавлен в избранное!`, 'favorite');
  return true;
}

function renderFavorites(highlightNew) {
  if (state.favorites.length === 0) {
    els.favoritesList.innerHTML = '<span class="favorites-empty">Появятся после удачных подборов</span>';
    return;
  }

  els.favoritesList.innerHTML = state.favorites.map((a, i) => {
    const isNew = highlightNew && i === state.favorites.length - 1;
    const src = getAromaImage(a);
    return `
      <button type="button" class="favorite-slot${isNew ? ' favorite-new' : ''}" data-fav-id="${a.id}" title="${a.name}">
        <img src="${src}" alt="${a.name}" class="favorite-aroma-image">
        <span class="favorite-aroma-fallback hidden" aria-hidden="true">${iconInitial(a.name)}</span>
      </button>
    `;
  }).join('');

  els.favoritesList.querySelectorAll('.favorite-aroma-image').forEach(img => {
    img.addEventListener('error', () => {
      img.classList.add('hidden');
      img.parentElement?.querySelector('.favorite-aroma-fallback')?.classList.remove('hidden');
    });
  });

  els.favoritesList.querySelectorAll('[data-fav-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const aroma = getAromaById(btn.dataset.favId);
      if (aroma) openFavoriteDetail(aroma);
    });
  });
}

/* ===== Подсказка ===== */
function useHint() {
  if (state.answered) return;
  if (!state.freeHintsToday && state.hintUsed) return;

  const client = state.dayClients[state.currentIndex];
  els.hintBox.textContent = client.hint;
  els.hintBox.classList.remove('hidden');

  if (!state.freeHintsToday) {
    state.hintUsed = true;
    els.hintBtn.disabled = true;
  }
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

function calculateAromaType(correctAromaNames) {
  if (!correctAromaNames || correctAromaNames.length === 0) {
    return AROMA_TYPES.find(t => t.id === DEFAULT_AROMA_TYPE_ID);
  }

  const nameToId = {};
  AROMAS.forEach(a => { nameToId[a.name] = a.id; });

  let bestType = AROMA_TYPES.find(t => t.id === DEFAULT_AROMA_TYPE_ID);
  let bestScore = -1;

  AROMA_TYPES.forEach(type => {
    let score = 0;
    correctAromaNames.forEach(name => {
      const id = nameToId[name];
      if (id && type.aromaIds.includes(id)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      bestType = type;
    }
  });

  return bestType;
}

function renderAromaResult() {
  const type = calculateAromaType(state.dayCorrectAromas);
  state.currentAromaType = type;

  const typeImages = AROMA_TYPE_IMAGES[type.id] || AROMA_TYPE_IMAGES.cozy;
  setIconContainer(els.resultIcon, typeImages.image, type.title, 'ui-icon ui-icon--large', iconInitial(type.title));
  if (els.resultType) els.resultType.textContent = type.title;
  if (els.resultDesc) els.resultDesc.textContent = type.description;
  setIconContainer(els.resultProductIcon, typeImages.product, 'Рекомендация', 'ui-icon ui-icon--product', 'Р');
  if (els.resultProductText) els.resultProductText.textContent = type.product;

  if (els.resultAromas) {
    els.resultAromas.innerHTML = type.aromaIds.map(id => {
      const a = getAromaById(id);
      if (!a) return '';
      return `<span class="result-aroma-pill">
        <img src="${getAromaImage(a)}" alt="${a.name}" class="result-aroma-thumb">
        <span class="result-aroma-fallback hidden" aria-hidden="true">${iconInitial(a.name)}</span>
        ${a.name}
      </span>`;
    }).join('');
    els.resultAromas.querySelectorAll('.result-aroma-thumb').forEach(img => {
      img.addEventListener('error', () => {
        img.classList.add('hidden');
        img.parentElement?.querySelector('.result-aroma-fallback')?.classList.remove('hidden');
      });
    });
  }

  resetLeadForm();
  updateShareResultText();
}

function getAromaNamesForType(type) {
  if (!type) return '';
  return type.aromaIds
    .map(id => getAromaById(id))
    .filter(Boolean)
    .map(a => a.name)
    .join(', ');
}

function updateShareResultText() {
  const type = state.currentAromaType;
  if (!els.shareResultText || !type) return;
  els.shareResultText.textContent =
    `Я прошла игру «${GAME_TITLE}» и мой ароматный результат — ${type.title}.`;
}

function buildShareResultCopyText() {
  const type = state.currentAromaType || AROMA_TYPES.find(t => t.id === DEFAULT_AROMA_TYPE_ID);
  const aromas = getAromaNamesForType(type);
  return `Мой ароматный результат — ${type.title}. Мне подошли ароматы: ${aromas}. Пройди игру «${GAME_TITLE}» и узнай свой аромат.`;
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast('Скопировано!', 'success');
}

function copyShareResult() {
  copyTextToClipboard(buildShareResultCopyText());
}

function copySharePromo() {
  copyTextToClipboard(SHARE_PROMO_TEXT);
}

function resetLeadForm() {
  state.leadMessage = '';
  if (els.leadForm) els.leadForm.reset();
  if (els.leadMessageBlock) els.leadMessageBlock.classList.add('hidden');
  if (els.leadMessageText) els.leadMessageText.textContent = '';
  updateLeadSubmitState();
}

function buildLeadMessage() {
  const name = (els.leadName?.value || '').trim() || 'Гость';
  const purpose = els.leadPurpose?.value || '—';
  const budget = els.leadBudget?.value || '—';
  const comment = (els.leadComment?.value || '').trim() || '—';
  const type = state.currentAromaType || AROMA_TYPES.find(t => t.id === DEFAULT_AROMA_TYPE_ID);

  const aromaNames = type.aromaIds
    .map(id => getAromaById(id))
    .filter(Boolean)
    .map(a => a.name)
    .join(', ');

  const lines = [
    'Здравствуйте, Наталья!',
    '',
    `Меня зовут ${name}.`,
    '',
    'Хочу персональный подбор ароматов из игры «Коварство Ароматов: Лавка настроений».',
    '',
    `Для чего: ${purpose}`,
    `Бюджет: ${budget}`,
    `Комментарий: ${comment}`,
    '',
    'Мой ароматный результат:',
    `Тип: ${type.title}`,
    type.description,
    '',
    `Подходящие ароматы: ${aromaNames}`,
    `Рекомендованный продукт: ${type.product}`,
    '',
    'Кодовое слово: ЛАВКА',
    '',
    'Буду рада(а) вашей помощи с подбором!',
    name
  ];

  return lines.join('\n');
}

function handleLeadFormSubmit(e) {
  e.preventDefault();

  if (!els.leadConsent?.checked) {
    showToast('Подтвердите согласие на обработку персональных данных', 'warning');
    els.leadConsent?.focus();
    return;
  }

  const name = (els.leadName?.value || '').trim();
  if (!name) {
    showToast('Пожалуйста, укажите имя', 'warning');
    els.leadName?.focus();
    return;
  }

  state.leadMessage = buildLeadMessage();

  if (els.leadMessageText) {
    els.leadMessageText.textContent = state.leadMessage;
  }
  if (els.leadMessageBlock) {
    els.leadMessageBlock.classList.remove('hidden');
    els.leadMessageBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  showToast('Сообщение готово — можно скопировать или отправить', 'success');
}

async function copyLeadMessage() {
  if (!state.leadMessage) {
    showToast('Сначала сформируйте сообщение', 'warning');
    return;
  }

  try {
    await navigator.clipboard.writeText(state.leadMessage);
    showToast('Сообщение скопировано!', 'success');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = state.leadMessage;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast('Сообщение скопировано!', 'success');
  }
}

function openMaxWithMessage(e) {
  if (!state.leadMessage) {
    e?.preventDefault();
    showToast('Сначала сформируйте сообщение', 'warning');
    return;
  }
  copyTextToClipboard(state.leadMessage);
}

function openContact() {
  window.open(NATALYA_CONTACT_URL, '_blank', 'noopener,noreferrer');
}

function bindMaxContactLink(el, options = {}) {
  if (!el) return;
  el.href = NATALYA_CONTACT_URL;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
  if (options.requireMessage) {
    el.addEventListener('click', openMaxWithMessage);
  }
}

function openPersonalPickModal() {
  openModal('Персональный подбор от Натальи', `
    <p>Напишите, для чего вам нужен аромат: для дома, машины, подарка или настроения. Я помогу подобрать свечу, диффузор, автопарфюм или распив парфюма.</p>
    <a class="btn-telegram" href="${NATALYA_CONTACT_URL}" target="_blank" rel="noopener noreferrer">Написать в MAX</a>
  `);
}

function openGift1000Modal() {
  openModal('Подарок до 1000 ₽', `
    <p>Можно собрать мини-набор: свеча, аромасаше, пробник аромата или автопарфюм. Напишите Наталье — она подберёт вариант под бюджет и повод.</p>
    <button type="button" class="btn-telegram btn-telegram-inline" id="modalContactBtn">Написать Наталье</button>
  `);
  const contactBtn = document.getElementById('modalContactBtn');
  if (contactBtn) contactBtn.addEventListener('click', openContact);
}

function openCandlesFromResult() {
  state.savedGameScreen = els.summaryScreen;
  navigateToSection('candles');
}

function endDay() {
  const prevTier = getReputationTier(state.totalHappy - state.dayHappy);

  if (state.dayHappy === CLIENTS_PER_DAY) {
    state.streak += 1;
    addHearts(3, 'Идеальный день в лавке!');
    showToast('Идеальный день — все клиенты довольны!', 'streak');
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
  if (els.summaryReputation) els.summaryReputation.textContent = getReputation(state.totalHappy);
  if (els.summaryHearts) els.summaryHearts.textContent = state.hearts;
  if (els.summaryStreak) els.summaryStreak.textContent = state.maxPickStreak;

  if (els.summaryQuestReward) {
    if (state.questCompleted) {
      els.summaryQuestReward.textContent =
        `Задание дня выполнено! Получено: ${state.questGemReward} алмазов и ${state.questHeartReward} сердец`;
      els.summaryQuestReward.classList.remove('hidden');
    } else {
      els.summaryQuestReward.classList.add('hidden');
    }
  }

  els.summaryText.textContent = getSummaryText(state.dayHappy, state.daySales);

  renderAromaResult();

  const newTier = getReputationTier(state.totalHappy);
  if (newTier.stars > prevTier.stars) {
    showToast(`Новый уровень репутации: ${newTier.title}!`, 'quest');
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
  state.promoUsedToday = false;
  state.activePromo = null;
  state.promoBonusPending = false;
  state.freeHintsToday = false;
  state.dayStarted = true;
  state.dayCorrectAromas = [];
  state.currentAromaType = null;
  state.leadMessage = '';
  state.promoBannerDismissed = false;
  sessionStorage.removeItem(PROMO_BANNER_KEY);

  applyDailyQuest(pickDailyQuest());
  els.dailyTip.textContent = DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];

  updateStats();
  showScreen(els.gameScreen);
  updateGamePromoBannerVisibility();
  renderClient();
}

function startNewDay() {
  startDay();
}

/* ===== Инициализация ===== */
let initialized = false;

function init() {
  if (initialized) return;
  initialized = true;

  cacheElements();

  initTheme();
  bindThemeSwitch();

  initMoodGradient();
  updateStats();
  renderFavorites();
  updateInventoryUI();

  if (!els.startDayBtn) {
    console.error('Не найден элемент #startDayBtn — проверьте index.html');
    return;
  }

  els.startDayBtn.addEventListener('click', startDay);
  if (els.gamePromoClose) els.gamePromoClose.addEventListener('click', () => hideGamePromoBanner());
  if (els.gamePromoStartBtn) {
    els.gamePromoStartBtn.addEventListener('click', () => {
      hideGamePromoBanner();
      focusGamePlayArea();
    });
  }
  if (els.btnGamePersonalPick) els.btnGamePersonalPick.addEventListener('click', openGamePersonalPickModal);
  if (els.btnGameGift1000) els.btnGameGift1000.addEventListener('click', openGameGiftModal);
  bindMaxContactLink(els.btnGameWriteNatalya);
  if (els.newDayBtn) els.newDayBtn.addEventListener('click', startNewDay);
  if (els.nextClientBtn) els.nextClientBtn.addEventListener('click', nextClient);
  if (els.hintBtn) els.hintBtn.addEventListener('click', useHint);

  if (els.btnPersonalPick) els.btnPersonalPick.addEventListener('click', openPersonalPickModal);
  if (els.btnViewCandles) els.btnViewCandles.addEventListener('click', openCandlesFromResult);
  if (els.btnGift1000) els.btnGift1000.addEventListener('click', openGift1000Modal);
  bindMaxContactLink(els.btnWriteNatalya);
  bindMaxContactLink(els.btnWriteTelegram, { requireMessage: true });

  if (els.leadForm) els.leadForm.addEventListener('submit', handleLeadFormSubmit);
  if (els.leadConsent) els.leadConsent.addEventListener('change', updateLeadSubmitState);
  updateLeadSubmitState();
  bindLegalLinks();
  if (els.btnCopyMessage) els.btnCopyMessage.addEventListener('click', copyLeadMessage);
  if (els.btnCopyShareResult) els.btnCopyShareResult.addEventListener('click', copyShareResult);
  if (els.btnCopyPromo) els.btnCopyPromo.addEventListener('click', copySharePromo);
  if (els.btnPlayAgain) els.btnPlayAgain.addEventListener('click', startNewDay);

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      navigateToSection(item.dataset.nav);
    });
  });

  if (els.invAddBtn) els.invAddBtn.addEventListener('click', openMiniShop);

  document.querySelectorAll('.inv-item-click').forEach(btn => {
    btn.addEventListener('click', () => openQuickInventory(btn.dataset.inv));
  });

  if (els.quotePlaque) {
    els.quotePlaque.addEventListener('click', openHostessTip);
    els.quotePlaque.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHostessTip();
      }
    });
  }

  if (els.modalClose) els.modalClose.addEventListener('click', closeModal);
  if (els.modalOverlay) {
    els.modalOverlay.addEventListener('click', e => {
      if (e.target === els.modalOverlay) closeModal();
    });
  }

  bindSectionContentEvents();
  bindImageErrorLogging(document);
  bindIconFallbacks(document);
}

function bootGame() {
  try {
    init();
  } catch (err) {
    console.error('Ошибка инициализации игры:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootGame);
} else {
  bootGame();
}
