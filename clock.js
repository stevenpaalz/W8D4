class Clock {
  constructor() {
    this.date = new Date()
    this.hours = this.date.getHours()
    this.minutes = this.date.getMinutes()
    this.seconds = this.date.getSeconds()
    this.printTime()
    debugger
    setInterval.call(this, this.printTime, 1000)
  }

  printTime() {
    this._tick()
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)

  }

  _tick () {
    if (this.seconds < 59) {
      this.seconds++;
    } else {
      this.seconds = 0;
      if (this.minutes < 59) {
        this.minutes++;
      } else {
        this.minutes = 0;
        if (this.hours < 23) {
          this.hours++;
        } else {
          this.hours = 0;
        }
      }
    }
    // return this.printTime()
  }

}

c = new Clock()