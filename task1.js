let countries = [];

function addCountry(countryName, population, language, isIsland) {
  countries.push({ countryName, population, language, isIsland });
}
addCountry("England", 40000000, "English", true);
addCountry("NewYork", 50000000, "English", false);
addCountry("Israel", 8000000, "Hebrew", false);

let lang = prompt("enter language:");
let popu = +prompt("enter max population:");
let isIsland = confirm("enter isIsland:");

let res = countries.find(
  (country) =>
    country["language"] == lang &&
    country["isIsland"] == isIsland &&
    country["population"] < popu
);
if (res) console.log(res.countryName + " is for you");
else console.log("no country for you");
