const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83276,us&units=imperial&APPID=65d62601bd4e69b85181051b8969c9b2";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    var temp = jsObject.main.temp;
    var desc = jsObject.weather[0].main;
    var wind = jsObject.wind.speed;
    document.getElementById('temp').textContent = temp.toFixed(1);
    document.getElementById('desc').textContent = desc;
    document.getElementById('speed').textContent = wind;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    if (temp <= 50 && wind >= 3) {
        var chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        document.getElementById("chill").textContent = chill.toFixed(1);

    }
  });

  const apiURL2 ="api.openweathermap.org/data/2.5/forecast?q=FishHaven&appid=26c38b01d282609ea001da898c42e8a9";
fetch(apiURL2)
  .then((response) => response.json())
  .then((forecast) => {
    for (const item in forecast.list) {
      if (forecast.list[item].dt_txt.includes("18:00")) {
        console.log(forecast.list[item]);
        var date = new Date(forecast.list[item].dt_txt);
        var day = date.toString();
        day = day.slice(0,3)

        let card = document.createElement('section');
        let dd = document.createElement('p');
        dd.textContent = day;
        card.appendChild(dd);

        let img = document.createElement('img')
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast.list[item].weather[0].icon + '.png';
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', forecast.list[item].weather[0].main);
        card.appendChild(img);

        let ttemp = document.createElement('span');
        ttemp.textContent = forecast.list[item].main.temp.toFixed(1) + " °F";
        card.appendChild(ttemp);
        document.querySelector('div.forecast').appendChild(card);        
      }

    }
  });