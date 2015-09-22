import "../scss/app.scss";
import mouseEventsStream from "./mouse-stream";

const element = document.getElementById('draggable');

const isTouching = (el, x = 0, y = 0) => {
  const rect = el.getBoundingClientRect();
  const matchH = x > rect.left && x < rect.left + rect.width;
  const matchV = y > rect.top && y < rect.top + rect.height;

  return !!(matchH && matchV);
};

const moveElement = (el, x = 0, y = 0) => {
  const rect = el.getBoundingClientRect();
  el.style.top = `${y - rect.top / 2}.px`;
  el.style.left = `${x - rect.left / 2}.px`;
};

const subscribe = (pos) => {
  if (isTouching(element, pos.x, pos.y)) {
    moveElement(element, pos.x, pos.y);
    console.log('Is over!');
  }
};

mouseEventsStream(subscribe);
