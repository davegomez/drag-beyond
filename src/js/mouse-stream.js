import Rx from 'rx';

const mouseDownStream = Rx.Observable.fromEvent(window, 'mousedown');
const mouseMoveStream = Rx.Observable.fromEvent(window, 'mousemove');
const mouseUpStream = Rx.Observable.fromEvent(window, 'mouseup');

export const mouseMoveBetweenStream = mouseDownStream.flatMap(() => mouseMoveStream.takeUntil(mouseUpStream));
