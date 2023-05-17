const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
if(nameInput.value === "") {
        alert("Por favor, preencha seu nome")
        return;
    }


//  Veriicar se o e-mail preenchido é valido
if(emailInput.value === ""  || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu email")
    return;
    
}

// Verifica se está preenchida

if (!ValidtePassword(passwordInput.value , 8)) {
    alert("A senha precisa de no mínimo 8 dígitos.")
    return
    
}


// Verificar se a situação foi selecionada
if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação.")
    return
}


// Verifica se a mensagem está preenchida
if (messageTextarea.value === "") {
    alert("Por favor, escreva uma mensagem.")
    
}

// Se todos os campos estiverem preenchidos, envie o form
    form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {
    

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}



// Função que valida a senha
function ValidtePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //senha válida
        return true
    }

    //senha inválida
    return false
    
}