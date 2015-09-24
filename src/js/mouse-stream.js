import Rx from 'rx';

/**
 *
 * @param {HTMLElement} domEl Element to set for
 * @returns {*}
 */
export const getMouseMoveObservable = function(domEl) {
  const mouseDownStream = Rx.Observable.fromEvent(domEl, 'mousedown');
  const mouseMoveStream = Rx.Observable.fromEvent(window, 'mousemove');
  const mouseUpStream = Rx.Observable.fromEvent(window, 'mouseup');

  const mouseMoveBetweenStream = mouseDownStream
    .flatMap(() => mouseMoveStream.takeUntil(mouseUpStream));

  // Check http://rxmarbles.com/#combineLatest
  return Rx.Observable.combineLatest(mouseMoveBetweenStream, Rx.Observable.just(domEl));
};
