/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Yazmin Cuevas";
let currentYear = "";
//*
const profilePicture = "images/yazz.jpg";


/* Step 3 - Element Variables */ 

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = "2023";
//*
const imageElement = document.querySelector("img");

imageElement.setAttribute('src', profilePicture) ;
imageElement.setAttribute('alt', `profile placeholder of ${fullName} `);






/* Step 5 - Array */

let favoriteFoods = ["Sushi", "Pozole", "Gorditas", "Ribs", "Omelet"];

foodElement.innerHTML = `${favoriteFoods}`;

let new_favorite = "Pasta";
favoriteFoods.push(new_favorite);
foodElement.innerHTML +=`<br>${favoriteFoods}`;


favoriteFoods.pop();
foodElement.innerHTML +=`<br>${favoriteFoods}`;


favoriteFoods.splice(0, 1);
foodElement.innerHTML +=`<br>${favoriteFoods}`;





