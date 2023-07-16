var clockArray = document.querySelectorAll(".andyclock");
clockArray.forEach(function(clock) {
    if (clock.hasAttribute('clock-offset')) {
        clock.clockOffset = Number(clock.getAttribute('clock-offset'));
    }
});
var radius = 100,
    hoursLineFrom = 30,
    hoursLineTo = 45;

function initClock() {
  clockArray.forEach(function(clock) {
    for (var i = 1; i <= 12; i++) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", "line");
      el.setAttribute("x1", radius);
      el.setAttribute("y1", hoursLineFrom);
      el.setAttribute("x2", radius);
      el.setAttribute("y2", hoursLineTo);
      el.setAttribute(
        "transform",
        `rotate( ${(i * 360) / 12} ${radius} ${radius})`
      );
      el.setAttribute("style", "stroke: #ffffff;");
      clock.appendChild(el);
    }
  });
}

function updateClock() {
  var date = new Date();
  var hands = {
    second: (360 * date.getSeconds()) / 60,
    minute: (360 * date.getMinutes()) / 60,
    hour: (360 * date.getHours()) / 12 + date.getMinutes() / 2
  };
  var origHour = date.getHours();

  clockArray.forEach(function(clock) {
    if (clock.clockOffset) {
      date.setHours(origHour+clock.clockOffset);
      hands.hour = (360 * date.getHours()) / 12 + date.getMinutes() / 2;
    }

    for (hand in hands) {
      var els = clock.querySelectorAll(`.${hand}`);
      if (!clock[hand]) {
        clock[hand] = els;
      }
      clock[hand].forEach(function(el) {
        el.setAttribute(
          "transform",
          `rotate( ${hands[hand]} ${radius} ${radius})`
        );
      });
    }
  });
}

// initClock();
updateClock();
setInterval(function() {
  updateClock();
}, 1000);


var svg = `<svg class="andyclock" width="${radius*2}" height="${radius*2}" clock-offset="0">
    <circle id="body" style="stroke: #FFF; stroke-width: 12px; fill:#0490E2" cx="${radius}" cy="${radius}" r="80"></circle>
    <g id="hour-lines" style="stroke: #ffffff;">
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 30 ${radius} ${radius})" ></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 60 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 90 ${radius} ${radius})" ></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 120 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 150 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 180 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 210 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 240 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 270 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 300 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 330 ${radius} ${radius})"></line>
        <line x1="${radius}" y1="30" x2="${radius}" y2="45" transform="rotate( 360 ${radius} ${radius})"></line>   
    </g>
    <line x1="${radius}" y1="${radius}" x2="${radius}" y2="55" transform="rotate( 39.5 ${radius} ${radius})" style="stroke-width: 5px; stroke: #e8e8fd;" class="hour"></line>
    <line x1="${radius}" y1="${radius}" x2="${radius}" y2="40" transform="rotate( 114 ${radius} ${radius})" style="stroke-width: 6px; stroke: #e8e8fa;" class="minute"></line>
    <line x1="${radius}" y1="${radius}" x2="${radius}" y2="30" transform="rotate( 318 ${radius} ${radius})" style="stroke-width: 2px; stroke: #ffffff;" class="second"></line>
    <circle class="screw" style="fill:#0490E2; stroke: #efefef; stroke-width: 2px;" cx="${radius}" cy="${radius}" r="4"></circle>
</svg>`