// Cart animation configurations
export const CART_ANIMATIONS = {
  overlay: {
    enter: 'transition-opacity duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  panel: {
    enter: 'transform transition-transform duration-500 ease-in-out',
    enterFrom: 'translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transform transition-transform duration-500 ease-in-out',
    leaveFrom: 'translate-x-0',
    leaveTo: 'translate-x-full',
  },
  item: {
    enter: 'transition-all duration-300',
    enterFrom: 'opacity-0 translate-x-4',
    enterTo: 'opacity-100 translate-x-0',
    leave: 'transition-all duration-300',
    leaveFrom: 'opacity-100 translate-x-0',
    leaveTo: 'opacity-0 translate-x-4',
  },
};