const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const names = "Preston, Fish Haven, Soda Springs"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
  for (let i = 0; i < towns.length; i++ ) {
    if (names.includes(towns[i].name)) {
      let card = document.createElement('section');
      let texts = document.createElement('div')
      let h3 = document.createElement('h3');
      let motto = document.createElement('h4');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let img = document.createElement('img');

      
      h3.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      population.textContent = "Population: " + towns[i].currentPopulation;
      founded.textContent = "Year Founded: " + towns[i].yearFounded;
      rain.textContent= "Rainfall: " + towns[i].averageRainfall;


      img.setAttribute('src', "images/" + towns[i].photo);
      img.setAttribute('alt', h3);

      card.appendChild(texts)
      texts.appendChild(h3);
      texts.appendChild(motto);
      texts.appendChild(founded);
      texts.appendChild(population);
      texts.appendChild(rain);

      card.appendChild(img)
      document.querySelector('div.cards').appendChild(card);}
    }
  
  });