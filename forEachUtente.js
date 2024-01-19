export const forEachUtente = (utente) => {
  main.innerHTML += `
        <div class="m-3 card" style="width: 18rem;">
        <div class="card-body">
          <p class="card-text"><b>Username:</b> ${utente.username}</p>
          <p class="card-text"><b>Email:</b> ${utente.email.toLowerCase()}</p>
          <p class="card-title"><b>Name:</b> ${utente.name}</p>
          <p class="card-text"><b>Address:</b> ${utente.address.city}</p>
          <p class="card-text"><b>Phone:</b> ${utente.phone}</p>
        </div>
      </div>`;
};
