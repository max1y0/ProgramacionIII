//const { json } = require("stream/consumers")

const boton = document.querySelector(".todo-button")
const datos = document.querySelector(".todo-input")
const lista = document.querySelector(".todo-list")

boton.addEventListener("click", agregar)

//agrega el item a la todo
function agregar(e){
	e.preventDefault()
	test()
	const item = document.createElement("li")
	const boton = document.createElement("button")
	boton.classList.add("delete-button")
	item.innerText = datos.value
	if (datos.value != ""){
		lista.appendChild(item)
		item.appendChild(boton)
	}
	datos.value=""
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

async function renderItems() {
    let items = await getItems();
    let html = '';
    items.forEach(item => {
        let htmlSegment = `<li>${item.contenido}</li>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.todo-list');
    container.innerHTML = html;
}

renderItems();