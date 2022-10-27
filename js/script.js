let lista = document.querySelector(".lista");
alert("In questo programma potrai comporre la tua lista della spesa");

let item = prompt('Inserisci il nome del prodotto. Scrivi "fine" quando vuoi concludere');

while (item !== "fine") {
    lista.innerHTML += `<li>${item}</li>`;
    console.log(item);
    item = prompt('Inserisci il nome del prodotto. Scrivi "fine" quando vuoi concludere');
}



