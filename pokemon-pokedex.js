document.addEventListener("DOMContentLoaded", (event) => {

    //pokemons in my trainer array 
    class Cataclysm {
        constructor() {
            this.all = []
        }
        add(character) {
            this.all.push(character)
        }
        get(name) {
            for (let i = 0; i < this.all.length; i++) {
                if (name === this.all[i].name) {
                    return this.all[i]
                }
            }
        }
    }
    class Pokemon {
        constructor(name, hp, hpstat, attack, attackstat, abilitiesname, defensestat, defense) {
            this.name = name
            this.hp = hp
            this.hpstat = hpstat
            this.attack = attack
            this.attackstat = attackstat
            this.abilitiesname = abilitiesname
            this.defense = defense
            this.defensestat = defensestat
        }
    }
    let cataclysm = new Cataclysm()

    // function callAxios(callback) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/799/`)
            .then((response) => {
                let data = response.data
                // pokeball.push(data)
                let main = document.querySelector("main")
                let p = document.createElement("p")
                let pguzz = document.querySelector(".statsguzzlord")
                let ul = document.createElement("ul")
                let img = document.createElement("img")
                let li = document.createElement("li")
                let h2 = document.createElement("h2")
                let abilitiesData = response.data.abilities

                function abilities(abilitiesData) {
                    let abilitiesList = []
                    for (let i = 0; i < abilitiesData.length; i++) {
                        // console.log(abilitiesData[i].ability.name)
                        abilitiesList.push(abilitiesData[i].ability.name)
                    }
                    abilitiesList.toString()
                    return abilitiesList
                }

                let guzzlord = new Pokemon (
                    data.name,
                    data.stats[5].stat.name,
                    data.stats[5].base_stat,
                    data.stats[4].stat.name,
                    data.stats[4].base_stat,
                    abilities(abilitiesData),
                    data.stats[3].stat.name,
                    data.stats[3].base_stat
                )

                cataclysm.add(guzzlord)

                li.innerHTML = guzzlord.name
                li.classList.add("guzzlord")

                img.setAttribute("src", "images/799-Guzzlord.png")
                img.id = "guzzlord"

                pguzz.innerHTML = `<h3>Pok&eacute; Stats</h3>` + "<br>"
                    + `${guzzlord.hp}: ${guzzlord.hpstat}` + "<br>"
                    + `${guzzlord.attack}: ${guzzlord.attackstat}` + "<br>"
                    + `ability: ${guzzlord.abilitiesname}` + "<br>"
                    + `${guzzlord.defensestat}: ${guzzlord.defense}` + "<br>"

                pguzz.appendChild(p)
                ul.appendChild(img)
                ul.appendChild(li)
                main.appendChild(ul)
                document.body.appendChild(main)
            })

        axios.get(`https://pokeapi.co/api/v2/pokemon/663/`)
            .then((response) => {
                let main = document.querySelector("main")
                let ptalon = document.querySelector(".statstalonflame")
                let p = document.createElement("p")
                let ul = document.createElement("ul")
                let img = document.createElement("img")
                let li = document.createElement("li")
                let h2 = document.createElement("h2")
                let data = response.data
                let abilitiesData = response.data.abilities

                function abilities(abilitiesData) {
                    let abilitiesList = []
                    for (let i = 0; i < abilitiesData.length; i++) {
                        abilitiesList.push(abilitiesData[i].ability.name)
                    }
                    abilitiesList.toString()
                    return abilitiesList
                }

                let talonflame = new Pokemon (
                    data.name,
                    data.stats[5].stat.name,
                    data.stats[5].base_stat,
                    data.stats[4].stat.name,
                    data.stats[4].base_stat,
                    abilities(abilitiesData),
                    data.stats[3].stat.name,
                    data.stats[3].base_stat
                )

                cataclysm.add(talonflame)

                li.innerHTML = talonflame.name
                li.classList.add("talonflame")

                img.setAttribute("src", "images/talonflame-gif2.gif")
                img.id = "talonflame"

                ptalon.innerHTML = `<h3>Pok&eacute; Stats</h3>` + "<br>"
                    + `${talonflame.hp}: ${talonflame.hpstat}` + "<br>"
                    + `${talonflame.attack}: ${talonflame.attackstat}` + "<br>"
                    + `ability: ${talonflame.abilitiesname}` + "<br>"
                    + `${talonflame.defensestat}: ${talonflame.defense}` + "<br>"

                ptalon.appendChild(p)

                ul.appendChild(img)
                ul.appendChild(li)
                main.appendChild(ul)
                document.body.appendChild(main)
            })

        axios.get(`https://pokeapi.co/api/v2/pokemon/257/`)
            .then((response) => {
                let main = document.querySelector("main")
                let pblaz = document.querySelector(".statsblaziken")
                let p = document.createElement("p")
                let ul = document.createElement("ul")
                let img = document.createElement("img")
                let li = document.createElement("li")
                let h2 = document.createElement("h2")
                let data = response.data
                let abilitiesData = response.data.abilities
    //per fizal's guidance I constructed a For loop to iterate over every abilities array item
                function abilities(abilitiesData) {
                    let abilitiesList = []
                    for (let i = 0; i < abilitiesData.length; i++) {
                        // console.log(abilitiesData[i].ability.name)
                        abilitiesList.push(abilitiesData[i].ability.name)
                    }
                    abilitiesList.toString()
                    return abilitiesList
                }

                let blaziken = new Pokemon (
                    data.name,
                    data.stats[5].stat.name,
                    data.stats[5].base_stat,
                    data.stats[4].stat.name,
                    data.stats[4].base_stat,
                    abilities(abilitiesData),
                    data.stats[3].stat.name,
                    data.stats[3].base_stat
                )

                cataclysm.add(blaziken)

                li.innerHTML = blaziken.name
                li.classList.add("blaziken")

                img.setAttribute("src", "images/blaziken9-copy.png")
                img.id = "blaziken"

                pblaz.innerHTML = `<h3>Pok&eacute; Stats</h3>` + "<br>"
                    + `${blaziken.hp}: ${blaziken.hpstat}` + "<br>"
                    + `${blaziken.attack}: ${blaziken.attackstat}` + "<br>"
                    + `ability: ${blaziken.abilitiesname}` + "<br>"
                    + `${blaziken.defensestat}: ${blaziken.defense}` + "<br>"

                pblaz.appendChild(p)

                ul.appendChild(img)
                ul.appendChild(li)
                main.appendChild(ul)
                document.body.appendChild(main)
            }).catch((error) => {
                console.log(error)
            })
    console.log(cataclysm.all)
    // }

        
    // tutorial from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
    window.addEventListener("scroll", function () {
        let nav = document.getElementById("nav")
        let sticky = nav.offsetTop;

        function stickyNav() {
            if (window.pageYOffset >= sticky) {
                nav.classList.add("sticky")
            } else {
                nav.classList.remove("sticky")
            }
        } stickyNav()
    })
    
    window.addEventListener('scroll', (event) => {
        let explodePic1 = document.getElementById("explodePic1")
        let explodePic2 = document.getElementById("explodePic2")
        if (window.scrollY > 1000) {
            explodePic1.id = "fadeIn";
            explodePic2.id = "fadeIn2";
            document.body.appendChild(explodePic1);
            document.body.appendChild(explodePic2);
        }
        })

})
