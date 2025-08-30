let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement(".date");
let losAngelesTimeElement = losAngelesElement(".time");
let LosAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement = moment().format("Do MMMM YYYY");
losAngelesTimeElement = moment().format("h:mn:ss [<small>]A[</samall>]");