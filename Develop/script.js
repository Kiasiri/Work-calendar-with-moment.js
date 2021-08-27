var timeBlock = $(".container");
var saveBtn = $(".saveBtn");
var eventInfo = $(".event-info");
function liveClock() {
  const current = moment();
  $("#currentDay").text(current.format("dddd, MMM Do, YYYY, h:mm:ss a"));
}
setInterval(liveClock, 1000);

saveBtn.on("click", function () {
  eventInfo.input;
  localStorage.setItem("event-info", input);
});
