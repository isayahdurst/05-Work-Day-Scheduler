"use strict";

const DateTime = luxon.DateTime;

const now = DateTime.now();
const year = now.year;
const month = now.month;
const day = now.day;

const currentDateField = $("#currentDay");

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

const currentDay = `${monthNames.get(month)} ${day}, ${year}`;
console.log(currentDay);
currentDateField.text = currentDay;
