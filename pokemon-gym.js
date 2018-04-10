// get elements from the DOM
<<<<<<< HEAD
// let pokeAll = []
// pokeAll.push(catPokeArr)
// console.log(pokeAll[0])

// let ul = document.createElement("ul")
// let li = document.createElement("li")
// let textNode = document.createTextNode("water")
// li.appendChild(textNode)
// document.getElementById("cat-pokemon").appendChild(li)


let section = document.createElement("section")
let listHTML;

catPoke(function(cataclysm) {
    console.log(cataclysm.all)

//     let li1 = document.createElement("li")
//     let guzzlordPanel = document.getElementById("cat-pokemon")
//     let guzzlord = cataclysm.get("guzzlord")
//     li1.innerHTML = "<p>HP: " + cataclysm.hp + "</p> <p>Attack: " + cataclysm.attack +
//         "</p> <p>Defense: " + cataclysm.defense + "</p>"

//     li1.innerHTML += "<p>Abilities:"
//     guzzlord.abilities.forEach(item => {

//         li1.innerHTML += item + " / "
//     })
//     li1.innerHTML += "</p>"
//     guzzlordPanel.appendChild(li1)  
    
// })
    for (i = 0; i < cataclysm.all.length; i++) {
        let div = document.createElement("div")
        // name
        let listHTML = document.createElement("ul")
        listHTML.innerHTML =` <li> ${cataclysm.all[i].name} </li>`;
        console.log(cataclysm.all[i].name)
        // hp name and hpstat
        // listHTML += '<li>' + cataclysm.all[i].name + '</li>';
        // //defense name and defense stat
        // listHTML += '<li>' + cataclysm.all[i].name + '</li>';
        // //attack name and attack stat
        // listHTML += '<li>' + cataclysm.all[i].name + '</li>';
        // //abilities name as a string
        // listHTML += '<li>' + cataclysm.all[i].name + '</li>';
        // listHTML += '</ul>';
        console.log(listHTML)

        div.appendChild(listHTML)
        section.appendChild(div)
        document.body.appendChild(section)
    }

})
// printPokes(cataclysm)
// console.log(cataclysm)
// li.inner = "<p>DO this!!!</p>"
// li.innerHTML = catPoke(function (cataclysm) {
//     return "<p>DO this!!!</p>"
// })
// ul.appendChild(li)
// document.body.appendChild(ul)


// document.getElementsByClassName("all-pokemon").innerHTML = printPokes(pokeAll[0])
// li.innerHTML = printPokes(pokeAll)
// li.innerHTML = printPokes(pokeAll[0])
=======
let pokeAll = []
pokeAll.push(catPokeArr)
pokeAll.push(chrisPokeArr)

console.log(pokeAll)

function printPokes(pokeAll) {
    for (i = 0; i < pokeAll.length; i++) {
        console.log(pokeAll[i])
    }
}
printPokes()

let li = document.createElement("li")
let ul = document.createElement("ul")

li.innerHTML = pokeAll
    // + multiplepokemon.all + '<br>'

ul.appendChild(li)
document.body.appendChild(ul)

var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, options);

// console.log(multiplepokemon.all)
// console.log(cataclysm.all)

// WE'L USE THE AXIOS.all method rather than just the GET method, per Orlando's in-class hints
// axios.all([
//     axios.get()
// ])



//IN-CLASS EXAMPLES
// axios.get("https://raw.githubusercontent.com/orlandocaraballo/sei-march-5/master/17-working-with-ajax/json/person-1.json")
//     .then(response => {
//         // console.log(responses)
//         let data = response.data

//         // console.log(data)

//         let person = new Person(
//             data["first-name"],
//             data["last-name"],
//             data["age"],
//             data["gender"]
//         )

//         people.add(person)

//         callback(people)

//         // console.log(people.get("orlando"))
//     })
// }


// callAxios(function (people) {
//     console.log(people)
// })
>>>>>>> e79574b5a9ea2dcd4367ae34a3416fc427e55b43
