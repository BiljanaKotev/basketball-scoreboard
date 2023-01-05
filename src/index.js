"use strict";

let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let starterPoints = 0;

// Functions for adding points to the home scoreboard

function addOnePointHome() {
  homePoints.innerText = starterPoints += 1;
}

function addTwoPointHome() {
  homePoints.innerText = starterPoints += 2;
}

function addThreePointHome() {
  homePoints.innerText = starterPoints += 3;
}

// Functions for adding points to the guest scoreboard

function addOnePointGuest() {
  guestPoints.innerText = starterPoints += 1;
}

function addTwoPointGuest() {
  guestPoints.innerText = starterPoints += 2;
}

function addThreePointGuest() {
  guestPoints.innerText = starterPoints += 3;
}
