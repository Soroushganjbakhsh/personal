const btn = document.getElementById("search-btn");
const countryInp = document.getElementById("country-inp");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const countryName = countryInp.value.trim();
    const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            if (data.length > 0) {
                const countryData = data[0];
                result.innerHTML = `
                    <img src="${countryData.flags.svg}" class="flag-img">
                    <h2>${countryData.name.common}</h2>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Capital:</h4>
                            <span>${countryData.capital[0]}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Continent:</h4>
                            <span>${countryData.continents[0]}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Population:</h4>
                            <span>${countryData.population}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Currency:</h4>
                            <span>${countryData.currencies[Object.keys(countryData.currencies)[0]].name} - ${Object.keys(countryData.currencies)[0]}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Common Languages:</h4>
                            <span>${Object.values(countryData.languages).toString().split(",").join(", ")}</span>
                        </div>
                    </div>
                `;
            } else {
                result.innerHTML = `<h3>No data found for "${countryName}"</h3>`;
            }
        })
        .catch((error) => {
            console.error(error);
            result.innerHTML = `<h3>Error fetching data for "${countryName}"</h3>`;
        });
});