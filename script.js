document.documentElement.classList.add('has-js');

const translations = {
  uk: {
    htmlLang: 'uk',
    title: 'Миття паркінгів високим тиском | Сервіс миття високим тиском',
    description: 'Сервіс професійного миття паркінгів високим тиском: очищення відкритих і підземних парковок, видалення пилу, бруду, слідів шин і масляних плям.',
    'brand': 'Сервіс миття високим тиском',
    'nav.aria': 'Головна навігація',
    'logo.aria': 'Сервіс миття високим тиском - на головну',
    'language.aria': 'Вибір мови',
    'menu.open': 'Відкрити меню',
    'menu.close': 'Закрити меню',
    'nav.services': 'Послуги',
    'nav.benefits': 'Переваги',
    'nav.process': 'Як працюємо',
    'nav.contact': 'Контакти',
    'hero.eyebrow': 'Професійне миття на вашій території',
    'hero.title': 'Миття паркінгів високим тиском для бізнесу та ЖК',
    'hero.text': 'Очищаємо відкриті, криті та підземні паркінги від пилу, бруду, слідів шин і масляних плям. Приїжджаємо з обладнанням, працюємо акуратно та підлаштовуємося під ваш графік.',
    'actions.aria': "Зв'язатися з нами",
    'whatsapp.aria': 'Написати у WhatsApp',
    'telegram.aria': 'Написати у Telegram',
    'hero.visual': 'Схематичний вигляд чистого паркінгу',
    'services.eyebrow': 'Що ми робимо',
    'services.title': 'Комплексне очищення паркінгів',
    'services.text': "Підходить для ТЦ, бізнес-центрів, складів, офісів, житлових комплексів і приватних територій.",
    'service.washing.title': 'Миття паркінгів',
    'service.washing.text': "Змиваємо накопичений бруд з бетону, асфальту та плитки без зайвої зупинки роботи об'єкта.",
    'service.oil.title': 'Видалення масляних плям',
    'service.oil.text': 'Точково обробляємо сліди масла, пального та технічних рідин професійними засобами.',
    'service.dirt.title': 'Пил і бруд',
    'service.dirt.text': 'Прибираємо пил, пісок, реагенти, сліди коліс і вуличний бруд після активного руху авто.',
    'service.maintenance.title': 'Регулярне прибирання',
    'service.maintenance.text': 'Підбираємо зручний графік миття, щоб територія стабільно виглядала охайно.',
    'benefits.eyebrow': 'Чому це зручно',
    'benefits.title': 'Сервіс, який легко погодити й контролювати',
    'benefit.fast.title': 'Швидкий виїзд',
    'benefit.fast.text': 'Оперативно відповідаємо, погоджуємо час і приїжджаємо з професійним обладнанням.',
    'benefit.price.title': 'Прозора ціна',
    'benefit.price.text': 'Одразу пояснюємо, від чого залежить вартість: площа, стан покриття та частота робіт.',
    'benefit.result.title': 'Професійний вигляд',
    'benefit.result.text': 'Чистий паркінг створює кращий перший контакт для клієнтів, мешканців і співробітників.',
    'benefit.mobile.title': 'Робота на місці',
    'benefit.mobile.text': "Команда працює на вашій території та враховує особливості заїзду, води й графіка об'єкта.",
    'process.eyebrow': 'Як це працює',
    'process.title': 'Три прості кроки',
    'step.contact.title': 'Ви пишете нам',
    'step.contact.text': 'Надішліть адресу, приблизну площу та кілька фото забруднення у WhatsApp або Telegram.',
    'step.details.title': 'Узгоджуємо деталі',
    'step.details.text': 'Обговорюємо обсяг робіт, доступ до води, зручний час і фінальну вартість.',
    'step.clean.title': 'Команда миє паркінг',
    'step.clean.text': 'Приїжджаємо в погоджений час, миємо паркінг і здаємо результат після огляду.',
    'before.eyebrow': 'До і після',
    'before.title': 'Паркінг виглядає чистішим уже після першого виїзду',
    'before.card.title': 'До',
    'before.card.text': 'Сліди шин, пил, масляні плями та покриття, яке виглядає недоглянутим.',
    'after.card.title': 'Після',
    'after.card.text': 'Охайна територія з чистішою поверхнею та кращим враженням для відвідувачів.',
    'contact.eyebrow': "Зв'язатися",
    'contact.title': 'Хочете привести паркінг до ладу без зайвих розмов?',
    'contact.text': 'Напишіть нам у зручний месенджер. Оцінимо задачу за фото, підкажемо оптимальний формат робіт і назвемо зрозумілу ціну.',
    'contact.actions': 'Контактні кнопки',
    'whatsapp.contact': "Зв'язатися через WhatsApp",
    'telegram.contact': "Зв'язатися через Telegram",
    'footer.text': '© 2026 Сервіс миття високим тиском. Професійне миття паркінгів.',
    'footer.top': 'Нагору',
  },
  ru: {
    htmlLang: 'ru',
    title: 'Мойка парковок высоким давлением | Сервис мойки высоким давлением',
    description: 'Сервис профессиональной мойки парковок высоким давлением: очистка открытых и подземных паркингов, удаление пыли, грязи, следов шин и масляных пятен.',
    'brand': 'Сервис мойки высоким давлением',
    'nav.aria': 'Основная навигация',
    'logo.aria': 'Сервис мойки высоким давлением - на главную',
    'language.aria': 'Выбор языка',
    'menu.open': 'Открыть меню',
    'menu.close': 'Закрыть меню',
    'nav.services': 'Услуги',
    'nav.benefits': 'Преимущества',
    'nav.process': 'Как работаем',
    'nav.contact': 'Контакты',
    'hero.eyebrow': 'Профессиональная мойка на вашей территории',
    'hero.title': 'Мойка парковок высоким давлением для бизнеса и ЖК',
    'hero.text': 'Очищаем открытые, крытые и подземные парковки от пыли, грязи, следов шин и масляных пятен. Приезжаем с оборудованием, работаем аккуратно и подстраиваемся под ваш график.',
    'actions.aria': 'Связаться с нами',
    'whatsapp.aria': 'Написать в WhatsApp',
    'telegram.aria': 'Написать в Telegram',
    'hero.visual': 'Схематичный вид чистой парковки',
    'services.eyebrow': 'Что мы делаем',
    'services.title': 'Комплексная очистка парковок',
    'services.text': 'Подходит для ТЦ, бизнес-центров, складов, офисов, жилых комплексов и частных территорий.',
    'service.washing.title': 'Мойка парковок',
    'service.washing.text': 'Смываем накопившуюся грязь с бетона, асфальта и плитки без лишней остановки работы объекта.',
    'service.oil.title': 'Удаление масляных пятен',
    'service.oil.text': 'Точечно обрабатываем следы масла, топлива и технических жидкостей профессиональными средствами.',
    'service.dirt.title': 'Пыль и грязь',
    'service.dirt.text': 'Убираем пыль, песок, реагенты, следы колес и уличную грязь после активного движения авто.',
    'service.maintenance.title': 'Регулярная уборка',
    'service.maintenance.text': 'Подбираем удобный график мойки, чтобы территория стабильно выглядела аккуратно.',
    'benefits.eyebrow': 'Почему это удобно',
    'benefits.title': 'Сервис, который легко согласовать и контролировать',
    'benefit.fast.title': 'Быстрый выезд',
    'benefit.fast.text': 'Оперативно отвечаем, согласуем время и приезжаем с профессиональным оборудованием.',
    'benefit.price.title': 'Прозрачная цена',
    'benefit.price.text': 'Сразу объясняем, от чего зависит стоимость: площадь, состояние покрытия и частота работ.',
    'benefit.result.title': 'Профессиональный вид',
    'benefit.result.text': 'Чистая парковка создает лучшее первое впечатление для клиентов, жителей и сотрудников.',
    'benefit.mobile.title': 'Работа на месте',
    'benefit.mobile.text': 'Команда работает на вашей территории и учитывает особенности заезда, воды и графика объекта.',
    'process.eyebrow': 'Как это работает',
    'process.title': 'Три простых шага',
    'step.contact.title': 'Вы пишете нам',
    'step.contact.text': 'Отправьте адрес, примерную площадь и несколько фото загрязнений в WhatsApp или Telegram.',
    'step.details.title': 'Согласуем детали',
    'step.details.text': 'Обсуждаем объем работ, доступ к воде, удобное время и финальную стоимость.',
    'step.clean.title': 'Команда моет парковку',
    'step.clean.text': 'Приезжаем в согласованное время, моем парковку и сдаем результат после осмотра.',
    'before.eyebrow': 'До и после',
    'before.title': 'Парковка выглядит чище уже после первого выезда',
    'before.card.title': 'До',
    'before.card.text': 'Следы шин, пыль, масляные пятна и покрытие, которое выглядит неухоженным.',
    'after.card.title': 'После',
    'after.card.text': 'Аккуратная территория с более чистой поверхностью и лучшим впечатлением для посетителей.',
    'contact.eyebrow': 'Связаться',
    'contact.title': 'Хотите привести парковку в порядок без лишних разговоров?',
    'contact.text': 'Напишите нам в удобный мессенджер. Оценим задачу по фото, подскажем оптимальный формат работ и назовем понятную цену.',
    'contact.actions': 'Контактные кнопки',
    'whatsapp.contact': 'Связаться через WhatsApp',
    'telegram.contact': 'Связаться через Telegram',
    'footer.text': '© 2026 Сервис мойки высоким давлением. Профессиональная мойка парковок.',
    'footer.top': 'Наверх',
  },
  en: {
    htmlLang: 'en',
    title: 'Parking Lot Pressure Washing | Pressure Washing Service',
    description: 'Professional pressure washing service for parking lots: cleaning open and underground parking areas, removing dust, dirt, tire marks, and oil stains.',
    'brand': 'Pressure Washing Service',
    'nav.aria': 'Main navigation',
    'logo.aria': 'Pressure Washing Service - home',
    'language.aria': 'Language selection',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.process': 'How it works',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Professional cleaning at your location',
    'hero.title': 'Parking lot pressure washing for businesses and properties',
    'hero.text': 'We clean open, covered, and underground parking areas from dust, dirt, tire marks, and oil stains. We arrive with the equipment, work carefully, and fit the cleaning around your schedule.',
    'actions.aria': 'Contact us',
    'whatsapp.aria': 'Message us on WhatsApp',
    'telegram.aria': 'Message us on Telegram',
    'hero.visual': 'Illustration of a clean parking lot',
    'services.eyebrow': 'What we do',
    'services.title': 'Complete parking lot cleaning',
    'services.text': 'Ideal for shopping centers, business centers, warehouses, offices, residential complexes, and private properties.',
    'service.washing.title': 'Parking lot washing',
    'service.washing.text': 'We wash built-up dirt from concrete, asphalt, and paving without unnecessary disruption to your site.',
    'service.oil.title': 'Oil stain removal',
    'service.oil.text': 'We target oil, fuel, and technical fluid stains with professional cleaning products.',
    'service.dirt.title': 'Dust and dirt cleaning',
    'service.dirt.text': 'We remove dust, sand, road residue, wheel marks, and street dirt after heavy vehicle traffic.',
    'service.maintenance.title': 'Regular maintenance',
    'service.maintenance.text': 'We set a convenient cleaning schedule so your parking area consistently looks well maintained.',
    'benefits.eyebrow': 'Why it works',
    'benefits.title': 'A service that is easy to schedule and manage',
    'benefit.fast.title': 'Fast response',
    'benefit.fast.text': 'We reply quickly, agree on a time, and arrive with professional equipment.',
    'benefit.price.title': 'Clear pricing',
    'benefit.price.text': 'We explain the price upfront based on area, surface condition, and cleaning frequency.',
    'benefit.result.title': 'Professional appearance',
    'benefit.result.text': 'A clean parking area creates a better first impression for customers, residents, and staff.',
    'benefit.mobile.title': 'On-site service',
    'benefit.mobile.text': 'The team works on your property and accounts for access, water availability, and site schedule.',
    'process.eyebrow': 'How it works',
    'process.title': 'Three simple steps',
    'step.contact.title': 'You message us',
    'step.contact.text': 'Send the address, approximate area, and a few photos of the dirt via WhatsApp or Telegram.',
    'step.details.title': 'We agree on details',
    'step.details.text': 'We discuss the scope, water access, preferred time, and final price.',
    'step.clean.title': 'The team cleans',
    'step.clean.text': 'We arrive at the agreed time, wash the parking area, and hand over the result after inspection.',
    'before.eyebrow': 'Before and after',
    'before.title': 'The parking area looks cleaner after the first visit',
    'before.card.title': 'Before',
    'before.card.text': 'Tire marks, dust, oil stains, and a surface that looks neglected.',
    'after.card.title': 'After',
    'after.card.text': 'A neater area with a cleaner surface and a better impression for visitors.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Want to clean up your parking area without extra hassle?',
    'contact.text': 'Message us in your preferred messenger. We will estimate the job from photos, suggest the best work format, and give you a clear price.',
    'contact.actions': 'Contact buttons',
    'whatsapp.contact': 'Contact us on WhatsApp',
    'telegram.contact': 'Contact us on Telegram',
    'footer.text': '© 2026 Pressure Washing Service. Professional parking lot washing.',
    'footer.top': 'Back to top',
  },
};

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const internalLinks = document.querySelectorAll('a[href^="#"]');
const languageButtons = document.querySelectorAll('.language-btn');
const metaDescription = document.querySelector('meta[name="description"]');

const supportedLanguages = Object.keys(translations);
const browserLanguage = (navigator.language || '').slice(0, 2);
let currentLanguage = localStorage.getItem('siteLanguage') || (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'uk');

function getText(key) {
  return translations[currentLanguage][key] || translations.uk[key] || '';
}

function updateMenuLabel() {
  if (!menuToggle) return;

  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-label', getText(isOpen ? 'menu.close' : 'menu.open'));
}

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'uk';
  localStorage.setItem('siteLanguage', currentLanguage);

  document.documentElement.lang = getText('htmlLang');
  document.title = getText('title');
  if (metaDescription) metaDescription.setAttribute('content', getText('description'));

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = getText(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(':');
    if (attribute && key) element.setAttribute(attribute, getText(key));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  updateMenuLabel();
}

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  menuToggle.classList.remove('is-active');
  menuToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  updateMenuLabel();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');

    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    updateMenuLabel();
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) closeMenu();
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

applyLanguage(currentLanguage);
