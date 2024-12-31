
fetchdate()



function fetchdate() {
    const loadData = (heroes) => {
        creatTabl(heroes)
    };

    fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
        .then((response) => response.json()) // parse the response from JSON
        .then(loadData); // .then will call the `loadData` function with the JSON value.
}



function creatTabl(heroes) {

    let body = document.body
    let serche = document.createElement("input")
    serche.setAttribute("class", "serche")
    serche.setAttribute("type", "search")
    serche.setAttribute("placeholder", "serche")
    body.appendChild(serche)
    let s = ""
    serche.addEventListener("keypress", (e) => {
        s += (e.key)
        console.log(s);


    })
    let table = document.createElement('table')
    table.setAttribute("class", "border")
    table.style.borderCollapse = "collapse";
    table.style.width = "100%"
    let slic = ["Icon", "Name", "Full Name", "Powerstats", "Race", "Gender", "Height", "Weight", "Place Of Birth", "Alignment"]
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    slic.forEach(elm => {
        let th = document.createElement("th")
        th.textContent = elm 
            th.setAttribute("class", "thead")
        tr.appendChild(th)
    })
    thead.appendChild(tr)
    table.appendChild(thead)

    let tbody = document.createElement("tbody")
    heroes.forEach((her) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
     <td class="border"><img src="${her.images.xs}" alt="${her.name}" class="icon"></td>
    <td class="border">${her.name}</td>
    <td class="border">${her.biography.fullName}</td>
    <td class="border">
        <div>
            <span>Intelligence: ${her.powerstats.intelligence}</span>
            <span>Strength: ${her.powerstats.strength}</span>
            <span>Speed: ${her.powerstats.speed}</span>
            <span>Durability: ${her.powerstats.durability}</span>
            <span>Power: ${her.powerstats.power}</span>
            <span>Combat: ${her.powerstats.combat}</span>
        </div>
    </td class="border">
    <td class="border">${her.appearance.race}</td>
    <td class="border">${her.appearance.gender}</td>
    <td class="border">${her.appearance.height}</td>
    <td class="border">${her.appearance.weight}</td>
    <td class="border">${her.biography.placeOfBirth}</td>
     <td class="border">${her.biography.alignment}</td>
    `
        tbody.appendChild(tr)
    })
    table.appendChild(tbody)

    body.appendChild(table)
}

