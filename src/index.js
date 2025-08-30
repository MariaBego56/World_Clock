let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement(".date");
let losAngelesTimeElement = losAngelesElement(".time");
let LosAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = moment().format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML = moment().format("h:mn:ss [<small>]A[</samall>]");