let date = new Date();
let day = String(date.getDate() + 1).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();
let hour = String(date.getHours() + 1).padStart(2, "0");
let minute = String(date.getMinutes() + 1).padStart(2, "0");
let second = String(date.getSeconds() + 1).padStart(2, "0");

let fullDate = `${month}.${day}.${year}. ${hour}.${minute}.${second}`;
console.log(fullDate);

document.getElementById("currentdate").textContent = fullDate;