export const forEachUtente = (utente) => {
  main.innerHTML += `
        <div class="ms-3 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name: ${utente.name}</h5>
          <p class="card-text">Username: ${utente.username}</p>
          <p class="card-text">Email: ${utente.email.toLowerCase()}</p>
          <p class="card-text">Address: ${utente.address.city}</p>
          <p class="card-text">Phone: ${utente.phone}</p>
        </div>
      </div>`;
};
