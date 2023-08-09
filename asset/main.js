const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
	// alternar el tipo de atributo
	const type = password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute('type', type);
	// alternar el icono
	this.classList.toggle('bi-eye');
});

// evitar enviar a formulario
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});