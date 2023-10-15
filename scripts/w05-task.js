/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
      temples.forEach((temple) => {

      h3Element = document.createElement("h3");
      h3Element.innerHTML = `${temple.templeName}`;
      h3Element.style.textAlign = "center";
      h3Element.style.position = "relative";
      h3Element.style.bottom = "10px";

      const articleElement = document.createElement("article");
      articleElement.style.backgroundColor = "#gray";
      articleElement.style.padding = "25px";
      articleElement.style.margin = "15px";
      
      const imageElement = document.createElement("img");

      imageElement.src =`${temple.imageUrl}`;
      imageElement.alt = `${temple.location}`;
      imageElement.width = "315";
      imageElement.height = "200";
      imageElement.style.boxShadow = "0px 0px 10px 1px";

      templeElement.appendChild(articleElement).appendChild(h3Element);
      templeElement.appendChild(articleElement).appendChild(imageElement);
      templeElement.appendChild(articleElement);
      
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  ).then((response) => response.json());
  templeList = response;
  displayTemples(templeList);
};

/* reset Function */

const reset = () => {
  templeElement.replaceChildren();

};
 
function filterByLocation(item) {
    if  (item.location.includes("Utah")) {
    return true;
  }
  return false;
}

/* sortBy Function */
const sortby = (temples) => {
  

  const filter = document.getElementById("sortBy").value;
  const sortByElement = document.getElementById("sortBy");
  sortByElement.style.position = "absolute;";

  switch (filter) {
    case "utah":
        reset();

      const temples_in_Utah = temples.filter((temple) =>
               temple.location.toLowerCase().includes("Utah".toLowerCase())
          );
           
      displayTemples(temples_in_Utah);
      break;

    case "notutah":
      reset();
      const temples_not_in_Utah = temples.filter((temple) =>
               !temple.location.toLowerCase().includes("Utah".toLowerCase())
          );
      
      displayTemples(temples_not_in_Utah);
      break;

    case "older":
      reset();
      const temples_older_1950 = temples.filter((temple) =>
            parseInt(temple.dedicated) <  1950

          );
      console.log(temples_older_1950);          
      displayTemples(temples_older_1950);
      break;

    case "all":
      reset();
      getTemples();
      displayTemples(filter);
      break;
  }

};

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortby(templeList);
});
