// get elements from the DOM
let p = document.getElementsByClassName("all-pokemon")
let ul = document.createElement("ul")
let li = document.createElement("li")
ul.appendChild(li)
p.appendChild(ul)
document.body.appendChild(p)




//WE'L USE THE AXIOS.all method rather than just the GET method, per Orlando's in-class hints
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

