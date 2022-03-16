const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountris(data))
}
loadCountries();

const displayCountris = countries => {
    // for(const country of countries){
    //     console.log(country.name);
    // }
    const countryDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countryDiv.appendChild(div);
        console.log(country)


        const button = document.createElement('button');
        button.classList.add('button');
        div.appendChild(button);
        button.innerText = 'Details'

        div.style.backgroundColor = 'lightpink';
        div.style.padding = '10px';
        div.style.margin = '10px';
        div.style.borderRadius = '10px';
        div.style.border = '2px solid red';

        countryDiv.style.display = 'grid';
        countryDiv.style.gridTemplateColumns = 'repeat(3, 1fr)';

        button.style.borderRadius = '5px';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.style.padding = '5px';
        button.style.float = 'right';
    })
}
