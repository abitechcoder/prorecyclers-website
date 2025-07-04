export const gridContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Time between each child's animation start
      delayChildren: 0.2,   // Delay before the first child starts animating
    },
  },
};

export const gridItemVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Optional: Add a subtle lift from below
  },
  show: {
    opacity: 1,
    y: 0, // Reset y position if used in 'hidden'
  },
};