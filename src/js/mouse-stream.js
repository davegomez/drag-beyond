import Rx from 'rx';

const getType = ({ type, clientX: x, clientY: y }) => ({ type, x, y });

const mouseDownStream = Rx.Observable.fromEvent(window, 'mousedown');
const mouseMoveStream = Rx.Observable.fromEvent(window, 'mousemove');
const mouseUpStream = Rx.Observable.fromEvent(window, 'mouseup');

const mouseMoveBetweenStream = mouseDownStream.flatMap(() => mouseMoveStream.takeUntil(mouseUpStream));

const dragDropStream = Rx.Observable
  .merge(mouseDownStream, mouseMoveBetweenStream, mouseUpStream)
  .map(getType);

export default dragDropStream.subscribe;
