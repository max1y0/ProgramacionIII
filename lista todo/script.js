const boton = document.querySelector(".todo-button")
const datos = document.querySelector(".todo-input")
const lista = document.querySelector(".todo-list")

boton.addEventListener("click", agregar)

function agregar(e){
	e.preventDefault()
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
