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

const stats = document.getElementById("stats")


function render(){
	stats.innerHTML = "Saciedad: "+poukemon.saciedad
}

function comer(){
	poukemon.saciedad += 1
	console.log(poukemon.saciedad)
	render()
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
	const dateObj = new Date();
	console.log( dateObj.getDate() + '/' + dateObj.getUTCMonth() )
	console.log( dateObj.getHours() + ':' + dateObj.getUTCMinutes() )

	fetch('https://index.html/')
	.then(data => {
		return data.json();
	})
	.then(post => {
		console.log(post.title);
	});

}


render()
