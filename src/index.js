function updateTime() {

let losAngeles = document.querySelector("#los-angeles");
if (losAngeles){

let losAngelesDate = losAngeles.querySelector(".date");
let losAngelesTime = losAngeles.querySelector(".time");
let losAngelesCurrent = moment().tz("America/Los_Angeles");

losAngelesDate.innerHTML = losAngelesCurrent.format("Do MMMM YYYY");
losAngelesTime.innerHTML = `${losAngelesCurrent.format("h:mm:ss")}<small> ${losAngelesCurrent.format("A") }</small>`;
}

let paris = document.querySelector("#paris");
if (paris){
let parisDate = paris.querySelector(".date");
let parisTime = paris.querySelector(".time");
let parisCurrent = moment().tz("Europe/Paris");

parisDate.innerHTML = parisCurrent.format("Do MMMM YYYY");
parisTime.innerHTML = `${parisCurrent.format("h:mm:ss")}<small> ${parisCurrent.format("A") }</small>`;

}
}

function updateCity(event) {
/* event.target.value */
if (cityTimeZone === "current"){
  cityTimeZone = moment.tz.guess();
}
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let cities = document.querySelector("#cities");
cities.innerHTML = `
<div class="city-time">
        <div class="city-date">
          <div class="city">
            <h2>${cityName}</h2>
          </div>
          <div class="date">${cityTime.format("Do MMMM YYYY")} </div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")} </small>
        </div>
      </div> `;

}

updateTime ();
setInterval (updateTime, 1000);

let citiesSelect = document.querySelector("#city-dropdown");

citiesSelect. addEventListener("change", updateCity);
