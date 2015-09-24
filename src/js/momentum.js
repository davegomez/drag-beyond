const registry = {
  x: [],
  y: []
};

const diff = (a, b) => Math.abs(a - b);
const velocity = xs => Math.floor(xs.reduce((a, b) => a + diff(a, b), 0) / xs.length);

export function register(event) {
  const {clientX: x, clientY: y} = event;

  registry.x.push(x);
  registry.y.push(y);

  return registry;
}

export function generate() {
  const events = {
    clientX: [],
    clientY: []
  };

  let s = velocity(registry.x);
  let x = registry.x[registry.x.length - 1];
  let y = registry.y[registry.y.length - 1];

  while (s >= 0) {
    events.clientX.push(x = x + s);
    events.clientY.push(y = y + s);
    s = s * 0.8
  }

  return events;
}
