setInterval(function() {
//Los Angeles
let losAngeles= document.querySelector("#los-angeles");
let losAngelesDate = losAngeles.querySelector(".date");
let losAngelesTime = losAngeles.querySelector(".time");
let losAngelesTimeElement= moment().tz("America/Los_Angeles");

losAngelesDate.innerHTML = losAngelesTimeElement.format("MMMM Do YYYY");
losAngelesTime.innerHTML = losAngelesTimeElement.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function() {
//Rome
let rome= document.querySelector("#rome");
let romeDate = rome.querySelector(".date");
let romeTime = rome.querySelector(".time");
let romeTimeElement= moment().tz("Europe/Rome");

romeDate.innerHTML = romeTimeElement.format("MMMM Do YYYY");
romeTime.innerHTML = romeTimeElement.format("h:mm:ss [<small>]A[</small>]");
}, 1000);