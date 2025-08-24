export const animationConfig = {
  pageTransition: {
    duration: 0.8,
    ease: 'easeOut',
  },
  stagger: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { y: 30, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
  },
  scroll: {
    logoScroll: {
      duration: 25,
      gap: 48, // 3rem in pixels
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleOnHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const rotateOnHover = {
  hover: {
    rotate: 5,
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};
