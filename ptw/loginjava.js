function verificar(){
	if (document.form.txt_email.value=="") {
		swal("Preencha o campo e-mail.");
		return false;
		document.form.txt_email.focus();
	}
	if (document.form.txt_senha.value=="") {
		swal("Preencha o campo senha.");
		return false;
		document.form.txt_senha.focus();
	}
}

