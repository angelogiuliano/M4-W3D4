import { forEachUtente } from "./forEachUtente.js"
import { valoreRicevuto } from "./valoreRicevuto.js"

const url = 'https://jsonplaceholder.typicode.com/users'
const main = document.getElementById('main')
const selectDropdown = document.getElementById('dropdown-select')


const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()

    let valoreSelezionato = "username"; //valore di base

    valoreRicevuto(valoreSelezionato, data)

    selectDropdown.addEventListener('change', function() {
        valoreSelezionato = selectDropdown.value
        valoreRicevuto(valoreSelezionato, data)
    })
    
}

getData()