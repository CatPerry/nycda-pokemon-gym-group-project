

console.log(cataclysm.all)

catPoke(function (cataclysm) {
    console.log(cataclysm)
    console.log(cataclysm.all)
    createCard(guzzlordp, cataclysm.all[0])
    createCard(talonflamep, cataclysm.all[1])
    createCard(blazikenp, cataclysm.all[2])
})
//had a neat FOR LOOP but was not able to use it for each pokemon because I am appending to separate places. 
//This approach is with help from Jonathan

let guzzlordp = document.getElementById("#guzzlord")
let talonflamep = document.getElementById("#talonflame")
let blazikenp = document.getElementById("#blaziken")

function createCard(whereToAppend, pokemon) {

    console.log(pokemon);
    let listItem = document.createElement("ul")
    let name = document.createElement("li")
    let attack = document.createElement("li")
    let hp = document.createElement("li")
    let defense = document.createElement("li")
    let abilities = document.createElement("li")

    name.innerHTML = "Name:" + pokemon.name
    attack.innerHTML = "Attack:" + pokemon.attackstat
    hp.innerHTML = "HP:" + pokemon.hpstat
    defense.innerHTML = "Defense:" + pokemon.defense
    abilities.innerHTML = "Abilities" + pokemon.abilitiesname

    listItem.appendChild(name)
    listItem.appendChild(attack)
    listItem.appendChild(hp)
    listItem.appendChild(defense)
    listItem.appendChild(abilities)
    whereToAppend.appendChild(listItem)
    }



chrisPoke(function (krisceddell) {
    console.log(krisceddell)
    console.log(krisceddell.all)
    createCard(aerodactylp, krisceddell.all[0])
    createCard(gyaradosp, krisceddell.all[1])
    createCard(tyranitarp, krisceddell.all[2])
})
//had a neat FOR LOOP but was not able to use it for each pokemon because I am appending to separate places. 
//This approach is with help from Jonathan

let aerodactylp = document.getElementById("aerodactylp")
let gyaradosp = document.getElementById("gyaradosp")
let tyranitarp = document.getElementById("tyranitarp")

function createCard(whereToAppend, pokemonC) {

    console.log(pokemonC);
    let listItem = document.createElement("ul")
    let name = document.createElement("li")
    let attack = document.createElement("li")
    let hp = document.createElement("li")
    let defense = document.createElement("li")
    let abilities = document.createElement("li")

    name.innerHTML = "Name:" + pokemonC.name
    attack.innerHTML = "Attack:" + pokemonC.attackstat
    hp.innerHTML = "HP:" + pokemonC.hpstat
    defense.innerHTML = "Defense:" + pokemonC.defense
    abilities.innerHTML = "Abilities" + pokemonC.abilitiesname

    listItem.appendChild(name)
    listItem.appendChild(attack)
    listItem.appendChild(hp)
    listItem.appendChild(defense)
    listItem.appendChild(abilities)
    whereToAppend.appendChild(listItem)
}




// Code below utilized from materialize for both the carousel and the the Floating
// Action Button.


var elem = document.querySelectorAll('.carousel');
console.log(elem)
var instance = M.Carousel.init(elem);

