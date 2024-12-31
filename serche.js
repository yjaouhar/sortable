import { data } from "./main.js";
import { Display } from "./displayInfo.js";
function Serching(e) {
    const search = e.target.value
    let names = Object.assign([], data)
    let neww = Array.from(names).filter((heros) => {
        return (heros["name"]).toLowerCase().includes(search)
    })
  
    Display(neww)
}
export { Serching }
