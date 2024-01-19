import { forEachUtente } from "./forEachUtente.js";
import { valoreRicevuto } from "./valoreRicevuto.js";

const url = "https://jsonplaceholder.typicode.com/users";
const main = document.getElementById("main");
const selectDropdown = document.getElementById("dropdown-select");
const input = document.getElementById("input");

const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    let valoreSelezionato = "username"; //valore di base
    let valoreCercato = ""; //valore dell'input

    selectDropdown.addEventListener("change", function () {
      valoreSelezionato = selectDropdown.value;
    });

    input.addEventListener("change", () => {
      valoreCercato = input.value;
      valoreRicevuto(valoreSelezionato, data, valoreCercato);

      if (input.value === "") {
        main.innerHTML = "";
        data.map((user) => {
          forEachUtente(user);
        });
      }
    });

    valoreRicevuto(valoreSelezionato, data, valoreCercato);

    data.map((user) => {
      forEachUtente(user);
    });
  } catch (err) {
    console.error(err);
  }
};

getData();
