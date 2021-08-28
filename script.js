var timeBlock = $(".container");
var saveBtn = $(".saveBtn");
var eventInfo = $(".event-info");

setInterval(liveClock, 1000);
setTextBoxColor();
loadText();
//live clock() is a live updating clock using momentjs and set interval
function liveClock() {
  const current = moment();
  $("#currentDay").text(current.format("dddd, MMM Do, YYYY, h:mm:ss a"));
}
//setTextBoxColor takes current time and checks it against count which is 9-12 and 1-5
//it canacatanates am or pm appropriatly it loops through the am hours 12noon and the pm hours seperately
//making relative countText values and then use that to get a handle by id to apply future,present/past classes.
//
function setTextBoxColor() {
  let count;
  let i;
  let countText;
  let time = new Date().getHours();
  for (i = 9; i <= 12; i++) {
    if (i === 12) {
      count = i.toString() + "pm";
    } else {
      count = i.toString() + "am";
    }
    countText = count + "Text";

    if (i < time) {
      $("#" + countText).addClass("past");
    } else if (i === time) {
      $("#" + countText).addClass("present");
    } else {
      $("#" + countText).addClass("future");
    }
  }

  for (i = 1; i <= 5; i++) {
    count = i.toString() + "pm";
    countText = count + "Text";

    if (time > 12) {
      time = time - 12;
    }
    if (i < time) {
      $("#" + countText).addClass("past");
    } else if (i === time) {
      $("#" + countText).addClass("present");
    } else {
      $("#" + countText).addClass("future");
    }
  }
}
//loadText() gets from localstorage getting the key by concatinating am or pm to i in a loop
//12pm is done individually
//this is then put in sibling textarea of each save button
function loadText() {
  let i;
  let count;
  let textBoxValue;
  for (i = 9; i <= 11; i++) {
    count = i.toString() + "am";
    textBoxValue = localStorage.getItem(count);
    $("#" + count + "Text").val(textBoxValue);
  }

  textBoxValue = localStorage.getItem("12pm");
  $("#12pmText").val(textBoxValue);

  for (i = 1; i <= 5; i++) {
    count = i.toString() + "pm";
    textBoxValue = localStorage.getItem(count);
    $("#" + count + "Text").val(textBoxValue);
  }
}
//saves the content of the textarea next to each button into its own key value pair in local sotrage
saveBtn.on("click", function () {
  const input = $($(this).prev()[0]).val();
  console.log(input);
  localStorage.setItem(this.id, input);
});
