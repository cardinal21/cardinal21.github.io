function ShowMenu() {
    var x = document.getElementById("menu");
  
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
  }


  fetch("data/temples.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);
   const temples = jsonObject['temples'];
  for (let i = 0; i < temples.length; i++){
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    h2.textContent = `${temples[i].name}`
    img.setAttribute('src',temples[i].imageurl);
    p.textContent = 
    
    `Phone number: ${temples[i].phone}\n
      Email: ${temples[i].email}\n
     Address:${temples[i].address1}\n
    ${temples[i].city}\n
    ${temples[i].state}\n
    ${temples[i].zip}\n
    Schedule:${temples[i].session_schedule}\n
    Status:${temples[i].temple_closure}\n
    Services:${temples[i].services}\n
    history:${temples[i].history}\n
    weather:${temples[i].weather}\n

    `

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(p);
    document.querySelector('div.cards').appendChild(card);
  }
});

