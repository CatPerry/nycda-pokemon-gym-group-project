// Code below has been structured to be very similar to code done in class exercise,
// original source and credit goes to Orlando Caraballo.
let chrisPokeArr = []

class KrisCeddell {
  constructor() {
    this.all = []
  }
  all() {
    return this.all;
  }
  add(multiplepokemon) {
    this.all.push(multiplepokemon)
  }
}

class NewPokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
    this.name = name
  }
}

let ul = document.querySelector("p")
let multiplepokemon = new KrisCeddell()


// First axios to get the data from the first pokemon I chose from the API.
axios.get("https://pokeapi.co/api/v2/pokemon/142/")
  .then((response) => {
    let pokedata = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defense = document.createElement("li")
    let abilities = document.createElement("li")

    let abilitiesData = response.data.abilities
    function abilitiesList(abilitiesData) {
      let abilitiesArray = [];
      for (let i = 0; i <abilitiesData.length; i++) {
        abilitiesArray.push(abilitiesData[i].ability.name)
      }
      abilitiesArray.toString()
      return abilitiesArray
    }

    let aerodactyl = new NewPokemon(
      pokedata.name,
      pokedata.stats[5]['base_stat'],
      pokedata.stats[4]['base_stat'],
      pokedata.stats[3]['base_stat'],
      abilitiesList(abilitiesData)
    )
      // abilities,
      // pokedata.abilities.forEach(ability => {
      //   abilities.push(abilities.ability.name)
      // }),


    // Code below has been structured to be very similar to code done in class exercise,
    // original source and credit goes to Orlando Caraballo.


    // multiplepokemon.all.push(aerodactyl)

    multiplepokemon.add(aerodactyl)
    chrisPokeArr.push(aerodactyl)
    name.innerHTML = "Name: " + aerodactyl.name
    hp.innerHTML = "HP: " + aerodactyl.hp
    attack.innerHTML = "Attack: " + aerodactyl.attack
    defense.innerHTML = "Defense: " + aerodactyl.defense
    abilities.innerHTML = "Abilities: " + aerodactyl.abilities

    aerodactylli.appendChild(name);
    aerodactylli.appendChild(hp)
    aerodactylli.appendChild(attack);
    aerodactylli.appendChild(defense)
    aerodactylli.appendChild(abilities);

    console.log(aerodactyl)
  // })
})
  .catch((error) => {
    console.log(error)
  })


// Second axios to get the data from the second pokemon I chose on the API.
axios.get("https://pokeapi.co/api/v2/pokemon/130/")
  .then((response) => {

    let pokedata = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defense = document.createElement("li")
    let abilities= document.createElement("li")

    let abilitiesData = response.data.abilities
    function abilitiesList(abilitiesData) {
      let abilitiesArray = [];
      for (let i = 0; i <abilitiesData.length; i++) {
        abilitiesArray.push(abilitiesData[i].ability.name)
      }
      abilitiesArray.toString()
      return abilitiesArray
    }

    // My original code here wasn't working, had help from my classmate Cat on our group project,
    // got the code to actually display the abilities!


    // let abilitiesData = response.data.abilities
    // function abilities(abilitiesData) {
    //   let abilities = [];
    //   for (let i = 0; i <abilitiesData.length; i++) {
    //     abilities.push(abilitiesData[i].ability.name)
    //   }
    //   abilities.toString()
    //   return abilities
    // }

    let gyarados = new NewPokemon(
      pokedata.name,
      pokedata.stats[5]['base_stat'],
      pokedata.stats[4]['base_stat'],
      pokedata.stats[3]['base_stat'],
      abilitiesList(abilitiesData)
      // abilities,
      // pokedata.abilities.forEach(ability => {
      //   abilities.push(ability.ability.name)
      // }),
    )

    // Code below has been structured to be very similar to code done in class exercise,
    // original source and credit goes to Orlando Caraballo.


    // multiplepokemon.all.push(gyarados)

    multiplepokemon.add(gyarados)
    chrisPokeArr.push(gyarados)
    name.innerHTML = "Name: " + gyarados.name
    hp.innerHTML = "HP: " + gyarados.hp
    attack.innerHTML = "Attack: " + gyarados.attack
    defense.innerHTML = "Defense: " + gyarados.defense
    abilities.innerHTML = "Abilities: " + gyarados.abilities

    gyaradosli.appendChild(name);
    gyaradosli.appendChild(hp)
    gyaradosli.appendChild(attack);
    gyaradosli.appendChild(defense)
    gyaradosli.appendChild(abilities);

    console.log(gyarados);
  })
  .catch((error) => {
    console.log(error)
  })


// Third and final axios to get the data from the third pokemon I chose on the API.
axios.get("https://pokeapi.co/api/v2/pokemon/248/")
  .then((response) => {

    let pokedata = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defense = document.createElement("li")
    let abilities =document.createElement("li")

    let abilitiesData = response.data.abilities
    function abilitiesList(abilitiesData) {
      let abilitiesArray = [];
      for (let i = 0; i <abilitiesData.length; i++) {
        abilitiesArray.push(abilitiesData[i].ability.name)
      }
      abilitiesArray.toString()
      return abilitiesArray
    }

    // My original code here wasn't working, had help from my classmate Cat on our group project,
    // got the code to actually display the abilities!




    // let abilitiesData = response.data.abilities
    // function abilities(abilitiesData) {
    //   let abilities = [];
    //   for (let i = 0; i <abilitiesData.length; i++) {
    //     abilities.push(abilitiesData[i].ability.name)
    //   }
    //   abilities.toString()
    //   return abilities
    // }


    let tyranitar = new NewPokemon(
      pokedata.name,
      pokedata.stats[5]['base_stat'],
      pokedata.stats[4]['base_stat'],
      pokedata.stats[3]['base_stat'],
      abilitiesList(abilitiesData)
      // abilities,
      // pokedata.abilities.forEach(ability => {
      //   abilities.push(ability.ability.name)
      // }),
    )

    // Code below has been structured to be very similar to code done in class exercise,
    // original source and credit goes to Orlando Caraballo.


    // multiplepokemon.all.push(tyranitar)

    multiplepokemon.add(tyranitar)
    chrisPokeArr.push(tyranitar)
    name.innerHTML = "Name: " + tyranitar.name
    hp.innerHTML = "HP: " + tyranitar.hp
    attack.innerHTML = "Attack: " + tyranitar.attack
    defense.innerHTML = "Defense: " + tyranitar.defense
    abilities.innerHTML = "Abilities: " + tyranitar.abilities

    tyranitarli.appendChild(name);
    tyranitarli.appendChild(hp)
    tyranitarli.appendChild(attack);
    tyranitarli.appendChild(defense)
    tyranitarli.appendChild(abilities);


    console.log(tyranitar);
  })
  .catch((error) => {
    console.log(error)
  })


// console.log(KrisCeddell);
