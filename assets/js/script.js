"use strict";

const DateTime = luxon.DateTime;

// const now = DateTime.now();
// const year = now.year;
// const month = now.month;
// const day = now.day;
// const hour = now.hour;

const monthNames = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);

const clock = {
  updateClock() {
    setInterval(() => {
      const now = DateTime.now();
      this.year = now.year;
      this.month = now.month;
      this.day = now.day;
      this.hour = now.hour;
      this.currentDay = `${monthNames.get(this.month)} ${this.day}, ${this.year}`;
      setBackgroundColors();
      $('#currentDay').text(clock.currentDay);
      }, 1000);
  },
  init() {
    this.day = DateTime.now().day;
    this.month = DateTime.now().month;
    this.year = DateTime.now().year;
    this.hour = DateTime.now().hour;
  }

}

const saveTask = function (task) {
  
}

const setBackgroundColors = function () {
  const times = [$('#9am'), $('#10am'), $('#11am'),$('#12pm'),$('#1pm'),$('#2pm'),$('#3pm'),$('#4pm'), $('#5pm')];
  for (let time of times) {
    let hourEl = Number(time.attr('data-time'));
    if (hourEl < clock.hour) {
      time.addClass('bg-light');
    } else if (hourEl === clock.hour) {
      time.addClass('bg-danger');
    } else if (hourEl > clock.hour) {
      time.addClass('bg-success');
    }
  } 
}

clock.init();
setBackgroundColors();
clock.updateClock();

$('button').on('click', function (event) {
  console.log(event);
  console.log(event.target)
})

