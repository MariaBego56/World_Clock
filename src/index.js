let losAngeles = document.querySelector("#los-angeles");
let losAngelesDate = losAngeles.querySelector(".date");
let losAngelesTime = losAngeles.querySelector(".time");


let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeElement = ParisElement.querySelector(".time");

function updateTimeDate(){

let losAngelesCurrent = moment().tz("America/Los_Angeles");
losAngelesDate.innerHTML = losAngelesCurrent.format("Do MMMM YYYY");
losAngelesTime.innerHTML = losAngelesCurrent.format("h:mm:ss") + "<small>" + losAngelesCurrent.format("A") + "</small>";

let ParisCurrent = moment().tz("Europe/Paris");
ParisDateElement.innerHTML = ParisCurrent.format("Do MMMM YYYY");
ParisTimeElement.innerHTML = ParisCurrent.format("h:mm:ss [<small>]A[</small>]");


}

alert("hello");