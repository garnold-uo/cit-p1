/*
    CIT 281 Project 1
    Name: Garrett Arnold
*/

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

console.log(day);