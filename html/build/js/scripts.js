// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.nav-menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.nav-menu *')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // // Вот тут мы ставим брейкпоинт навбара
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth > 991.98) {
  //     menu.classList.remove('active')
  //     burger.classList.remove('active-burger')
  //     body.classList.remove('locked')
  //   }
  // })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function hallTabs() {
  const container = document.querySelector('.hall-layout');

  if (!container) {
    return null
  }

  const tabButtons = document.querySelectorAll('.hall-layout__btn');
  const tabContents = document.querySelectorAll('.hall-layout__content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab-btn');

      // Удаляем класс active у всех кнопок и контента
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем класс active к выбранной кнопке и соответствующему контенту
      button.classList.add('active');
      document.querySelector(`.hall-layout__content[data-tab-content="${target}"]`).classList.add('active');
    });
  });
}

hallTabs();

document.querySelectorAll('.sums__item').forEach((item, index) => {
  item.style.setProperty('--index', index + 1);
});

document.querySelector('.also-offer__cards').addEventListener('wheel', function (event) {
  if (event.deltaY !== 0) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
  }
});


const slider = document.querySelector('.also-offer__cards');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});


// //////////////////////////////////////// animations /////////////////////////////////////////////


// Функция для запуска счетчика
function sumsVal(element) {
  let startValue = 0;
  let endValue = parseInt(element.getAttribute("data-val"));
  let duration = Math.floor(1000 / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    element.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}

// Функция, которая будет вызываться при появлении элемента в поле видимости
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Добавляем класс, когда элемент появляется в поле видимости
      entry.target.classList.add('visible');

      // Если элемент имеет класс sums__item, запускаем анимацию счетчика
      if (entry.target.classList.contains('sums__item')) {
        let valueDisplay = entry.target.querySelector(".sums__item-sum");
        sumsVal(valueDisplay);
      }

      // Отключаем наблюдение для данного элемента после добавления класса (если это нужно)
      observer.unobserve(entry.target);
    }
  });
}

// Создаем экземпляр IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Используем viewport как корневой элемент
  rootMargin: '0px', // Можете настроить отступы, если нужно
  threshold: 0.5, // Порог видимости (0.5 означает, что элемент будет считаться видимым, когда половина его видна)
});

// Получаем все элементы с классом "section-head" и "sums__item"
const sectionLine = document.querySelectorAll('.section-head');
const servicesMain = document.querySelectorAll('.services__main');
const sumsItems = document.querySelectorAll('.sums__item');
const tehnoSection = document.querySelectorAll('.tehno');

// Наблюдаем за каждым элементом
sectionLine.forEach(block => {
  observer.observe(block);
});

sumsItems.forEach(block => {
  observer.observe(block);
});

servicesMain.forEach(block => {
  observer.observe(block);
});

tehnoSection.forEach(block => {
  observer.observe(block);
});

