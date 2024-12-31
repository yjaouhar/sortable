import { data } from "./main.js";
export function filter() {
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

import { Display } from "./displayInfo.js";
