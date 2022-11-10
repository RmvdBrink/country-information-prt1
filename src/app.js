import axios from 'axios';
console.log('Hallo daar!');


//make variable hardcoded (als je hem vaker wil gebruiken buiten de scope zetten)
const URI = 'https://restcountries.com/v2/all'

// create a variable to store a li item
const list = document.getElementById( "country-name" );
//create a async function
    async function fetchData() {
        try {
// get the data from the database whit axios en use always a await statement with this function.
            const respons = await axios.get(URI)
            console.log(respons);

// sort the data for low to high population
            respons.data.sort((a, b) => {
                return a.population - b.population;
                // sort made a new array whit sort data
            })
            //map through the data whit map
                respons.data.map((country) => {
//create a list item , class en class name (the value) en fill it with the data
//from country.name from the api data

                const itemName = document.createElement("li");
                itemName.setAttribute("class", "country-name");
                itemName.textContent = country.name;
//create a norther list item for the population use template literal to add extra text.
// fill it whit data from endpoint country.population
                const itemPop = document.createElement("li")
                    itemPop.setAttribute("class", "country-pop");
                    itemPop.textContent = `Has a population of ${country.population} people`
//create a img element with a class + name (value) for img use two times
//setAttribute because its no textContent
                const itemImg = document.createElement("img");
                    itemImg.setAttribute("class", "country-img")
                    itemImg.setAttribute("src", country.flag)

                    // const itemRegion = document.createElement("li");
                    // itemRegion.setAttribute("class", "country-region");
                    // itemRegion.textContent = country.region
////!!!!!!!!!!!!!!let op je doe ze pas plaatsen met appendchild die staat onder het switch statement!!!!!!!!!!!!!!!

// make a switch statement use country.region data from the api in the
// case value (de case waarde achter switch deze waarde gaat die vergelijken maken)
// hier hebben we itemName.setAttribute nog een keer gebruikt voor een id te maken.
// dit is om styling mee te geven in dit geval kleur.


                    switch (country.region) {
                        case "Africa":
                            itemName.setAttribute('id', 'africa');
                            break;
                        case "Americas":
                            itemName.setAttribute('id', 'americas');
                            break;
                        case "Europe":
                            itemName.setAttribute('id', 'europe');
                            break;
                        case "Asia":
                            itemName.setAttribute('id', 'asia');
                            break;
                        case "Oceania":
                            itemName.setAttribute('id', 'oceania');
                            break;
                        case "Polar":
                            itemName.setAttribute('id', 'polar');
                            break;
                        default:
                            itemName.setAttribute('id', 'unknown')
                    }
// place the  made attributes in your dome to present them in de browser
                    list.appendChild(itemImg);
                    list.appendChild(itemName);
                    list.appendChild(itemPop);
                    // list.appendChild(itemRegion)
                })

// catch the errors and make a warning massage display on screen with errorMassage.textContent =
        } catch (err) {
            console.error(err);
            const errorMassage = document.getElementById("error-warning")

            if (err.response.status === 404) {
                errorMassage.textContent = "page not found | 404"
            }
            if (err.response.status === 500) {
                errorMassage.textContent = "Internal Server Error | 500"
        }   else {
            errorMassage.textContent = "page not found"
            }
        }
        }
// call in function (roep de functie aan)
fetchData()

//
// Africa: blauw
// Americas: groen
// Asia: rood
// Europe: geel
// Oceania: paars

function getRegionClass(currentRegion) {
    switch (currentRegion) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';
    }
}


//
// async function fetchData() {
//     try {
//         const result = await axios.get(URI)
//         console.log(result.data)
//
//         const landName = document.createElement("li");
//                 item.setAttribute("class", "country-name");
//                 item.textContent = country.name;
// //
//                 list.appendChild(item);
//     }catch(err) {
//         console.error(err)
//     }
// }
// fetchData()



// async function fetchData() {
//     try {
//         const result = await axios.get(URI)
//         // console.log(result.data)
//
//         result.data.map((country) => {
//             return country
//             for (country.name of result.data)
//             const listOfNames = document.createDocumentFragment()
//                 const item = document.createElement("li");
//                 item.setAttribute("class", "country-name");
//                 item.textContent = country.name;
//
//                 li.appendChild(item);
//             })
//
//     }catch(err) {
//         console.error(err)
//     }
// }
//
// fetchData();




//
// async function fetchCountries() {
//     try {
//         const result = await axios.get('https://restcountries.com/v2/all');
//         const countries = result.data;
//
//         // sorteer de huidige data array op de populatie-property van elk land
//         // countries.sort((a, b) => {
//         //     return a.population - b.population;
//         });
//
//         // geef de gesorteerde data array mee aan de functie die de elementen op de pagina injecteert
//         // createListItems(countries);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// fetchCountries();
