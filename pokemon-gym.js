<<<<<<< HEAD
<<<<<<< HEAD

let listHTML;
let guzzlord = document.getElementById("guzzlord")
let blaziken = document.getElementById("blaziken")
let talonflame = document.getElementById("talonflame")

catPoke(function(cataclysm) {
    console.log(cataclysm.all)

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

=======
let pokeAll = []
pokeAll.push(catPokeArr)
pokeAll.push(chrisPokeArr)

console.log(pokeAll)
=======

>>>>>>> 21b6aff14f16faf100e4ed2cb0fdd9b39da486c8

// Code below utilized from materialize for both the carousel and the the Floating
// Action Button.


var elem = document.querySelectorAll('.carousel');
console.log(elem)
var instance = M.Carousel.init(elem);

  var instance = M.FloatingActionButton.getInstance(elem);


>>>>>>> e79574b5a9ea2dcd4367ae34a3416fc427e55b43
