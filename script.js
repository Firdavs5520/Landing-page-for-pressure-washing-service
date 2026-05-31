document.documentElement.classList.add('has-js');

const translations = {
  uk: {
    htmlLang: 'uk',
    title: 'Миття паркінгів високим тиском | Pressure Wash Service',
    description: 'Професійне миття паркінгів високим тиском: видалення бруду, пилу, слідів шин і масляних плям. Виїзна команда для бізнесу та житлових комплексів.',
    'brand': 'Pressure Wash Service',
    'nav.aria': 'Головна навігація',
    'logo.aria': 'Pressure Wash Service - на головну',
    'language.aria': 'Вибір мови',
    'menu.open': 'Відкрити меню',
    'menu.close': 'Закрити меню',
    'nav.services': 'Послуги',
    'nav.benefits': 'Переваги',
    'nav.process': 'Як працюємо',
    'nav.contact': 'Контакти',
    'hero.eyebrow': "Виїзна команда на ваш об'єкт",
    'hero.title': 'Професійне миття паркінгів високим тиском',
    'hero.text': 'Очищаємо відкриті та криті паркінги від пилу, бруду, слідів шин і масляних плям. Працюємо акуратно, швидко та в зручний для вас час.',
    'actions.aria': "Зв'язатися з нами",
    'whatsapp.aria': 'Написати у WhatsApp',
    'telegram.aria': 'Написати у Telegram',
    'hero.visual': 'Схематичний вигляд чистого паркінгу',
    'services.eyebrow': 'Що ми робимо',
    'services.title': 'Послуги для паркінгів',
    'services.text': "Підходить для бізнес-центрів, торгових об'єктів, складів, ЖК, офісів і приватних територій.",
    'service.washing.title': 'Миття паркінгів',
    'service.washing.text': 'Очищаємо покриття високим тиском і повертаємо території доглянутий вигляд.',
    'service.oil.title': 'Видалення масляних плям',
    'service.oil.text': 'Обробляємо плями від масла та технічних рідин професійними засобами.',
    'service.dirt.title': 'Пил і бруд',
    'service.dirt.text': 'Змиваємо пил, пісок, сліди коліс і вуличний бруд після активного руху авто.',
    'service.maintenance.title': 'Регулярне прибирання',
    'service.maintenance.text': 'Домовляємося про графік обслуговування, щоб паркінг стабільно залишався чистим.',
    'benefits.eyebrow': 'Чому це зручно',
    'benefits.title': 'Чистий результат без зайвого клопоту',
    'benefit.fast.title': 'Швидкий виїзд',
    'benefit.fast.text': "Узгоджуємо час і приїжджаємо на об'єкт з потрібним обладнанням.",
    'benefit.price.title': 'Доступна ціна',
    'benefit.price.text': 'Вартість залежить від площі, рівня забруднення та регулярності робіт.',
    'benefit.result.title': 'Професійний вигляд',
    'benefit.result.text': 'Чистий паркінг краще зустрічає клієнтів, мешканців і співробітників.',
    'benefit.mobile.title': 'Робота на місці',
    'benefit.mobile.text': 'Виїзна команда виконує миття прямо на вашій території.',
    'process.eyebrow': 'Як це працює',
    'process.title': 'Три прості кроки',
    'step.contact.title': 'Ви пишете нам',
    'step.contact.text': "Зв'яжіться через WhatsApp або Telegram і надішліть інформацію про паркінг.",
    'step.details.title': 'Узгоджуємо деталі',
    'step.details.text': 'Уточнюємо площу, рівень забруднення, зручний час і фінальну вартість.',
    'step.clean.title': 'Команда миє паркінг',
    'step.clean.text': "Приїжджаємо на об'єкт, виконуємо роботу та залишаємо чисту територію.",
    'before.eyebrow': 'До і після',
    'before.title': 'Помітний результат після одного миття',
    'before.card.title': 'До',
    'before.card.text': 'Масляні плями, пил, сліди коліс і тьмяне покриття.',
    'after.card.title': 'Після',
    'after.card.text': 'Свіжий, охайний паркінг із чистою поверхнею.',
    'contact.eyebrow': "Зв'язатися",
    'contact.title': 'Потрібен чистий паркінг уже цього тижня?',
    'contact.text': 'Напишіть нам у зручний месенджер. Швидко оцінимо задачу та запропонуємо зрозумілу ціну.',
    'contact.actions': 'Контактні кнопки',
    'whatsapp.contact': "Зв'язатися через WhatsApp",
    'telegram.contact': "Зв'язатися через Telegram",
    'footer.text': '© 2026 Pressure Wash Service. Миття паркінгів високим тиском.',
    'footer.top': 'Нагору',
  },
  ru: {
    htmlLang: 'ru',
    title: 'Мойка парковок высоким давлением | Pressure Wash Service',
    description: 'Профессиональная мойка парковок высоким давлением: удаление грязи, пыли, следов шин и масляных пятен. Выездная команда для бизнеса и жилых комплексов.',
    'brand': 'Pressure Wash Service',
    'nav.aria': 'Основная навигация',
    'logo.aria': 'Pressure Wash Service - на главную',
    'language.aria': 'Выбор языка',
    'menu.open': 'Открыть меню',
    'menu.close': 'Закрыть меню',
    'nav.services': 'Услуги',
    'nav.benefits': 'Преимущества',
    'nav.process': 'Как работаем',
    'nav.contact': 'Контакты',
    'hero.eyebrow': 'Выездная команда на ваш объект',
    'hero.title': 'Профессиональная мойка парковок высоким давлением',
    'hero.text': 'Очищаем открытые и крытые парковки от пыли, грязи, следов шин и масляных пятен. Работаем аккуратно, быстро и в удобное для вас время.',
    'actions.aria': 'Связаться с нами',
    'whatsapp.aria': 'Написать в WhatsApp',
    'telegram.aria': 'Написать в Telegram',
    'hero.visual': 'Схематичный вид чистой парковки',
    'services.eyebrow': 'Что мы делаем',
    'services.title': 'Услуги для парковок',
    'services.text': 'Подходит для бизнес-центров, торговых объектов, складов, ЖК, офисов и частных территорий.',
    'service.washing.title': 'Мойка парковок',
    'service.washing.text': 'Очищаем покрытие высоким давлением и возвращаем территории ухоженный вид.',
    'service.oil.title': 'Удаление масляных пятен',
    'service.oil.text': 'Обрабатываем пятна от масла и технических жидкостей профессиональными средствами.',
    'service.dirt.title': 'Пыль и грязь',
    'service.dirt.text': 'Смываем пыль, песок, следы колес и уличную грязь после активного движения авто.',
    'service.maintenance.title': 'Регулярная уборка',
    'service.maintenance.text': 'Согласуем график обслуживания, чтобы парковка стабильно оставалась чистой.',
    'benefits.eyebrow': 'Почему это удобно',
    'benefits.title': 'Чистый результат без лишних хлопот',
    'benefit.fast.title': 'Быстрый выезд',
    'benefit.fast.text': 'Согласуем время и приезжаем на объект с нужным оборудованием.',
    'benefit.price.title': 'Доступная цена',
    'benefit.price.text': 'Стоимость зависит от площади, уровня загрязнения и регулярности работ.',
    'benefit.result.title': 'Профессиональный вид',
    'benefit.result.text': 'Чистая парковка лучше встречает клиентов, жильцов и сотрудников.',
    'benefit.mobile.title': 'Работа на месте',
    'benefit.mobile.text': 'Выездная команда выполняет мойку прямо на вашей территории.',
    'process.eyebrow': 'Как это работает',
    'process.title': 'Три простых шага',
    'step.contact.title': 'Вы пишете нам',
    'step.contact.text': 'Свяжитесь через WhatsApp или Telegram и отправьте информацию о парковке.',
    'step.details.title': 'Согласуем детали',
    'step.details.text': 'Уточняем площадь, уровень загрязнения, удобное время и финальную стоимость.',
    'step.clean.title': 'Команда моет парковку',
    'step.clean.text': 'Приезжаем на объект, выполняем работу и оставляем чистую территорию.',
    'before.eyebrow': 'До и после',
    'before.title': 'Заметный результат после одной мойки',
    'before.card.title': 'До',
    'before.card.text': 'Масляные пятна, пыль, следы колес и тусклое покрытие.',
    'after.card.title': 'После',
    'after.card.text': 'Свежая, аккуратная парковка с чистой поверхностью.',
    'contact.eyebrow': 'Связаться',
    'contact.title': 'Нужна чистая парковка уже на этой неделе?',
    'contact.text': 'Напишите нам в удобный мессенджер. Быстро оценим задачу и предложим понятную цену.',
    'contact.actions': 'Контактные кнопки',
    'whatsapp.contact': 'Связаться через WhatsApp',
    'telegram.contact': 'Связаться через Telegram',
    'footer.text': '© 2026 Pressure Wash Service. Мойка парковок высоким давлением.',
    'footer.top': 'Наверх',
  },
  en: {
    htmlLang: 'en',
    title: 'Professional Parking Lot Pressure Washing | Pressure Wash Service',
    description: 'Professional pressure washing for parking lots: dust, dirt, tire marks, and oil stain removal. Mobile on-site team for businesses and residential properties.',
    'brand': 'Pressure Wash Service',
    'nav.aria': 'Main navigation',
    'logo.aria': 'Pressure Wash Service - home',
    'language.aria': 'Language selection',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.process': 'How it works',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Mobile team at your location',
    'hero.title': 'Professional parking lot pressure washing',
    'hero.text': 'We clean open and covered parking lots from dust, dirt, tire marks, and oil stains. The work is neat, fast, and scheduled at a convenient time for you.',
    'actions.aria': 'Contact us',
    'whatsapp.aria': 'Message us on WhatsApp',
    'telegram.aria': 'Message us on Telegram',
    'hero.visual': 'Illustration of a clean parking lot',
    'services.eyebrow': 'What we do',
    'services.title': 'Parking lot cleaning services',
    'services.text': 'A practical solution for business centers, retail properties, warehouses, residential complexes, offices, and private areas.',
    'service.washing.title': 'Parking lot washing',
    'service.washing.text': 'We wash the surface with high pressure and restore a clean, well-kept look.',
    'service.oil.title': 'Oil stain removal',
    'service.oil.text': 'We treat oil spots and technical fluid stains with professional cleaning products.',
    'service.dirt.title': 'Dust and dirt cleaning',
    'service.dirt.text': 'We remove dust, sand, wheel marks, and street dirt after heavy vehicle traffic.',
    'service.maintenance.title': 'Regular maintenance',
    'service.maintenance.text': 'We agree on a maintenance schedule so the parking lot stays consistently clean.',
    'benefits.eyebrow': 'Why it is convenient',
    'benefits.title': 'A clean result without extra hassle',
    'benefit.fast.title': 'Fast service',
    'benefit.fast.text': 'We agree on the time and arrive on site with the right equipment.',
    'benefit.price.title': 'Affordable pricing',
    'benefit.price.text': 'The price depends on the area, level of dirt, and frequency of service.',
    'benefit.result.title': 'Professional result',
    'benefit.result.text': 'A clean parking lot makes a better first impression on clients, residents, and staff.',
    'benefit.mobile.title': 'On-site service',
    'benefit.mobile.text': 'Our mobile team performs the cleaning directly at your location.',
    'process.eyebrow': 'How it works',
    'process.title': 'Three simple steps',
    'step.contact.title': 'You contact us',
    'step.contact.text': 'Message us via WhatsApp or Telegram and send details about the parking lot.',
    'step.details.title': 'We agree on details',
    'step.details.text': 'We clarify the area, dirt level, preferred time, and final price.',
    'step.clean.title': 'The team cleans',
    'step.clean.text': 'We arrive on site, complete the work, and leave the area clean.',
    'before.eyebrow': 'Before and after',
    'before.title': 'A visible result after one cleaning',
    'before.card.title': 'Before',
    'before.card.text': 'Oil stains, dust, wheel marks, and a dull surface.',
    'after.card.title': 'After',
    'after.card.text': 'A fresh, tidy parking lot with a clean surface.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Need a clean parking lot this week?',
    'contact.text': 'Message us in your preferred messenger. We will quickly estimate the job and offer a clear price.',
    'contact.actions': 'Contact buttons',
    'whatsapp.contact': 'Contact us on WhatsApp',
    'telegram.contact': 'Contact us on Telegram',
    'footer.text': '© 2026 Pressure Wash Service. Professional parking lot pressure washing.',
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
