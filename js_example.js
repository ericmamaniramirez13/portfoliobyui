/*function show(){
    alert("Hello ");
}

document.querySelector('.btn').addEventListener("click", show);*/

/*const bot = document.querySelector('.btn');*/
/*function show(){
    bot.classList.add("newstyle");
}
bot.addEventListener("click", show);*/

/*bot.addEventListener("click",() => {bot.classList.add("newstyle")})*/


const bot = document.getElementsByClassName("btn");
function show(){
    bot.classList.toggle("newstyle");
}
console.log(bot[2]);