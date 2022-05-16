let poukemon = {
	vida: 50,
	saciedad: 50, 
	energia: 50, 
	salud: 50,
	animo: 50,
	higuiene: 50,
	nivel: 1,
	cantCacas: 0,
}

function comer(){
	poukemon.saciedad += 1
	console.log(poukemon.saciedad)
}

function mimar(){
	poukemon.animo += 1
	console.log("mimando, animo en: " + poukemon.animo)
}

function baniar(){
	poukemon.higuiene = 100
	console.log("baño tomado, higuiene en: " + poukemon.higuiene)
}

function limpiar(){
	poukemon.cantCacas = 0 
	console.log("cacas limpiadas")
}

function guardar() {
	// hacer un json con los datos del pou y la fecha y hora de guardado
}
