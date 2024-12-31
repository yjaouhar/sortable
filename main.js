import { sort } from "./sort.js";
import { filter } from "./filter.js";
import { Serching } from "./serche.js";
import { Display } from "./displayInfo.js";
let data = undefined
const heroInfo = ["images.xs", "name", "biography.fullName", "powerstats", "appearance.race", "appearance.gender", "appearance.height", "appearance.weight", "biography.placeOfBirth", "biography.alignment"]
data = await Fetching()
let temp = Object.assign([], data)
temp = Array.from(temp).slice(0, 20)
Display(temp)
document.querySelector("select").addEventListener("change", filter)

document.querySelector("input").addEventListener("input", Serching)

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
document.querySelectorAll("th").forEach((e) => {
    if (e.textContent !== "Icon") {
        e.addEventListener("click", sort)
    }
})
export { data, heroInfo }
