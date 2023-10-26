/* Final program: Programming Tasks */

/* Declare and initialize global variables */
const serieElement = document.querySelector("#series");
let serieList = [];

/* async displaySeries Function */
const displaySeries = (series) => {
  
      series.forEach((serie) => {

      h3Element = document.createElement("h3");
      h3Element.innerHTML = `${serie.name}`;
      

      const articleElement = document.createElement("article");
      const imageElement = document.createElement("img");
      
      imageElement.src =`${serie.imageUrl}`;
      imageElement.alt = `${serie.name}`;
//      imageElement. = `${serie.type}`;
      imageElement.width = "200";
      imageElement.height = "200";
      imageElement.style.boxShadow = "0px 0px 10px 1px";


      serieElement.appendChild(articleElement).appendChild(h3Element);
      serieElement.appendChild(articleElement).appendChild(imageElement);
      serieElement.appendChild(articleElement);
      
  });
};

/* async getSeries Function using fetch()*/
const getSeries = async () => {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/6539d4b90574da7622bdc73f"
  ).then((response) => response.json());

  serieList = response.record.series;
  console.log(serieList);
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
  console.log(filter);
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
               serie.type.toLowerCase().includes("Action".toLowerCase())
          );
      
      displaySeries(series_action);
      break;

    case "sad":
      reset();
      const series_sad = series.filter((serie) =>
               serie.type.toLowerCase().includes("Sad".toLowerCase())
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

