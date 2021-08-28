var timeBlock = $(".container");
var saveBtn = $(".saveBtn");
var eventInfo = $(".event-info");

setInterval(liveClock, 1000);
setTextBoxColor();
loadText();

function liveClock() {
  const current = moment();
  $("#currentDay").text(current.format("dddd, MMM Do, YYYY, h:mm:ss a"));
}
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

saveBtn.on("click", function () {
  const input = $($(this).prev()[0]).val();
  console.log(input);
  localStorage.setItem(this.id, input);
});
