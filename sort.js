import { data } from "./main.js";
import { Display } from "./displayInfo.js";
export function sort() {
    let temp = Object.assign([], data)
    let neww = ""
    const cName = Array.from(this.classList)

    if (cName[0] === "name") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                return b[cName].localeCompare(a[cName])
            })
        } else {
            neww = Object.assign([], data)
        }
        this.classList.toggle("descending")
    } else if (cName[0] === "powerstats") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                let res_b = +((b[cName].intelligence) + (b[cName].strength) + (b[cName].speed) + (b[cName].durability) + (b[cName].power) + (b[cName].combat))
                let res_a = +((a[cName].intelligence) + (a[cName].strength) + (a[cName].speed) + (a[cName].durability) + (a[cName].power) + (a[cName].combat))
                return res_b < res_a ? 1 : -1

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
    } else if (cName[1] === "alignment" || cName[1] === "placeOfBirth" || cName[1] === "gender") {
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
                if (a[cName[0]][cName[1]] === null && b[cName[0]][cName[1]] !== null) {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== null && b[cName[0]][cName[1]] === null) {
                    return -1
                }
                if (a[cName[0]][cName[1]] !== null && b[cName[0]][cName[1]] !== null) {
                    return b[cName[0]][cName[1]].localeCompare(a[cName[0]][cName[1]])
                }
            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] === null && b[cName[0]][cName[1]] !== null) {
                    return 1
                }
                if (a[cName[0]][cName[1]] !== null && b[cName[0]][cName[1]] === null) {
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

    } else if (cName[1] === "height") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                if (b[cName[0]][cName[1]] !== null && a[cName[0]][cName[1]] !== null) {
                    if (isNaN(Number.parseFloat(a[cName[0]][cName[1]])) && !isNaN(Number.parseFloat(b[cName[0]][cName[1]]))) {
                        return 1
                    }
                    if (!isNaN(Number.parseFloat(a[cName[0]][cName[1]])) && isNaN(Number.parseFloat(b[cName[0]][cName[1]]))) {
                        return -1
                    }
                    return Number.parseFloat(b[cName[0]][cName[1]]) > (Number.parseFloat(a[cName[0]][cName[1]])) ? 1 : -1
                }

            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
                if (a[cName[0]][cName[1]] < b[cName[0]][cName[1]]) {
                    return -1;
                }
                if (a[cName[0]][cName[1]] > b[cName[0]][cName[1]]) {
                    return 1;
                }
            })
        }

        this.classList.toggle("descending")

    } else if (cName[1] === "weight") {
        if (!this.classList.contains("descending")) {
            neww = Array.from(temp).sort((a, b) => {
                if (isNaN(Number.parseInt(a[cName[0]][cName[1]])) && !isNaN(Number.parseInt(b[cName[0]][cName[1]]))) {
                    return 1
                }
                if (!isNaN(Number.parseInt(a[cName[0]][cName[1]])) && isNaN(Number.parseInt(b[cName[0]][cName[1]]))) {
                    return -1
                }
                return Number.parseInt(b[cName[0]][cName[1]]) > (Number.parseInt(a[cName[0]][cName[1]])) ? 1 : -1

            })
        } else {
            neww = Array.from(temp).sort((a, b) => {
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
