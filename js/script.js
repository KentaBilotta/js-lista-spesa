let item;
let question;
let lista = document.querySelector(".lista");
alert("In questo programma potrai comporre la tua lista della spesa");

while (item !== "fine") {
    item = prompt('Inserisci il nome del prodotto. Scrivi "fine" quando vuoi concludere');
    lista.innerHTML += `<li>${item}</li>`;
    console.log(item);
}



