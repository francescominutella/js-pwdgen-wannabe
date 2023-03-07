/* // Decrizione passaggi:
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 */

//1. declare var: in this case are gonna be used const and let variables
//2. write text in window prompt: use function prompt()

const firstName = prompt("Please enter user name:");
const surName = prompt("Please enter user surname:");
let favoriteColor = prompt("Please enter user's favorite color:");

console.log(firstName, surName, favoriteColor)

//3. tieign var: concatenation constant var

const keywords = firstName + surName + favoriteColor + "23";
console.log(keywords)

//4. displaing output

document.getElementById("keywords").innerHTML = keywords;



