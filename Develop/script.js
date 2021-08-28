var timeBlock = $(".container");
var saveBtn = $(".saveBtn");
var eventInfo = $(".event-info");

setInterval(liveClock, 1000);
loadText();

function liveClock() {
  const current = moment();
  $("#currentDay").text(current.format("dddd, MMM Do, YYYY, h:mm:ss a"));
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
