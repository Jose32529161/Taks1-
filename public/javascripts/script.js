let menuVisible = false;
//Funcion que oculta o muestra nuestro menu
Function mostrarOcultarMenu(){
	if (menuVisible) {
		document.getElementById("nav").classLits ="";
		menuVisible = false;
	}else{
			document.getElementById("nav").classLits ="responsive";
		menuVisible = true;
	}
}
Function selecciona(){
	//oculto el menu una vez que selecciono una opcion
		document.getElementById("nav").classLits ="";
		menuVisible = false;
}
//funcion que aplica las animaciones de las habilidades
Function efectoHabilidades();{
	var skills = document.getElementById("skills");
	var distacia_skills = window.innerHeight = skills.getBoundingClientRect().top;
	if (distacia_skills >= 300) {
		let habilidades = document.getElementByIdClassname("proceso");
		habilidades[0].classLits.add("javascript");
		habilidades[1].classLits.add("htmlcss");
		habilidades[2].classLits.add("photoshop");
		habilidades[3].classLits.add("Wordpress");
		habilidades[4].classLits.add("drupa");
		habilidades[5].classLits.add("comunicacion");
		habilidades[6].classLits.add("trabajo");
		habilidades[7].classLits.add("creatividad");
		habilidades[8].classLits.add("dedicacion");
		habilidades[9].classLits.add("proyect");
	}
}

// detecto el srolling para aplicar la animacion de la barra de habilidades
window.onscroll = Function(){
	efectoHabilidades();
}