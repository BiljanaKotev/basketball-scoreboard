"use strict";
// CONSIDER CHANGING HOMEPOINTS AND GUESTPOINTS FROM LET TO CONST TO PREVENT THEM FROM BEING CHANGED
let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let awayScore = 0;
let homeScore = 0;

// Functions for adding points to the home scoreboard

function addOnePointHome() {
  //NICE JOB KEEPING THIS CONCISE WITH 1 LINE OF CODE
  homePoints.innerText = awayScore += 1;
}

function addTwoPointHome() {
  //YOUR HOME AND AWAY VARIABLES APPEAR TO BE SWAPPED HERE
  //I WOULD EXPECT HOME POINTS TO DISPLAY AN INCREASED HOMESCORE, RATHER THAN AWAYSCORES
  homePoints.innerText = awayScore += 2;
}

function addThreePointHome() {
  homePoints.innerText = awayScore += 3;
}

// Functions for adding points to the guest scoreboard

function addOnePointGuest() {
  guestPoints.innerText = homeScore += 1;
}

function addTwoPointGuest() {
  guestPoints.innerText = homeScore += 2;
}

function addThreePointGuest() {
  guestPoints.innerText = homeScore += 3;
}
