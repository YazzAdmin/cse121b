/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let = myProfile = {
    name: "Yazmin Cuevas",
    photo: "images/yazz.jpg",
    favoriteFoods: ["Sushi",
      "Gorditas",
      "Pozole",
      "Ribs",
      "Omelete",
    ],
    hobbies: ["Listening to Personal development audios",
       "Watching Korean series",
       "Dancing",
       "Listening to Music",
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Uruapana, Michoacan",
        length: "8 Years"
    },
    {
        place: "San Jose, California",
        length: "8 Years"
    },
    {
        place: "Tijuana, Baja California",
        length: "16 Years"
    }
);



/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
/* Name */

/* Photo with attributes */
const imageElement = document.querySelector("img");

imageElement.setAttribute('src', myProfile.photo) ;
imageElement.setAttribute('alt', `profile placeholder of ${myProfile.name} `);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach ((food) => {
  let li = document.createElement ("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach ((hobbies) => {
  let li =document.createElement("li");
  li.textContent = hobbies;
  document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;

  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});

