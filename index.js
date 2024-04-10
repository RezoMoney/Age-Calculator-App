"use strict";

function callIt(inputtext, inputfield, color, bordercolor) {
  if (!$(inputtext).val()) {
    $(inputfield).html("This field is required.");
    $(color).css("color", "hsl(0, 100%, 67%)");
    $(bordercolor).css("border-color", "hsl(0, 100%, 67%)");
  } else if ($(inputtext).val()) {
    $(inputfield).html("");
    $(color).css("color", "hsl(0, 1%, 44%)");
    $(bordercolor).css("border-color", "hsl(0, 0%, 86%)");
  }
}

function valid(message, inputfield, color, bordercolor) {
  $(inputfield).html(message);
  $(color).css("color", "hsl(0, 100%, 67%)");
  $(bordercolor).css("border-color", "hsl(0, 100%, 67%)");
}

$(".svg").click(function () {
  const dayValue = Number($("#input-day:text").val());
  const monthValue = Number($("#input-month:text").val());
  const yearValue = Number($("#input-year:text").val());

  callIt("#input-day:text", ".indiv-d", ".alpha", "#input-day");
  callIt("#input-month:text", ".indiv-m", ".beta", "#input-month");
  callIt("#input-year:text", ".indiv-y", ".third", "#input-year");

  function daysInMonthFunction(year, month) {
    return new Date(year, month, 0).getDate();
  }
  // OR const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  // const yearInput = Number($("#input-year:text").val());
  // const monthInput = Number($("#input-month:text").val());
  const daysInMonth = daysInMonthFunction(yearValue, monthValue);

  if (dayValue > daysInMonth) {
    valid("Must be a valid day.", ".indiv-d", ".alpha", "#input-day");
  } else if (dayValue === 0) {
    valid("This field is required.", ".indiv-d", ".alpha", "#input-day");
  }

  if (monthValue > 12) {
    valid("Must be a valid month.", ".indiv-m", ".beta", "#input-month");
  } else if (monthValue === 0) {
    valid("This field is required.", ".indiv-m", ".beta", "#input-month");
  }

  const d = new Date();
  const fullYear = d.getFullYear();

  if (yearValue > fullYear) {
    valid(
      "Must be in the past or present.",
      ".indiv-y",
      ".third",
      "#input-year"
    );
  } else if (yearValue === 0) {
    valid("This field is required.", ".indiv-y", ".third", "#input-year");
  }

  function dateInputs(month, day, year) {
    const inputDate = new Date(`"${month}/${day}/${year}"`);
    const presentDate = new Date();
    const diffInTime = Math.abs(presentDate - inputDate);
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    const floorDiffDays = Math.floor(diffInDays / 366);
    const ageInMonths = Math.ceil((diffInDays / 366 - floorDiffDays) * 12);
    const ageInDays = presentDate.getDate() - day;

    $(".reveal-years").html(floorDiffDays);
    $(".reveal-months").html(ageInMonths);
    $(".reveal-days").html(ageInDays);

    console.log(monthValue, dayValue, yearValue);
  }
  dateInputs(monthValue, dayValue, yearValue);
  if (monthValue === 0 || dayValue === 0) {
    $(".reveal-years").html("--");
    $(".reveal-months").html("--");
    $(".reveal-days").html("--");
  } else if (
    $(".indiv-d").html() === "Must be a valid day." ||
    $(".indiv-m").html() === "Must be a valid day."
  ) {
    $(".reveal-years").html("--");
    $(".reveal-months").html("--");
    $(".reveal-days").html("--");
  }
});

function myFunction() {
  var today = new Date();
  var month = today.getMonth();
  console.log(month);
}

myFunction();
