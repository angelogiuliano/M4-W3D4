export const forEachUtente = (utenti) => {
    utenti.forEach((utente) => {
        main.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${utente.name}</h5>
          <p class="card-text">${utente.email.toLowerCase()}</p>
          <p class="card-text">${utente.address.city}</p>
          <p class="card-text">${utente.phone}</p>
        </div>
      </div>
        `
    })
}