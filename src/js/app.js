import '../scss/app.scss';
import { getMouseMoveObservable } from './mouse-stream';

const draggableElement = document.getElementById('h');

const move = (element, x, y) => {
  const bounds = element.getBoundingClientRect();
  const newX = Math.floor(bounds.width / 2);
  const newY = Math.floor(bounds.height / 2);

  element.style.left = `${x - newX}px`;
  element.style.top = `${y - newY}px`;

  return element.getBoundingClientRect();
};

const hugeDrag = ([event, element]) => {
  const { clientX: x, clientY: y } = event;
  move(element, x, y);
};

// TODO: Don't take the center of the element. Take it from the selected point.
// TODO: look at Dragula for reference. See http://bevacqua.github.io/dragula/
getMouseMoveObservable(draggableElement)
  .subscribe(hugeDrag);
