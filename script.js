async function fetchApi() {
    const countriesAPI = 'https://restcountries.com/v2/all';
    return await fetch(countriesAPI)
        .then((response) => {
            return response.json()
        })
}
 
function showCountries(countries, continent) {
    const countries1 = countries.filter((country) => (country.region) == continent);
    const sortedCountries = countries1.sort((a, b) => {
        return b.population - a.population;
    })
    const limitedList = sortedCountries.slice(0,5);
    limitedList.map(country => {
        let wrapper = document.querySelector(".wrapper");
        let row = document.createElement("div");
        row.className = "row";
        wrapper.appendChild(row);
        let name = document.createElement("p");
        row.appendChild(name);
        name.innerText = country.name;
        let region = document.createElement("p");
        row.appendChild(region);
        region.innerText = country.region;
        let area = document.createElement("p");
        row.appendChild(area);
        area.innerText = country.area;
        let population = document.createElement("p");
        row.appendChild(population);
        population.innerText = country.population;
    });
};
 
fetchApi().then(response => {
    showCountries(response, "Asia");
    showCountries(response, "Europe");
    showCountries(response, "Americas");
    showCountries(response, "Africa");
    showCountries(response, "Polar");
    showCountries(response, "Australia");
});
 
