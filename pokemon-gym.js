// // get elements from the DOM
// let pokeAll = []
// pokeAll.push(catPokeArr)
// pokeAll.push(chrisPokeArr)
//
// console.log(pokeAll)
//
// function printPokes(pokeAll) {
//     for (i = 0; i < pokeAll.length; i++) {
//         console.log(pokeAll[i])
//     }
// }
// printPokes()
//
// let li = document.createElement("li")
// let ul = document.createElement("ul")
//
// li.innerHTML = pokeAll
//     // + multiplepokemon.all + '<br>'
//
// ul.appendChild(li)
// document.body.appendChild(ul)

// Code below utilized from materialize for both the carousel and the the Floating
// Action Button.


var elem = document.querySelectorAll('.carousel');
console.log(elem)
var instance = M.Carousel.init(elem);




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
