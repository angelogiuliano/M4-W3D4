export const valoreRicevuto = (val, data) => {
    if (val === "username") {
        data.forEach((user) => console.log(user.username))
    } else if (val === "email") {
        data.forEach((user) => console.log(user.email))
    } else if (val === "name") {
        data.forEach((user) => console.log(user.name))
    } else {
        main.innerHTML += `<h1>Errore, riprova</h1>`
    }
}