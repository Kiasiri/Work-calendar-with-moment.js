var timeBlock = $(".container");
function liveClock() {
  const current = moment();
  $("#currentDay").text(current.format("dddd, MMM Do, YYYY, h:mm:ss a"));
}
setInterval(liveClock, 1000);
