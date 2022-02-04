const ham = document.querySelector(".ham");
const navigation = document.querySelector(".navigation");
ham.addEventListener("click", () => {navigation.classList.toggle("responsive")});

let today_date = new Date();
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