/* Final program: Programming Tasks */

/* Declare and initialize global variables */
const serieElement = document.querySelector("#series");
let serieList = [];

/* async displaySeries Function */
const displaySeries = (series) => {
      series.forEach((serie) => {

      h3Element = document.createElement("h3");
      h3Element.innerHTML = `${serie.serieName}`;
     

      const articleElement = document.createElement("article");
      const imageElement = document.createElement("img");

      imageElement.src =`${series.imageUrl}`;
      imageElement.alt = `${serie}`;

      serieElement.appendChild(articleElement).appendChild(h3Element);
      serieElement.appendChild(articleElement).appendChild(imageElement);
      serieElement.appendChild(articleElement);
      
  });
};

/* async getSeries Function using fetch()*/
const getSeries = async () => {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/65388cd80574da7622bd5605"
  ).then((response) => response.json());
  serieList = response;
  displaySeries(serieList);
};



/* reset Function */

const reset = () => {
  serieElement.replaceChildren();

};
 
function filterByType(item) {
    if  (item.includes("Romance")) {
    return true;
  }
  return false;
}

/* sortBy Function */
const sortby = (series) => {
  

  const filter = document.getElementById("sortBy").value;
  const sortByElement = document.getElementById("sortBy");
  sortByElement.style.position = "absolute;";

  switch (filter) {
    case "romance":
        reset();

      const series_in_Romance = series.filter((serie) =>
               serie.type.toLowerCase().includes("Romance".toLowerCase())
          );
           
      displaySeries(series_in_Romance);
      break;

    case "action":
      reset();
      const series_action = series.filter((serie) =>
               !serie.type.toLowerCase().includes("Action".toLowerCase())
          );
      
      displaySeries(series_action);
      break;

    case "sad":
      reset();
      const series_sad = series.filter((serie) =>
               !serie.type.toLowerCase().includes("Sad".toLowerCase())
          );
      console.log(series_sad);          
      displaySeries(series_sad);
      break;

    case "all":
      reset();
      getSeries();
      displaySeries(filter);
      break;
  }

};

getSeries();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortby(serieList);
});

