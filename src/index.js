let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement(".date");
let losAngelesTimeElement = losAngelesElement(".time");
let LosAngelesCurrent = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesCurrent.moment().format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML = losAngelesCurrent.LosAngelesCurrentmoment().format("h:mn:ss [<small>]A[</samall>]");