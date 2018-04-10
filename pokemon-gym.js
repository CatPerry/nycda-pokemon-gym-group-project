
let listHTML;
let guzzlord = document.getElementById("guzzlord")
let blaziken = document.getElementById("blaziken")
let talonflame = document.getElementById("talonflame")




    for (i = 0; i < cataclysm.all.length; i++) {
        let div = document.createElement("div")
        // name
        let listHTML = document.createElement("ul")
        listHTML.innerHTML =` <li> ${cataclysm.all[i].name} </li>`;
        console.log(cataclysm.all[i].name)
            + ` <li>${cataclysm.all[i].hp}: ${cataclysm.all[i].hpstat} </li>`;
            + ` <li>${cataclysm.all[i].attack}: ${cataclysm.all[i].attackstat} </li>`;
            + ` <li>Abilities: ${cataclysm.all[i].abilitiesname} </li>`;
            + ` <li>${cataclysm.all[i].defensestat}: ${cataclysm.all[i].defense} </li>`;
        console.log(listHTML)

        div.appendChild(listHTML)
        section.appendChild(div)
        document.body.appendChild(section)
    }

    

})


// Code below utilized from materialize for both the carousel and the the Floating
// Action Button.


var elem = document.querySelectorAll('.carousel');
console.log(elem)
var instance = M.Carousel.init(elem);

  var instance = M.FloatingActionButton.getInstance(elem);
