import { heroInfo } from "./main.js";

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

export {Display}