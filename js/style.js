function gID(id) {
    let element = document.getElementById(id)

    return element
}

let pose = 'female'
let poseName = 'Female Lion'
let fileLoc = 'female'

async function populateSection(section) {
    const requestURL =
        `./json/${section}.json`
    const request = new Request(requestURL)

    const response = await fetch(request)
    const decors = await response.json()

    displayDecor(section, decors)
}

function displayDecor(section, decors) {
    const theSection = gID(section)

    decors.forEach(entry => {
        const card = document.createElement('div')
        card.classList = 'col-sm-12 col-md-6 col-lg-4 mb-3'
        card.innerHTML = `<div class="card decor-card h-100 p-0"><img ${entry.position == 'below' ? `style="background: url('https://static.lioden.com/images/decors/${fileLoc}//below/${entry.fileName}.png'); background-size: cover;" ` : ''} class="${entry.position == 'over' ? pose : 'below'} card-img-top" src="https://static.lioden.com/images/decors/${fileLoc}//${entry.position}/${entry.fileName}.png" alt="${entry.name} on ${poseName} Pose"><div class="card-body"><h5 class="card-title pb-1">${entry.name}</h5><div class="card-text">Price: ${entry.price}</div></div></div>`

        theSection.appendChild(card)
    });
}