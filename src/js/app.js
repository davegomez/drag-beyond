import '../scss/app.scss';
import { mouseMoveBetweenStream } from './mouse-stream';

const elem = document.getElementById('draggable');

const onHover = (bounds, x, y) => {
  const matchH = x > bounds.left && x < bounds.left + bounds.width;
  const matchV = y > bounds.top && y < bounds.top + bounds.height;

  return !!(matchH && matchV);
};

const move = (bounds, x, y) => {
  const newX = Math.floor(bounds.width / 2);
  const newY = Math.floor(bounds.height / 2);

  elem.style.left = `${x - newX}.px`;
  elem.style.top = `${y - newY}.px`;

  bounds = elem.getBoundingClientRect();

  return bounds;
};

const hugeDrag = event => {
  const x = event.clientX;
  const y = event.clientY;
  let rect = elem.getBoundingClientRect();

  if (onHover(rect, x, y)) {
    move(rect, x, y);
  }
};

mouseMoveBetweenStream
  .subscribe(hugeDrag);
