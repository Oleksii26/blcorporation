// ================= PHONE MASK =================
const phone = document.getElementById('phone');

phone.addEventListener('input', () => {
  phone.value = phone.value.replace(/\D/g, '');
});


// ================= FORM VALIDATION =================
document.querySelector('form').addEventListener('submit', e => {
  const name = document.querySelector('input[type="text"]');
  const email = document.getElementById('email');

  let hasError = false;

  if (!name.value.trim()) {
    name.classList.add('error');
    hasError = true;
  } else {
    name.classList.remove('error');
  }

  const emailRegex = /^[^@]{4,}@[^@]{3,}\.[^@]{2,}$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('error');
    hasError = true;
  } else {
    email.classList.remove('error');
  }

  if (phone.value.length < 10) {
    phone.classList.add('error');
    hasError = true;
  } else {
    phone.classList.remove('error');
  }

  if (hasError) {
    e.preventDefault();
  }
});

// ================= SLIDERS =================

document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.slider-arrow.prev');
  const nextBtn = slider.querySelector('.slider-arrow.next');
  const counterCurrent = slider.querySelector('.counter_slide');
  const counterTotal = slider.querySelector('.total_slide');

  let current = 0;
  const total = slides.length;

  if (counterTotal) {
    counterTotal.textContent = total;
  }

  function updateCounter() {
    if (counterCurrent) {
      counterCurrent.textContent = current + 1;
    }
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    current = index;
    updateCounter();
  }

  updateCounter();

  prevBtn.addEventListener('click', () => {
    const nextIndex = current - 1 < 0 ? total - 1 : current - 1;
    showSlide(nextIndex);
  });

  nextBtn.addEventListener('click', () => {
    const nextIndex = current + 1 >= total ? 0 : current + 1;
    showSlide(nextIndex);
  });
});

// ================= LANGUAGE =================

// Тільки англійські переклади
const enTranslations = {
  contact: "Get in tuch",
  title: "Reliable manufacturing solutions for complex tasks",
  description: "Our company manufactures industrial-scale products for protection systems and specialised solutions.",
  aboutUs: "about us",
  aboutTitle: "We have brought together a team of engineers and manufacturers with over 20 years of experience.",
  aboutSubTitle: "We are a systematic, reliable partner who knows how to make things work.",
  aboutSquereOneTitle: "Years of expertise",
  aboutSquereOneText: "Engineering and manufacturing team",
  aboutSquereTwoTitle: "Customised solutions",
  aboutSquereTwoText: "Development for production needs",
  aboutSquereThreeTitle: "Mass production",
  aboutSquereThreeText: "Scaling production to meet your needs",
  aboutSquereFourTitle: "Systematic approach",
  aboutSquereFourText: "From idea to serial production",
  productsTitle: "Our products",
  productsSubTitle: "We create industrial perimeter security systems. These are sustainable solutions that are scalable, adaptable and truly effective in complex environments.",
  productsBtnOne: "Spiral safety barriers by concertina wire",
  productsBtnTwo: "Low-visibility wire entanglement ",
  productsBtnThree: "Fastening elements and accessories",
  productsBtnFour: "Fortification  Gabions",
  sliderOneSubTitle: 'Barrier made of reinforced barbed tape "yogoza concertina wire" (1100/7/2.8/100)',
  diametr: "Diameter",
  yogoNum: "number of staples per wheel",
  wireDiameter: "Wire diameter",
  numTurns: "number of turns",
  diametrHook: "Diameter of the hook",
  yogoNumCircle: "Number of staples per circle",
  characteristics: "characteristics",
  sliderTwoSubTitle: "The obstacle is barely noticeable, made of MPP wire",
  lowWhireLenght: "length",
  lowWhireWidth: "width",
  lowWhireHeight: "height",
  lowWhireDiameter: "diameter",
  lowWhireSize: "ring size",
  lowWhireWeight: "maximum weight",
  kg: "kg",
  sliderThreeSubTitle: "Fastening elements and accessories include a wide range of parts of various types and sizes. We will select the best options for your project.",
  polymerCoating: "Polymer powder coating",
  steelMaterial: " Steel material",
  sliderFourSubTitle: "Fortification gabions",
  cellSize: "cell size",
  gabbionsSection1: "Fortification gabions, 1 section",
  gabbionsSection2: "Fortification gabions, 2 sections",
  toTopBtn: "To top",
  ourCapabilities: "OUR CAPABILITIES",
  capTitle: "Powerful systems for complex facilities",
  capSubTitle: "Industrial scale, engineering precision and systems that operate for years without weak points.",
  capSquareOne: "Production facilities with modern equipment",
  capSquareTwo: "Tens of thousands of metres of products every month",
  capSquareThree: "Warehouse programmes with optimal terms",
  capSquareFour: "Quality control at all stages",
  ctaPrefix: "Our",
  ctaObject: "perimeter protection systems",
  ctaConnector: "offer",
  ctaScale: "industrial scale",
  ctaDurability: "durability",
  ctaAnd: "and",
  ctaReliability: "reliability",
  contactUs: "Contact us to collaborate",
  name: "NAME",
  phone: "PHONE",
  send: "SEND",
  schedule: "Buisness hours:",
  businessHours: "Mon–Fri, 9:00 AM – 6:00 PM",
  contacts: "Contacts",
  privacy: "Privacy Policy"

};

const enPlaceholders = {
  name: 'Enter your full name',
  email: 'Enter your email',
  phone: 'Enter your phone number'
};


let currentLang = 'ua'; // за замовчуванням українська

const langButton = document.getElementById('lang-switch');

function updateTexts() {

  // === звичайний текст ===
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;

    if (currentLang === 'en' && enTranslations[key]) {
      el.textContent = enTranslations[key];
    } else {
      el.textContent = el.dataset.original;
    }
  });

  // === placeholder ===
  document.querySelectorAll('input[name]').forEach(input => {
    const key = input.name;

    if (currentLang === 'en' && enPlaceholders[key]) {
      input.placeholder = enPlaceholders[key];
    } else {
      input.placeholder = input.dataset.originalPlaceholder;
    }
  });
}

// Зберігаємо оригінальні тексти у data-original при завантаженні
document.querySelectorAll('[data-i18n]').forEach(el => {
  el.setAttribute('data-original', el.textContent);
});

// Зберігаємо оригінальні placeholder
document.querySelectorAll('input[placeholder]').forEach(input => {
  input.setAttribute('data-original-placeholder', input.placeholder);
});


// Обробник кнопки
langButton.addEventListener('click', () => {
  currentLang = currentLang === 'ua' ? 'en' : 'ua';
  updateTexts();
});

// Ініціалізація
updateTexts();



