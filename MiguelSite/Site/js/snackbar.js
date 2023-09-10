function snack() {
    const email = document.querySelector('#email-form').value;
    const phone = document.querySelector('#phone-form').value;
    const name = document.querySelector('#name-form').value;
    const assunto = document.querySelector('#assunto-form').value;
    const msg = document.querySelector('#msg-form').value;
  
    const snack = document.querySelector('#snackbar__formulario');
  
    const regexPhone = new RegExp("[0-9]{2} [0-9]{5} [0-9]{4}");
    const regexEmail = new RegExp("^\\w+([.-_]\\w+)*@\\w+(.\\w+)+$", "i");
  
    let listaErros = [];
  
    // console.log(snack);
    if (!regexPhone.test(phone)) {
      listaErros.push("phone");
    }
    if (!regexEmail.test(email)) {
      listaErros.push("email");
    }
    if (name.length === 0) {
      listaErros.push("nome");
    }
    if (assunto.length === 0) {
      listaErros.push("assunto");
    }
    if (msg.length === 0) {
      listaErros.push("mensagem");
    }
  
    if (listaErros.length > 0) {
      snack.textContent = "Campos inválidos: " + listaErros.join(", ");
    }
  
    else {
      snack.textContent = "Email enviado com sucesso";
    }
  
    const snackbar = document.querySelector('#snackbar__formulario');
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
  }