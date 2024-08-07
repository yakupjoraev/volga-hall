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








// //////////////////////////////////////// animations /////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
  // Функция для проверки ширины окна
  function checkWidth() {
    return window.innerWidth >= 1200;
  }

  // Проверяем ширину окна
  if (!checkWidth()) {
    // Если ширина меньше 1200px, прерываем выполнение
    console.log('Ширина окна меньше 1200px. Анимации не будут выполнены.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const conferencesContent = {
    title: "Конференции",
    titleBg: "Конференции",
    text1: "Наш зал подойдет для проведения деловых встреч, тренингов, конференций и выставок, а также совещаний и других крупных событий, которые требуют создания определенных условий.",
    text2: "Volga Hall - технически оснащенный комплекс с современным оборудованием и опытным персоналом, сопровождающим мероприятие. ВолгаХолл так-же отлично подойдет для аренды зала для тренингов.",
    imgSrc: "./img/services/conferences-pic.png",
    imgSrcset: "./img/services/conferences-pic@2x.png",
    imgSrcWebp: "./img/services/conferences-pic.webp",
    imgSrcsetWebp: "./img/services/conferences-pic@2x.webp"
  };

  const banquetsContent = {
    title: "Банкеты",
    titleBg: "Банкеты",
    text1: "Проведение ваших мероприятий в банкетном зале в Волгограде в VOLGA HALL в Ворошиловском районе в отеле Hampton by Hilton Volgograd - наиболее оптимальное решение для свадьбы или корпоратива.",
    text2: "Ведь это не просто зал - это целый комплекс со всем необходимым техническим оборудованием и сопровождением мероприятий опытным персоналом, а также важным преимуществом будет размещение в отеле Hampton by Hilton Volgograd.",
    imgSrc: "./img/services/banquets-pic.png",
    imgSrcset: "./img/services/banquets-pic@2x.png",
    imgSrcWebp: "./img/services/banquets-pic.webp",
    imgSrcsetWebp: "./img/services/banquets-pic@2x.webp"
  };

  // Основной ScrollTrigger для секции конференций
  ScrollTrigger.create({
    trigger: ".services.conferences",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: true,
    scrub: 0.1,
    anticipatePin: 1,
    onEnter: () => swapContent(banquetsContent),
    onEnterBack: () => swapContent(conferencesContent),
    onLeaveBack: () => swapContent(conferencesContent)
  });

  function swapContent(content) {
    // Анимация исчезновения старого контента
    gsap.to(".services__title, .services__title-bg, .services__text, .services__pic, .services__link", {
      y: 150,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
      onComplete: () => {
        // Замена контента
        document.querySelector(".services__title").textContent = content.title;
        document.querySelector(".services__title-bg").textContent = content.titleBg;
        document.querySelector(".services__text:first-of-type").textContent = content.text1;
        document.querySelector(".services__text:last-of-type").textContent = content.text2;

        const picture = document.querySelector(".services__picture picture");
        picture.querySelector("source[type='image/webp']").srcset = `${content.imgSrcWebp} 1x, ${content.imgSrcsetWebp} 2x`;
        picture.querySelector("source[type='image/jpeg']").srcset = `${content.imgSrc} 1x, ${content.imgSrcset} 2x`;
        picture.querySelector("img").src = content.imgSrc;
        picture.querySelector("img").srcset = content.imgSrcset;

        // Анимация появления нового контента
        gsap.fromTo(".services__title, .services__title-bg, .services__text, .services__pic, .services__link",
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 }
        );
      }
    });
  }

});






document.addEventListener("DOMContentLoaded", function () {
  // Функция для проверки ширины окна
  function checkWidth() {
    return window.innerWidth >= 1200;
  }
  // Проверяем ширину окна
  if (!checkWidth()) {
    // Если ширина меньше 1200px, прерываем выполнение
    console.log('Ширина окна меньше 1200px. Анимации не будут выполнены.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".also-offer");
  const container = document.querySelector(".also-offer__main");
  const cards = document.querySelectorAll(".also-offer__card");
  const sectionWidth = section.offsetWidth;
  const containerWidth = container.offsetWidth;

  // Вычисление общей ширины контейнера на основе карточек и title wrappers
  const totalWidth = [...cards].reduce((acc, item) => acc + item.offsetWidth, 0);

  // Устанавливаем ширину контейнера карточек
  container.style.width = `${totalWidth}px`;

  // Создаем анимацию
  gsap.to(container, {
    x: () => -(totalWidth - containerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      pin: true,
      scrub: 0.01, // уменьшение значения для еще большего ускорения прокрутки
      end: () => `+=${totalWidth - sectionWidth + containerWidth}`,
      invalidateOnRefresh: true
    }
  });
});






class Sticker {
  constructor(options) {
    this.elements = document.querySelectorAll('.sticky_w');

    this.elements.forEach((el) => {
      el.innert = el.getAttribute("data-sticky") || 1;
      el.selfInnert = el.innert * 1.5; // Adjust multiplier to make the button move more

      // // Find the corresponding text element
      // el.text = el.querySelector('.sticky_t');
      // if (!el.text) return; // If no corresponding text element is found, skip this element
      // el.text.style.pointerEvents = "none";

      el.offsetY = 0;
      el.offsetX = 0;
      el.translateX = 0;
      el.translateY = 0;

      el.btnSize = {
        width: el.offsetWidth,
        height: el.offsetHeight
      };

      el.addEventListener("mousemove", (e) => {
        e = e || window.event;
        el.offsetX = e.offsetX;
        el.offsetY = e.offsetY;
        el.translateX = (-el.btnSize.width / 2) + el.offsetX;
        el.translateY = (-el.btnSize.height / 2) + el.offsetY;

        gsap.to(el.text, {
          duration: options.inertion,
          x: el.translateX / el.innert,
          y: el.translateY / el.innert,
          ease: "power1.out"
        });

        gsap.to(el, {
          duration: options.inertion,
          x: el.translateX / 4, // Adjust to make the element move significantly
          y: el.translateY / 4, // Adjust to make the element move significantly
          ease: "power1.out"
        });
      });

      el.addEventListener("mouseenter", (e) => {
        el.classList.add('hovered');
        el.offsetX = e.offsetX;
        el.offsetY = e.offsetY;

        gsap.to(el.text, {
          duration: 0.1,
          x: ((-el.btnSize.width / 2) + el.offsetX) / el.innert,
          y: ((-el.btnSize.height / 2) + el.offsetY) / el.innert,
          ease: "power1.out"
        });

        gsap.to(el, {
          duration: 0.1,
          x: el.translateX / 4, // Adjust to make the element move significantly
          y: el.translateY / 4, // Adjust to make the element move significantly
          ease: "power1.out"
        });
      });

      el.addEventListener("mouseleave", () => {
        el.classList.remove('hovered');

        gsap.to(el.text, {
          duration: options.spring,
          x: 0,
          y: 0,
          ease: "power1.out"
        });

        gsap.to(el, {
          duration: options.spring,
          x: 0,
          y: 0,
          ease: "power1.out"
        });
      });

      // // Prevent default click behavior on anchor tags if the mouse is moving
      // if (el.tagName.toLowerCase() === 'a') {
      //   el.addEventListener('click', (e) => {
      //     if (el.offsetX !== 0 || el.offsetY !== 0) {
      //       e.preventDefault();
      //     }
      //   });
      // }
    });
  }
}

new Sticker({
  inertion: 0.4, // Change this for cool effects :) //  0.3 - 1
  spring: 0.5    // And change this                   //  0.3 - 1
});

// анимация для скролла и для скроллбара

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 800,
  // Размер шага в пикселях 
  stepSize: 100,

  // Дополнительные настройки:

  // Ускорение 
  accelerationDelta: 50,
  // Максимальное ускорение
  accelerationMax: 3,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
})























document.addEventListener('DOMContentLoaded', () => {
  // Функция для проверки ширины окна
  function checkWidth() {
    return window.innerWidth >= 1200;
  }

  // Проверяем ширину окна
  if (!checkWidth()) {
    // Если ширина меньше 1000px, прерываем выполнение
    console.log('Ширина окна меньше 1000px. Анимации не будут выполнены.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Определяем слайды
  let slides = gsap.utils.toArray(".volga-hall__picture");

  // Определяем общую высоту секции
  let totalHeight = slides.reduce((sum, slide) => sum + slide.scrollHeight, 0);

  // Функция для получения значения `y` в зависимости от брекпоинта
  function getAdaptiveValues() {
    let windowWidth = window.innerWidth;
    let values = { logoY: 0, circleY: 0, circleEndY: 0 };

    if (windowWidth >= 1600) { // Десктопы
      values.logoY = window.innerHeight * 0.1;
      values.circleY = -window.innerHeight * 0.4;
      values.circleEndY = -window.innerHeight * 0.5;
    }
    else if (windowWidth >= 1200) { // Десктопы
      values.logoY = window.innerHeight * 0.1;
      values.circleY = -window.innerHeight * 0.1;
      values.circleEndY = -window.innerHeight * 0.5;
    } else if (windowWidth >= 768) { // Ноутбуки
      values.logoY = window.innerHeight * 0.4;
      values.circleY = -window.innerHeight * 0.4;
      values.circleEndY = -window.innerHeight * 0.6;
    } else { // Планшеты
      values.logoY = window.innerHeight * 0.5;
      values.circleY = -window.innerHeight * 0.5;
      values.circleEndY = -window.innerHeight * 0.7;
    }

    return values;
  }

  // Получаем адаптивные значения
  let values = getAdaptiveValues();

  // Создание таймлайна GSAP для анимации слайдов
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".volga-hall",
      pin: true, // Закрепляем секцию на экране
      scrub: 1,
      start: "top top",
      end: "+=" + totalHeight,
      pinSpacing: true // Оставляем пространство при закреплении
    }
  });

  // Анимация прокрутки изображений вверх
  tl.to(slides, {
    yPercent: -70 * (slides.length - 1), // Измените значение для прокрутки
    ease: "power1.inOut",
    duration: slides.length * 1.5 // Увеличиваем продолжительность для более плавной анимации
  });

  // Плавное движение логотипа вниз
  tl.to(".volga-hall__name", {
    y: values.logoY,
    duration: 5,
    ease: "power1.out",
  }, "-=1") // Запуск анимации логотипа чуть раньше

    // Анимация круга
    .to(".circle", {
      opacity: 1,
      y: values.circleY,
      scale: 1,
      duration: 4,
      ease: "power1.out",
      onComplete: () => {
        document.body.classList.add('no-scroll');
        // Запускаем оставшуюся анимацию через 1 секунду
        gsap.delayedCall(1, completeCircleAnimation);
      }
    }, ">") // Запуск анимации круга после движения логотипа
    .to(".circle", {
      scale: 60,
      duration: 2,
      ease: "power1.out",
    });

  // Функция для завершения анимации круга и последующих шагов
  function completeCircleAnimation() {
    // Искусственная прокрутка
    gsap.to(window, {
      scrollTo: { y: ".contact-us-animation", offsetY: 0 },
      duration: 0.1, // Установите очень короткую продолжительность для прокрутки
      onComplete: () => {
        // Показ секции "Контакты" и футера
        gsap.to(".contact-us-animation, .footer-animation", {
          display: 'flex',
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            // Исчезновение круга через секунду после прокрутки
            setTimeout(() => {
              gsap.to(".circle", {
                opacity: 0,
                y: '-50vh',
                duration: 2,
                onComplete: () => {
                  // Включение скролла
                  document.body.classList.remove('no-scroll');
                }
              });
            }, 100);
          }
        });
      }
    });
  }

  // Добавляем ScrollTrigger для обратного скролла
  ScrollTrigger.create({
    trigger: ".volga-hall",
    start: "top top",
    end: "+=" + totalHeight,
    onUpdate: (self) => {
      if (self.direction === -1) {
        // Обратный скролл
        gsap.to(".contact-us-animation, .footer-animation", {
          opacity: 0,
          duration: 0.5
        });

        gsap.to(".circle", {
          opacity: 0,
        });

        // Плавное движение логотипа вниз
        gsap.to(".volga-hall__name", {
          duration: 2,
        }) // Запуск анимации логотипа чуть раньше
      }
    }
  });

});

















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
const animationSection = document.querySelectorAll('.animation-section');

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

animationSection.forEach(block => {
  observer.observe(block);
});
