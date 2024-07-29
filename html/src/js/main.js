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




function alsoOfferScroll() {
  const slider = document.querySelector('.also-offer__cards');

  if (!slider) {
    return null;
  }

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
    const walk = (x - startX) * 0.1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });

  // Function to scroll the slider to the end smoothly
  function smoothScrollToEnd() {
    slider.scrollTo({
      left: slider.scrollWidth - slider.clientWidth,
      behavior: 'smooth'
    });
  }

  // Create an intersection observer to detect when the slider becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Wait for 0.5 seconds before scrolling
        setTimeout(smoothScrollToEnd, 700);
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  observer.observe(slider);
}

if (window.matchMedia("(min-width: 767px)").matches) {
  alsoOfferScroll();
}



// //////////////////////////////////////// animations /////////////////////////////////////////////



// class Sticker {
//   constructor(options) {
//     this.elements = document.querySelectorAll('.sticky_w');
//     this.texts = document.querySelectorAll('.sticky_t');

//     this.elements.forEach((el, index) => {
//       el.innert = el.getAttribute("data-sticky") || 1;
//       el.selfInnert = el.innert * 1.5; // Adjust multiplier to make the button move more

//       el.text = this.texts[index];
//       el.text.style.pointerEvents = "none";

//       el.offsetY = 0;
//       el.offsetX = 0;
//       el.translateX = 0;
//       el.translateY = 0;

//       el.btnSize = {
//         width: el.offsetWidth,
//         height: el.offsetHeight
//       };

//       el.addEventListener("mousemove", (e) => {
//         e = e || window.event;
//         el.offsetX = e.offsetX;
//         el.offsetY = e.offsetY;
//         el.translateX = (-el.btnSize.width / 2) + el.offsetX;
//         el.translateY = (-el.btnSize.height / 2) + el.offsetY;

//         gsap.to(el.text, {
//           duration: options.inertion,
//           x: ((-el.btnSize.width / 2) + el.offsetX) / el.innert,
//           y: ((-el.btnSize.height / 2) + el.offsetY) / el.innert,
//           ease: "power1.out"
//         });

//         gsap.to(el, {
//           duration: options.inertion,
//           x: el.translateX / 4, // Adjust to make the element move significantly
//           y: el.translateY / 4, // Adjust to make the element move significantly
//           ease: "power1.out"
//         });
//       });

//       el.addEventListener("mouseenter", (e) => {
//         el.classList.add('hovered');
//         el.offsetX = e.offsetX;
//         el.offsetY = e.offsetY;

//         gsap.to(el.text, {
//           duration: 0.1,
//           x: ((-el.btnSize.width / 2) + el.offsetX) / el.innert,
//           y: ((-el.btnSize.height / 2) + el.offsetY) / el.innert,
//           ease: "power1.out"
//         });

//         gsap.to(el, {
//           duration: 0.1,
//           x: el.translateX / 4, // Adjust to make the element move significantly
//           y: el.translateY / 4, // Adjust to make the element move significantly
//           ease: "power1.out"
//         });
//       });

//       el.addEventListener("mouseleave", () => {
//         el.classList.remove('hovered');

//         gsap.to(el.text, {
//           duration: options.spring,
//           x: 0,
//           y: 0,
//           ease: "power1.out"
//         });

//         gsap.to(el, {
//           duration: options.spring,
//           x: 0,
//           y: 0,
//           ease: "power1.out"
//         });
//       });
//     });
//   }
// }

// new Sticker({
//   inertion: 0.4, // Change this for cool effects :) //  0.3 - 1
//   spring: 0.5    // And change this                   //  0.3 - 1
// });





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

