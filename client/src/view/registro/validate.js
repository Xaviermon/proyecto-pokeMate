const regexString = /^[a-zA-Z\s]+$/
const regexCell = /^9\d{8}$/
const regexUser = /^[a-zA-Z0-9]+$/

const regexMayus = /[A-Z]{1}/;
const regexNum = /\d.*\d/;
const regexGrado = /(secundaria|primaria)/i

export const validateUser = (user) =>{
	let error = {}
	if(user.nombre){
		if(!regexString.test(user.nombre))error.nombre = "El nombre solo puede contener letras"
		if(user.nombre.length > 20)error.nombre = "El nombre debe tener menos de 20 caracteres"
	}
	if(user.apellido){
		if(!regexString.test(user.apellido))error.apellido = "El apellido solo puede contener letras"
		if(user.apellido.length > 20)error.apellido = "El apellido debe tener menos de 20 caracteres"
	}
	if(user.grado){
		if(!regexGrado.test(user.grado))error.grado = "El grado solo puede ser secundaria o primaria"
	}
	if(user.usuario){
		if(!regexUser.test(user.usuario))error.usuario = "El usuario solo puede contener letras y numeros"
		if(user.usuario.length > 20)error.usuario = "El usuario debe tener menos de 20 caracteres"
	}
	if(user.celular){
		if(!regexCell.test(user.celular))error.celular = "El celular solo puede contener numeros"
		if(user.celular.length > 9)error.celular = "El celular debe tener menos de 9 caracteres"
	}
	if(user.contraseña){
		if(!regexMayus.test(user.contraseña))error.contraseña = "Debe tener una letra mayuscula"
		if(!regexNum.test(user.contraseña))error.contraseña = "Debe tener almenos 2 numeros"
		if(user.contraseña.length > 20)error.contraseña = "La contraseña debe tener menos de 20 caracteres"
	}
	return error
}