function contar() {
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal");
    let divNumeros = document.getElementById("divNumeros"); //o div número está pegando o elemento pela id (div.números)
    divNumeros.innerHTML ="";
    for (let i = numero; i <= txtNumeroFinal.value; i++) { // i = i+1
        divNumeros.innerHTML += i + "<br />"; // += vai fazer com que a variável receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        contar();
    } else {
        if (
            isNaN(event.key) && // aqui significa que uma tecla não numérica foi teclada
            event.keyCode != 8 && // codigo 8 é quando a tecla backspace (apagar a esquerda) é teclada
            event.keyCode != 46 && // código 46 significa que a tecla dilete é teclada
            event.keyCode != 37 && // código significa que a tecla seta ára esquerda é teclada
            event.keyCode != 38 && // código significa que a tecla seta ára cima é teclada
            event.keyCode != 39 && // código significa que a tecla seta para baixo é teclada
            event.keyCode != 40 && // código significa que a tecla seta para direita é teclada
            event.keyCode != 35 && // código significa que a tecla seta END é teclada
            event.keyCode != 36 // código significa que a tecla HOME e teclada
        ) {//código 8 é quando a tecla backspace (apagar à esquerda) é teclada
            console.log("não é numérico");
            divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérico! Por favor, digite uma tecla numérica e tente novamente";
        }
    }
});

document.getElementById("txtNumeroFinal").addEventListener('input', function(event) {
    if (this.value.length > 3) {
        console.log("tem mais de 3 caracteres");
        if (this.value > 999) {
            this.value = 999;
            alert("O número máximo permitido é 999!");
        } else {
            this.value = this.value.substring(0,3);
        }
    }
});