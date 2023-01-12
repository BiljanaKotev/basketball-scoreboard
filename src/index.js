"use strict";

const homePoints = document.getElementById("home-points");
const guestPoints = document.getElementById("guest-points");
let awayScore = 0;
let homeScore = 0;

// Functions for adding points to the home scoreboard

function addOnePointHome() {
  homePoints.innerText = homeScore += 1;
}

function addTwoPointHome() {
  homePoints.innerText = homeScore += 2;
}

function addThreePointHome() {
  homePoints.innerText = homeScore += 3;
}

// Functions for adding points to the guest scoreboard

function addOnePointGuest() {
  guestPoints.innerText = awayScore += 1;
}

function addTwoPointGuest() {
  guestPoints.innerText = awayScore += 2;
}

function addThreePointGuest() {
  guestPoints.innerText = awayScore += 3;
}
