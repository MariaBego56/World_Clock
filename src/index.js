let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement(".date");
let losAngelesTimeElement = losAngelesElement(".time");
let LosAngelesCurrent = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesCurrent.moment().format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML = losAngelesCurrent.moment().format("h:mn:ss [<small>]A[</samall>]");



let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement(".date");
let ParisTimeElement = ParisElement(".time");
let ParisCurrent = moment().tz("Europe/Paris");


ParisDateElement.innerHTML = ParisCurrent.moment().format("Do MMMM YYYY");
ParisTimeElement.innerHTML = ParisCurrent.moment().format("h:mn:ss [<small>]A[</samall>]");