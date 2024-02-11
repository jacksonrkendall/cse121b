/* W05: Programming Tasks */

/* Declare and initialize global variables */
/*Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.*/
const templesElement = document.getElementById('temples');
/*Declare a global empty array variable to store a list of temples named templeList.*/
let templeList = [];
/* async displayTemples Function */
/*Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.*/
const displayTemples = (temples) => {
    /*Process each temple in the temple array using a forEach method and do the following for each temple item:*/
    temples.forEach(temple => {
        /*Create an HTML <article> element (createElement).*/
        const article = document.createElement('article');
        /*Create an HTML <h3> element and add the temple's templeName property to this new element.*/
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        /*Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.*/
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
         /*Append the <h3> element and the <img> element to the <article> element as children. (appendChild)*/
        article.appendChild(h3);
        article.appendChild(img);
        /*Append the <article> element to the global templesElement variable declared in Step 2*/
        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
/*Create another function expression called getTemples. Make it an async anonymous, arrow function*/
const getTemples = async () => {
/*In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.*/
const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
/*Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.*/
templeList = await response.json();
/*The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).*/
displayTemples(templeList);
};
getTemples();
console.log(templeList);
/* reset Function */
const reset = () => {
templesElement.innerHTML = ' ';
}
/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
};
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
getTemples();