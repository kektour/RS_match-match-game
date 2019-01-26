export default class Stopwatch {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    this.state = '00:00:00';
    this.timeout = null;

    this._callbacks = [];

    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  tick() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }

    this.update();
  }

  start() {
    this.timeout = setInterval(this.tick, 1000);
  }

  stop() {
    clearInterval(this.timeout);
  }

  reset() {
    this.state = '00:00:00';
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  update() {
    this.state =
      (this.hours ? (this.hours > 9 ? this.hours : '0' + this.hours) : '00') +
      ':' +
      (this.minutes ? (this.minutes > 9 ? this.minutes : '0' + this.minutes) : '00') +
      ':' +
      (this.seconds > 9 ? this.seconds : '0' + this.seconds);
    this._callbacks.forEach(callback => callback());
  }

  subscribe(callback) {
    this._callbacks.push(callback);
  }

  unsubscribe() {
    this._callbacks = [];
  }
}
