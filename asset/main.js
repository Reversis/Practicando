const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const toggle = document.querySelector("#toggle")

togglePassword.addEventListener("click", function () {
	// alternar el tipo de atributo
	const type = password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute('type', type);
	// alternar el icono
	this.classList.toggle('bi-eye');
});

    //para recordar la contraseña
toggle.addEventListener('change' , function () {
   if (this.checked) {
    //salva la contraseña en un almacenamiento local o cookie
    const savedPassword = password.value;
    localStorage.setItem("toggle" , savedPassword);
   } else {
    //Limpia la contraseña salvada del almacenamiento local o cookie
    localStorage.removeItem("toggle")
   }
});

//Comprobando si hay una contraseña recordada y complete el campo
const passwordR = localStorage.getItem("toggle");
if (passwordR) {
  password.value = passwordR;
  passwordR.checked = true;
}

// evitar enviar a formulario
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});