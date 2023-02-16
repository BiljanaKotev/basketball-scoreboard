const homePoints = document.getElementById("home-points");
const guestPoints = document.getElementById("guest-points");
let homeStartingPoints = 0;
let guestStartingPoints = 0;
const onePointHome = document.getElementById("one-point-home");
const twoPointHome = document.getElementById("two-point-home");
const threePointHome = document.getElementById("three-point-home");
const onePointGuest = document.getElementById("one-point-guest");
const twoPointGuest = document.getElementById("two-point-guest");
const threePointGuest = document.getElementById("three-point-guest");

// Function for adding points to the scoreboards

function addPoints(points, team) {
  if (team === "home") {
    homePoints.innerHTML = homeStartingPoints += points;
  } else if (team === "guest") {
    guestPoints.innerHTML = guestStartingPoints += points;
  }
}

// Function for adding points to the scoreboards

onePointHome.addEventListener("click", function () {
  addPoints(1, "home");
});

twoPointHome.addEventListener("click", function () {
  addPoints(2, "home");
});

threePointHome.addEventListener("click", function () {
  addPoints(3, "home");
});

onePointGuest.addEventListener("click", function () {
  addPoints(1, "guest");
});

twoPointGuest.addEventListener("click", function () {
  addPoints(2, "guest");
});

threePointGuest.addEventListener("click", function () {
  addPoints(3, "guest");
});
