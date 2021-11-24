//const { json } = require("stream/consumers")

const boton = document.querySelector(".todo-button")
const datos = document.querySelector(".todo-input")
const lista = document.querySelector(".todo-list")

let arregloItems = []

boton.addEventListener("click", agregar)


//agrega el item a la todo
function agregar(e) {
    e.preventDefault()
    if (datos.value != ""){
        arregloItems.push(datos.value)
    }
    console.log(arregloItems)
    datos.value=""  

    renderItems(arregloItems);
}



async function getItems() {
    let url = 'datos.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function pushItems() {
    let items = await getItems();
    items.forEach(item => {
        arregloItems.push(item.contenido)
    });

    renderItems(arregloItems);


}

function renderItems(arregloItems) {

    console.log(arregloItems)
    const item = document.createElement("li")
    const boton = document.createElement("button")
    boton.classList.add('delete-button')
    item.classList.add('li')
    for (let x of arregloItems) {
        item.innerText = x
        lista.appendChild(item)
        item.appendChild(boton)

        datos.value = ""
    }
}

async function renderUser() {
    let users = await getItems();
    let html = `Lista de ${users[0].mail}`;

    let container = document.querySelector('.titulo');
    container.innerHTML = html;
}

pushItems();
renderUser();
