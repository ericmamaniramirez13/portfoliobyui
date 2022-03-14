const ham = document.querySelector(".ham");
const navigation = document.querySelector(".nav-menu");
ham.addEventListener("click", () => {navigation.classList.toggle("show")});

const today_date = new Date();
console.log(today_date);

weekday = Intl.DateTimeFormat('en-US', {weekday: "long"}).format(today_date);
day = today_date.getDate();
month = Intl.DateTimeFormat('en-US', {month: "long"}).format(today_date);
year = today_date.getFullYear();
const date = document.querySelector(".date");
date.textContent = `${weekday}, ${day} ${month} ${year}`

let lastTime = document.lastModified;
let time = document.querySelector("#modified");
time.textContent += `Last Updated: ${lastTime}`;
time.style.color = "white";

const message = document.querySelector("#message");
let today = today_date.getDay();
if (today == 1 || today == 2) {
    message.style.display = "block";
    message.textContent += `Today is: ${weekday}`;
}
else{
    message.style.display = "block";
    message.textContent = `Today is: ${weekday}`;
}

/*var temp= -5;
var wSpeed= 15;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("wind").innerHTML= windChill;*/

//Discover Script
