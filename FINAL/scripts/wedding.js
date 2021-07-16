/*fetch("data/wedding.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);
   const packages = jsonObject['packages'];
   for(var i = 0; i < packages.length; i++)
   {   
       let table = document.createElement('table');
       let tr = document.createElement("tr");
       tr.textContent = ` Music: ${packages[1].music} CHAIRS: ${packages[i].chairs}`
       table.appendChild(tr);
       
       let th = document.createElement("th");
       th.textContent = `${packages[i].name}`
       tr.appendChild(th);
       
       document.querySelector('div.wedding').appendChild(table);
   } 

  });*/
  