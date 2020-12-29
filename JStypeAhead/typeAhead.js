const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
.then(res => res.json())
.then(data => {
    console.log(data)
   cities.push(...data)
})

findMatches = (wordsMatch, cities) => {
    return cities.filter(place => {
         // need to figure out if city or state was searched matches

        const regex = new RegExp(wordsMatch, 'gi') // g = global, i = case insensitive
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

displayMatches =(e)=> {
    const word = e.target.value
    const matchArray = findMatches(word, cities)
    console.log(matchArray)
    const html = matchArray.map(place => {

        const regex = new RegExp(word, 'gi')
        const cityName = place.city.replace(regex, `<span class='hl'>${word}</span>`)
        const stateName = place.state.replace(regex, `<span class='hl'>${word}</span>`)
        return `
        <li>
            <span class='name'>${cityName} ${stateName}</span>
            <span class='name'>${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('')
    suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

// searchInput add event listener, listen for 'change', run findMatches()
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)