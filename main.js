let data = undefined
const heroInfo = ["images.xs", "name", "biography.fullName", "powerstats", "appearance.race", "appearance.gender", "appearance.height", "appearance.weight", "biography.placeOfBirth", "biography.alignment"]
async function Fetching() {
    let temp = undefined
    const link = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
    await fetch(link)
        .then(async (response) => {
            data = await response.json()
            temp = data
        })
        .catch((err) => {
            console.log(err);
        })
    return temp
}

function Display(temp) {
    SetHeros(temp)
}

function SetHeros(temp) {
    let table = document.querySelector("table")
    let row = document.querySelectorAll("tr:not(.head)")
    Array.from(row).forEach((e) => {
        e.remove()
    })
    Array.from(temp).forEach((hero) => {
        const tRow = document.createElement("tr")
        table.append(tRow)
        heroInfo.forEach((info) => {
            const td = document.createElement("td")
            tRow.append(td)
            const nodes = info.split(".")
            const firstChild = nodes[0]
            let information = hero[firstChild];

            if (nodes.length === 2) {
                const secondChild = nodes[1]
                information = information[secondChild]
            }
            if (information instanceof Object) {
                if (information instanceof Array) {
                    td.textContent = [...information]
                } else {
                    const keys = Object.keys(information)
                    keys.forEach((key) => {
                        td.textContent += key + ": " + information[key] + " "
                    })
                    information = JSON.stringify(information)
                }
            } else if (info === "images.xs") {
                const image = document.createElement("img")
                td.append(image)
                image.src = information
            } else {
                td.textContent = information
            }
        })
    })
}

function filter() {
    let valeur = document.querySelector("select").options[document.querySelector("select").selectedIndex].value;
    let temp = Object.assign([], data)
    if (valeur !== "all") {
        const n = Number(valeur)
        temp = Array.from(temp).slice(0, n)
        Display(temp)
    } else {
        Display(temp)
    }
}

data = await Fetching()
let temp = Object.assign([], data)
temp = Array.from(temp).slice(0, 20)
Display(temp)

function Serching(e) {
    const search = e.target.value
    let names = Object.assign([], data)
    let neww = Array.from(names).filter((heros) => {
        return (heros["name"]).toLowerCase().includes(search)
    })
    Display(neww)
}
document.querySelector("select").addEventListener("change", filter)

document.querySelector("input").addEventListener("input", Serching)


document.querySelectorAll("th").forEach((e) => {
    if (e.textContent !== "Icon") {
        e.addEventListener("click", sort)
    }
})

function sort() {
    let temp = Object.assign([], data)
    let neww = ""
    const cName = Array.from(this.classList)
    console.log("-------->", cName);

    if (cName[0] === "name") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                return b[cName].localeCompare(a[cName])
            })
        } else {
            neww = Object.assign([], data)
        }
        this.classList.toggle("descending")
    } else if (cName[1] === "fullName") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                return b[cName[0]][cName[1]].localeCompare(a[cName[0]][cName[1]])
            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] === "" && b[cName[0]][cName[1]] !== "") {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== "" && b[cName[0]][cName[1]] === "") {
                    return -1
                }
                if (a[cName[0]][cName[1]] < b[cName[0]][cName[1]]) {
                    return -1;
                }
                if (a[cName[0]][cName[1]] > b[cName[0]][cName[1]]) {
                    return 1;
                }
            })
        }
        this.classList.toggle("descending")
    } else if (cName[1] === "gender") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                return b[cName[0]][cName[1]].localeCompare(a[cName[0]][cName[1]])
            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] === "-" && b[cName[0]][cName[1]] !== "-") {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== "-" && b[cName[0]][cName[1]] === "-") {
                    return -1
                }
                if (a[cName[0]][cName[1]] < b[cName[0]][cName[1]]) {
                    return -1;
                }
                if (a[cName[0]][cName[1]] > b[cName[0]][cName[1]]) {
                    return 1;
                }
            })
        }
        this.classList.toggle("descending")
    } else if (cName[1] === "alignment") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                return b[cName[0]][cName[1]].localeCompare(a[cName[0]][cName[1]])
            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] === "-" && b[cName[0]][cName[1]] !== "-") {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== "-" && b[cName[0]][cName[1]] === "-") {
                    return -1
                }
                if (a[cName[0]][cName[1]] < b[cName[0]][cName[1]]) {
                    return -1;
                }
                if (a[cName[0]][cName[1]] > b[cName[0]][cName[1]]) {
                    return 1;
                }
            })
        }
        this.classList.toggle("descending")

    } else if (cName[1] === "placeOfBirth") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                return b[cName[0]][cName[1]].localeCompare(a[cName[0]][cName[1]])
            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] === "-" && b[cName[0]][cName[1]] !== "-") {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== "-" && b[cName[0]][cName[1]] === "-") {
                    return -1
                }
                if (a[cName[0]][cName[1]] < b[cName[0]][cName[1]]) {
                    return -1;
                }
                if (a[cName[0]][cName[1]] > b[cName[0]][cName[1]]) {
                    return 1;
                }
            })
        }
        this.classList.toggle("descending")

    } else if (cName[1] === "race") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {


                return b[cName[0]][cName[1]].localeCompare(a[cName[0]][cName[1]])
            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] === "-" && b[cName[0]][cName[1]] !== "-") {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== "-" && b[cName[0]][cName[1]] === "-") {
                    return -1
                }
                if (a[cName[0]][cName[1]] < b[cName[0]][cName[1]]) {
                    return -1;
                }
                if (a[cName[0]][cName[1]] > b[cName[0]][cName[1]]) {
                    return 1;
                }
            })
        }
        this.classList.toggle("descending")

    }
    Display(neww)

}
