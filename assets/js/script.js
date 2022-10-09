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

const dataToIDConverter = {
  9: "9am",
  10: "10am",
  11: "11am",
  12: "12pm",
  13: "1pm",
  14: "2pm",
  15: "3pm",
  16: "4pm",
  17: "5pm",
};

const times = [
  $("#9am"),
  $("#10am"),
  $("#11am"),
  $("#12pm"),
  $("#1pm"),
  $("#2pm"),
  $("#3pm"),
  $("#4pm"),
  $("#5pm"),
];

const clock = {
  updateClock() {
    setInterval(() => {
      const now = DateTime.now();
      this.year = now.year;
      this.month = now.month;
      this.day = now.day;
      this.hour = now.hour;
      this.currentDay = `${monthNames.get(this.month)} ${this.day}, ${
        this.year
      }`;
      setBackgroundColors(times);
      $("#currentDay").text(clock.currentDay);
    }, 1000);
  },
  init() {
    this.day = DateTime.now().day;
    this.month = DateTime.now().month;
    this.year = DateTime.now().year;
    this.hour = DateTime.now().hour;
  },
};

const setBackgroundColors = function (times) {
  for (let time of times) {
    let hourEl = Number(time.attr("data-time"));
    if (hourEl < clock.hour) {
      time.addClass("bg-light");
    } else if (hourEl === clock.hour) {
      time.addClass("bg-danger");
    } else if (hourEl > clock.hour) {
      time.addClass("bg-success");
    }
  }
};

const saveTask = function (taskNumber) {
  const task = $(`#${dataToIDConverter[taskNumber]}`).val();
  localStorage.setItem(taskNumber, task);
  console.log(localStorage);
};

const loadTasks = function () {
  const indexTable = [];
  for (let i = 0; i < localStorage.length; i++) {
    indexTable.push(localStorage.key(i));
  }
  for (let time of times) {
    if (indexTable.includes(time.attr("data-time"))) {
      time.val(localStorage.getItem(time.attr("data-time")));
    }
  }
};

clock.init();
setBackgroundColors(times);
clock.updateClock();

$("button").on("click", function (event) {
  const taskNumber = $(event.target).attr("data-time");
  saveTask(taskNumber);
});

loadTasks();
