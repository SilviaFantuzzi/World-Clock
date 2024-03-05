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


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone=== "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>`;

    

}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

