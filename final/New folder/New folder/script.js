function a() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#mainmy"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#mai" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#mainmy", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#mainmy").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
a();

// gsap.to(".bru1", {
//   duration: 1.5,
//   width: "20vw"
// });

// gsap.to(".bru2", {
//   duration: 1.5,
//   height: "20vw"
// });

// gsap.to(".bru3", {
//   height: '20vw', // Adjust according to your requirements
//   duration: 1.5
// });

// gsap.to(".bru4", {
//   width: "20vw",
//   duration: 1.5
// });


var tl = gsap.timeline();

gsap.from("#beanlt", {
  left: "-4%",
  opacity: "0",
  delay: 4,
});
gsap.from("#beanlm1", {
  left: "18%",
  opacity: "0",
  delay: 4.1,
});
gsap.from("#beanlm2", {
  left: "0%",
  opacity: "0",
  delay: 4.2,
});

gsap.from("#beanlb", {
  left: "12%",
  opacity: "0",
  delay: 4.3,
});
gsap.from("#beanr1", {
  right: "12%",
  opacity: "0",
  delay: 4,
});
gsap.from("#beanr2", {
  right: "0%",
  opacity: "0",
  delay: 4.1,
});
gsap.from("#beanr3", {
  right: "20%",
  opacity: "0",
  delay: 4.2,
});
gsap.from("#beanr4", {
  right: "26%",
  opacity: "0",
  delay: 4.3,
});
gsap.from("#beanr5", {
  right: "8%",
  opacity: "0",
  delay: 4.4,
});

tl.from("#coffeel1", {
  top: "120%",
  delay: 4,
});

tl.from("#coffeel2", {
  top: "120%",
});

tl.from("#coffeel3", {
  top: "120%",
});

tl.from("#coffeel4", {
  top: "120%",
});

tl.from("#loadjar", {
  height: "0",
  duration: 2,
});

tl.from("#backjar1", {
  scale: 0,
});

tl.from("#backjar2", {
  scale: 0,
});

tl.from("#backjar3", {
  scale: 0,
});

tl.to("#backjar1", {
  scale: 0,
});

tl.to("#backjar2", {
  scale: 6,
  zindex: 9,
  duration: 1.2,
});

tl.to("#loadjar", {
  top: "130%",
  duration: 1,
});

tl.from("#headtext", {
  left: "-30%",
  duration: 1,
});

tl.from("#side1", {
  right: "-40%",
});

tl.from("#sidebeans", {
  right: "-40%",
});

tl.from("#coffeecup", {
  right: "-40%",
});

tl.to("#nav", {
  width: "70%",
});

tl.to("#nav img", {
  scale: 1,
});

gsap.from("#bean1", {
  left: "-3%",
  opacity: "0",
  delay: 13,
});

gsap.from("#bean2", {
  left: "16%",
  opacity: "0",
  delay: 13.2,
});

gsap.from("#bean3", {
  left: "52%",
  opacity: "0",
  delay: 13.4,
});

gsap.from("#bean4", {
  right: "-1%",
  opacity: "0",
  delay: 13.6,
});

var menu = document.querySelector("#cmenui");
var testing = document.querySelector("#closei");
var menupage = document.querySelector("#menupage");

menu.addEventListener("click", function () {
  menupage.style.left = `${0}%`;
});

testing.addEventListener("click", function () {
  menupage.style.left = `${100}%`;
});

gsap.to("#limg img", {
  opacity: 1,

  stagger: 0.3,
});

gsap.to("#limg img", {
  opacity: 0,
  delay: 0.33,
  stagger: 0.3,
});

gsap.to("#loader", {
  top: -900,
  delay: 2.8,
});

// our story js

var swiper = new Swiper(".swiper", {
  effect: "cube",
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

// explore new products js

var mySwiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



document.querySelectorAll('.button').forEach(button => {
  let div = document.createElement('div'),
      letters = button.textContent.trim().split('');

  function elements(letter, index, array) {
      let element = document.createElement('span'),
          part = (index >= array.length / 2) ? -1 : 1,
          position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
          move = position / (array.length / 2),
          rotate = 1 - move;

      element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
      element.style.setProperty('--move', move);
      element.style.setProperty('--rotate', rotate);
      element.style.setProperty('--part', part);

      div.appendChild(element);
  }

  letters.forEach(elements);

  button.innerHTML = div.outerHTML;

  button.addEventListener('mouseenter', e => {
      if (!button.classList.contains('out')) {
          button.classList.add('in');
      }
  });

  button.addEventListener('mouseleave', e => {
      if (button.classList.contains('in')) {
          button.classList.add('out');
          setTimeout(() => button.classList.remove('in', 'out'), 950);
      }
  });
});





// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Create a scroll animation
gsap.to(".bru1", {
  scrollTrigger: {
    trigger: ".main3", // The element that triggers the animation
    scroller: "#mainmy", // Define the custom scroller if you're using one
    start: "20% center", // When the top of the trigger element hits the center of the viewport
    end: "20% 30%", // When the bottom of the trigger element hits the top of the viewport
    scrub: true, // Smoothly animate the progress
    markers: true, // Show start and end markers (for debugging)
  },
  width: "20vw", // Animate the width to 20vw
});
// Register ScrollTrigger with GSAP


// Create a scroll animation for .bru2
gsap.to(".bru2", {
  scrollTrigger: {
    trigger: ".main3", // The element that triggers the animation
    scroller: "#mainmy", // Define the custom scroller if you're using one
    start: "20% center", // When the top of the trigger element hits the center of the viewport
    end: "20% 30%", // When the bottom of the trigger element hits the top of the viewport
    scrub: true, // Smoothly animate the progress
    markers: true, // Show start and end markers (for debugging)
  },
  height: "20vw", // Animate the height to 20vw
});
// Register ScrollTrigger with GSAP


// Create a scroll animation for .bru2
gsap.to(".bru3", {
  scrollTrigger: {
    trigger: ".main3", // The element that triggers the animation
    scroller: "#mainmy", // Define the custom scroller if you're using one
    start: "20% center", // When the top of the trigger element hits the center of the viewport
    end: "20% 30%", // When the bottom of the trigger element hits the top of the viewport
    scrub: true, // Smoothly animate the progress
    markers: true, // Show start and end markers (for debugging)
  },
  height: "20vw", // Animate the height to 20vw
});


// Create a scroll animation for .bru2
gsap.to(".bru4", {
  scrollTrigger: {
    trigger: ".main3", // The element that triggers the animation
    scroller: "#mainmy", // Define the custom scroller if you're using one
    start: "20% center", // When the top of the trigger element hits the center of the viewport
    end: "20% 30%", // When the bottom of the trigger element hits the top of the viewport
    scrub: true, // Smoothly animate the progress
    markers: true, // Show start and end markers (for debugging)
  },
  width: "20vw", // Animate the height to 20vw
});
gsap.to(".cups", {
  scrollTrigger: {
    trigger: ".main3", // The element that triggers the animation
    scroller: "#mainmy", // Define the custom scroller if you're using one
    start: "20% center", // When the top of the trigger element hits the center of the viewport
    end: "20% 30%", // When the bottom of the trigger element hits the top of the viewport
    scrub: true, // Smoothly animate the progress
    markers:false, // Show start and end markers (for debugging)
  },
  scale:"1", // Animate the height to 20vw
});

gsap.to(".heart", {
  scrollTrigger: {
    trigger: ".main3", // The element that triggers the animation
    scroller: "#mainmy", // Define the custom scroller if you're using one
    start: "60% center", // When the top of the trigger element hits the center of the viewport
    end: "70% 30%", // When the bottom of the trigger element hits the top of the viewport
    scrub: true, // Smoothly animate the progress
    markers: true, // Show start and end markers (for debugging)
  },
  y:"-50px", // Animate the height to
  scale:"1", // Animate the height to 20vw
  duration:"1"
});




//   duration: 1.5,
//   width: "20vw"
// });

// gsap.to(".bru2", {
//   duration: 1.5,
//   height: "20vw"
// });

// gsap.to(".bru3", {
//   height: '20vw', // Adjust according to your requirements
//   duration: 1.5
// });

// gsap.to(".bru4", {
//   width: "20vw",
//   duration: 1.5
// });