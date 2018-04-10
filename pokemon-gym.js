
let pokeOneInfo = document.getElementById("")
let listHTML;




    for (i = 0; i < cataclysm.all.length; i++) {
        let div = document.createElement("div")
        // name
        let listHTML = document.createElement("ul")
        listHTML.innerHTML =` <li> ${cataclysm.all[i].name} </li>`;
        console.log(cataclysm.all[i].name)
        // hp name and hpstat
            ` <li> ${cataclysm.all[i].hp} </li>`;
        // //defense name and defense stat
        // //attack name and attack stat
        // //abilities name as a string
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
