let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");


let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeElement = ParisElement.querySelector(".time");

function updateTimeDate(){

let losAngelesCurrent = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesCurrent.format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML = losAngelesCurrent.format("h:mm:ss [<small>]A[</small>]");

let ParisCurrent = moment().tz("Europe/Paris");
ParisDateElement.innerHTML = ParisCurrent.format("Do MMMM YYYY");
ParisTimeElement.innerHTML = ParisCurrent.format("h:mm:ss [<small>]A[</small>]");


}