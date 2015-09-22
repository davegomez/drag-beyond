import '../scss/app.scss';
import mouseEventsStream from './mouse-stream';

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

// Camilo Working here...
// Check: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/reduce.md
function accumulateEvents(acc, event) {
  if (event.type === 'mousedown') {
    console.log('Start moving...');
    return {};
  }

  if (event.type === 'mousemove') {
    acc.moving || (acc.moving = []);
    acc.moving.push(event);
    console.log('Mooooooving...', acc.moving);
    return acc;
  }

  if (event.type === 'mouseup') {
    console.log('Fun ends here my friends...');
  }
}

mouseEventsStream
  .reduce(accumulateEvents, {})
  .subscribe();
