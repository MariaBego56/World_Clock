let losAngeles = document.querySelector("#los-angeles");
let losAngelesDate = losAngeles.querySelector(".date");
let losAngelesTime = losAngeles.querySelector(".time");

let losAngelesCurrent = moment().tz("America/Los_Angeles");
losAngelesDate.innerHTML = losAngelesCurrent.format("Do MMMM YYYY");
losAngelesTime.innerHTML = losAngelesCurrent.format("h:mm:ss") + "<small>" + losAngelesCurrent.format("A") + "</small>";

let paris = document.querySelector("#paris");
let parisDate = paris.querySelector(".date");
let parisTime = paris.querySelector(".time");


let parisCurrent = moment().tz("Europe/Paris");
parisDate.innerHTML = parisCurrent.format("Do MMMM YYYY");
parisTime.innerHTML = parisCurrent.format("h:mm:ss [<small>]A[</small>]");
