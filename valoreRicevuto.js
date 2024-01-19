import { forEachUtente } from "./forEachUtente.js";

export const valoreRicevuto = (val, data, ricerca) => {
  console.log(ricerca);
  if (val === "username" && ricerca !== "") {
    main.innerHTML = "";
    data.map((user) => {
      if (user.username.toLowerCase().includes(ricerca)) {
        forEachUtente(user);
      }
    });
  } else if (val === "email" && ricerca !== "") {
    main.innerHTML = "";
    data.map((user) => {
      if (user.email.toLowerCase().includes(ricerca)) {
        forEachUtente(user);
      }
    });
  } else if (val === "name" && ricerca !== "") {
    main.innerHTML = "";
    data.map((user) => {
      if (user.name.toLowerCase().includes(ricerca)) {
        forEachUtente(user);
      }
    });
  } else if (ricerca === "") {
    main.innerHTML += `<h1 class="w-100 m-3">Cerca qualcosa!</h1>`;
  }
};
