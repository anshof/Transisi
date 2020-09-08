var New = document.getElementById("NEW");

var arr = [
  "<div class='checkthree'>" +
    "<div class='check3'>" +
    "<img src='./assets/tick.png' alt='png' />" +
    "<span>Fixing icons with transparant background</span>" +
    "</div>" +
    "<p>In Review</p>" +
    "</div>",
  "<div class='check'>" +
    "<div class='check1'>" +
    "<img src='./assets/tick.png' alt='png' />" +
    "<span>Fixing icons with transparant background</span>" +
    "</div>" +
    "<p>Approved</p>" +
    "</div>",
  "<div class='checktwo'>" +
    "<div class='check2'>" +
    "<img src='./assets/tick.png' alt='png' />" +
    "<span>Fixing icons with transparant background</span>" +
    "</div>" +
    "<p>In Progress</p>" +
    "</div>",
  "<div class='checkfour'>" +
    "<div class='check4'>" +
    "<img src='./assets/tick.png' alt='png' />" +
    "<span>Fixing icons with transparant background</span>" +
    "</div>" +
    "<p>Waiting</p>" +
    "</div>",
];

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

function ADD() {
  New.innerHTML = arr[Math.floor(random(1, 5)) - 1];
}
