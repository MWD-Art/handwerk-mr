import Lenis from 'lenis';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

// SHORTCUT CARDS START
const cardwrappers = document.querySelectorAll('.cards');
const cards = document.querySelectorAll('.card');

cardwrappers.forEach((cardwrapper) => {
  cardwrapper.addEventListener('mousemove', function ($event) {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      const x = $event.clientX - rect.left;
      const y = $event.clientY - rect.top;

      card.style.setProperty('--xPos', `${x}px`);
      card.style.setProperty('--yPos', `${y}px`);
    });
  });
});
// SHORTCUT CARDS END