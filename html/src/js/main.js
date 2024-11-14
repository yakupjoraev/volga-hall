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



function tariffsSlider() {
  const container = document.querySelector('.tariffs');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".tariffs__slider", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      // when window width is >= 380px
      380: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      // when window width is >= 769px
      769: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    pagination: {
      el: ".tariffs__slider-pagination",
    },
  });
}

if (window.matchMedia("(max-width: 991px)").matches) {
  tariffsSlider();
}


function loyaltySlider() {
  const container = document.querySelector('.loyalty');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".loyalty__slider", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
      el: ".loyalty__slider-pagination",
    },
  });
}

if (window.matchMedia("(max-width: 991px)").matches) {
  loyaltySlider();
}


function banquSlider() {
  const container = document.querySelector('.rent-banqu');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".rent-banqu__slider", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: ".rent-banqu__slider-arrow--next",
      prevEl: ".rent-banqu__slider-arrow--prev",
    },
  });
}
banquSlider();

function equipmentSlider() {
  const container = document.querySelector('.equipment');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".equipment-slider", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: ".equipment-slider-arrow--next",
      prevEl: ".equipment-slider-arrow--prev",
    },
  });
}
equipmentSlider();

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.equipment');

  if (!container) {
    return null
  }
  const tabButtons = document.querySelectorAll('.equipment__btn');
  const tabContents = document.querySelectorAll('.equipment__tabs-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс active у всех кнопок и контентов
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем класс active только той кнопке, на которую кликнули, и соответствующему контенту
      button.classList.add('active');
      const tabContentId = button.getAttribute('data-equipment-btn');
      const activeTabContent = document.querySelector(`[data-equipment-content="${tabContentId}"]`);
      activeTabContent.classList.add('active');
    });
  });
});


// //////////////////////////////////////// animations /////////////////////////////////////////////





document.addEventListener("DOMContentLoaded", function () {
  const sectionContainer = document.querySelector('.services');
  if (!sectionContainer) {
    return null;
  }

  function checkWidth() {
    return window.innerWidth >= 1200;
  }

  if (!checkWidth()) {
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

  let contentChangeTimeout;
  let isSecondSlideShown = false;

  ScrollTrigger.create({
    trigger: ".services.conferences",
    start: "top top",
    end: "bottom+=1500 top",
    pin: true,
    pinSpacing: true,
    scrub: 1,
    anticipatePin: 1,
    onEnter: () => {
      if (ScrollTrigger.isInViewport(sectionContainer, 0.9) && !contentChangeTimeout) {
        blockScrollWithAnimationDelay(banquetsContent, 2000);
        isSecondSlideShown = true;
      }
    },
    onEnterBack: () => {
      if (ScrollTrigger.isInViewport(sectionContainer, 0.9) && !contentChangeTimeout && isSecondSlideShown) {
        blockScrollWithAnimationDelay(conferencesContent, 2000);
        isSecondSlideShown = false;
      }
    }
  });

  function blockScrollWithAnimationDelay(content, delayTime) {
    disableScroll();
    contentChangeTimeout = setTimeout(() => {
      swapContent(content, delayTime);
    }, delayTime);
  }

  function swapContent(content, delayTime) {
    gsap.to(".services__title, .services__title-bg, .services__text, .services__pic, .services__link", {
      y: 150,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
      onComplete: () => {
        document.querySelector(".services__title").textContent = content.title;
        document.querySelector(".services__title-bg").textContent = content.titleBg;
        document.querySelector(".services__text:first-of-type").textContent = content.text1;
        document.querySelector(".services__text:last-of-type").textContent = content.text2;

        const picture = document.querySelector(".services__picture picture");
        picture.querySelector("source[type='image/webp']").srcset = `${content.imgSrcWebp} 1x, ${content.imgSrcsetWebp} 2x`;
        picture.querySelector("source[type='image/jpeg']").srcset = `${content.imgSrc} 1x, ${content.imgSrcset} 2x`;
        picture.querySelector("img").src = content.imgSrc;
        picture.querySelector("img").srcset = content.imgSrcset;

        gsap.fromTo(".services__title, .services__title-bg, .services__text, .services__pic, .services__link",
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, stagger: 0.1, onComplete: enableScroll }
        );
      }
    });
  }

  function preventScroll(e) {
    e.preventDefault();
  }

  function disableScroll() {
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    document.body.addEventListener('wheel', preventScroll, { passive: false });
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
  }

  function enableScroll() {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    document.body.removeEventListener('wheel', preventScroll);
    document.body.removeEventListener('touchmove', preventScroll);
    contentChangeTimeout = null;
  }
});






document.addEventListener("DOMContentLoaded", function () {
  const sectionContainer = document.querySelector('.also-offer');
  if (!sectionContainer) {
    return null
  }
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
    });
  }
}


if (window.matchMedia("(min-width: 580px)").matches) {
  new Sticker({
    inertion: 0.4, // Change this for cool effects :) //  0.3 - 1
    spring: 0.5    // And change this                   //  0.3 - 1
  });

}

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




// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);
// initialise
headroom.init();





















document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.volga-hall');
  if (!container) {
    return null
  }

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

  // Функция для получения значения y в зависимости от брекпоинта
  function getAdaptiveValues() {
    let windowWidth = window.innerWidth;
    let values = { logoY: 0, circleY: 0, circleEndY: 0 };

    if (windowWidth >= 1600) { // Десктопы
      values.logoY = window.innerHeight * 0.1;
      values.circleY = -window.innerHeight * 0.65;
      values.circleEndY = -window.innerHeight * 0.5;
    }
    else if (windowWidth >= 1200) { // Десктопы
      values.logoY = window.innerHeight * 0.0001;
      values.circleY = -window.innerHeight * 0.8;
      values.circleEndY = -window.innerHeight * 0.1;
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
    duration: 3,
    ease: "power1.out",
  }, "-=1") // Запуск анимации логотипа чуть раньше

    // Анимация круга
    .to(".circle", {
      // opacity: 1,
      y: values.circleY,
      scale: 1,
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(".circle", {
          duration: 1,
          scale: 50,
        });
        document.body.classList.add('non-scroll');
        // Запускаем оставшуюся анимацию через 1 секунду
        gsap.delayedCall(1, completeCircleAnimation);
      }
    }, ">") // Запуск анимации круга после движения логотипа
    .to(".circle", {
      onEnter: () => {
        gsap.to(".circle", {
          scale: 80,
          duration: 1,
          ease: "power1.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(".circle", {
          scale: 1,
          duration: 1,
          ease: "power1.out"
        });
      }
    });

  // Функция для завершения анимации круга и последующих шагов
  function completeCircleAnimation() {
    // Искусственная прокрутка
    gsap.to(window, {
      scrollTo: { y: ".contact-us-animation", offsetY: 0 },
      duration: 0.1, // Установите очень короткую продолжительность для прокрутки
      onComplete: () => {
        // Показ секции "Контакты" и футера
        gsap.to(".contact-us-animation .container, .footer-animation .container", {
          // display: 'flex',
          opacity: 1,
          duration: 1,
          onComplete: () => {
            // Исчезновение круга через секунду после прокрутки
            setTimeout(() => {
              gsap.to(".circle", {
                scale: 1,
                duration: 1,
                onComplete: () => {
                  // Включение скролла
                  document.body.classList.remove('non-scroll');
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
        gsap.to(".contact-us-animation .container, .footer-animation .container", {
          opacity: 1,
          duration: 0.5
        });

        // Обратный скролл: круг остается в своем размере и перемещается вниз
        gsap.to(".circle", {
          opacity: 1,
          // y: values.circleY,
          scale: 1,
          duration: 1,
        });

        // Плавное движение логотипа вниз
        gsap.to(".volga-hall__name", {
          // y: values.logoY,
          duration: 2,
        });
      }
    }
  });

  // Enable scrolling if user manually reaches the footer section
  window.addEventListener('scroll', () => {
    const footerPosition = document.querySelector('.footer-animation').getBoundingClientRect().top;
    if (footerPosition <= window.innerHeight && document.body.classList.contains('non-scroll')) {
      document.body.classList.remove('non-scroll');
    }
  });

  // Проверка текущей позиции страницы при загрузке
  window.addEventListener('load', () => {
    if (document.querySelector(".contact-us-animation").getBoundingClientRect().top < window.innerHeight) {
      // Если страница загружена в секциях "Контакты" или "Футер", не увеличиваем круг
      gsap.set(".circle", { scale: 1 });
      gsap.to(".contact-us-animation .container, .footer-animation .container", {
        opacity: 1,
        duration: 0.5
      });
    }
  });

});


function scrollPic() {
  /*Анимация - след блоки наезжают на картинку конец */

  const container = document.querySelector('.scroll-sections')

  if (!container) {
    return null
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scroll-sections", {
    scrollTrigger: {
      trigger: ".scroll-sections",
      start: "bottom bottom", // когда верх .hall касается верха окна
      end: "bottom+=100% top", // когда нижняя часть секции .hall выходит за экран
      pin: true, // фиксирует элемент
      pinSpacing: false, // отключаем отступ, чтобы остальные секции перемещались поверх
      scrub: 3, // синхронизация с прокруткой
    }
  });

}

if (window.matchMedia("(min-width: 767px)").matches) {
  scrollPic()
}















function hiddenSocials() {
  const heroContacts = document.querySelector('.hero__contacts');
  if (!heroContacts) {
    return null;
  }

  // Function to toggle the 'hidden' class based on intersection
  const toggleHeroContacts = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'hidden' when the section is in view
        heroContacts.classList.add('hidden');
        heroContacts.classList.remove('show-visible');
      } else {
        // Remove 'hidden' and add 'show-visible' only when hidden is removed

        if (heroContacts.classList.contains('hidden')) {
          heroContacts.classList.remove('hidden');
          heroContacts.classList.add('show-visible');
        }
      }
    });
  };

  // Intersection Observer settings
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  // Create and apply observer
  const observer = new IntersectionObserver(toggleHeroContacts, observerOptions);
  document.querySelectorAll('.contact-us, .footer').forEach((section) => {
    observer.observe(section);
  });
}

hiddenSocials();








document.addEventListener('DOMContentLoaded', () => {
  // Находим все элементы с классом 'btn' и атрибутом 'href', который начинается с '#'
  const buttons = document.querySelectorAll('a.btn[href^="#"]');

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки

      // Получаем ID целевого элемента
      const targetID = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        // Добавляем класс 'scroll-to-anchor' для отслеживания перехода к якорю
        document.body.classList.add('scroll-to-anchor');

        // Плавно скроллим к целевому элементу
        gsap.to(window, {
          scrollTo: targetElement,
          duration: 0.1,
          ease: "power1.out",
          onComplete: () => {
            // Убираем класс 'scroll-to-anchor' через 1 секунду
            setTimeout(() => {
              document.body.classList.remove('scroll-to-anchor');
            }, 6000); // 1000 миллисекунд = 1 секунда
          }
        });
      }
    });
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


// window.addEventListener('load', () => {
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      requestAnimationFrame(() => {
        setTimeout(() => {

          entry.target.classList.add('visible');
        }, 150);
      });

      if (entry.target.classList.contains('sums__item')) {
        let valueDisplay = entry.target.querySelector(".sums__item-sum");
        sumsVal(valueDisplay);
      }

      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
});

const elements = document.querySelectorAll('.section-head, .services__main, .sums__item, .animation-section');
elements.forEach(block => {
  observer.observe(block);
});