
function calculoCpf() {
    const cpf = document.querySelector(".cpf_informado").value;
    // serve pra tira todos os caracte que não seja numero
    let limpoCpf = cpf.replace(/\D/g, '');
    let cpfArray = Array.from(limpoCpf);
    let provaTeste = Array.from(limpoCpf);
    cpfArray.pop();
    cpfArray.pop();
    let contador1 = 0;
    let multiplicador1 = 10;
    let primeiro_num = 0;

    if (limpoCpf < 1000000000) {
         console.log("erro por falta de numeros")
        let paragrafo = document.createElement("p");
        paragrafo.textContent = "quantidade de numeros incorreta ";
        // Adiciona o parágrafo ao corpo (body) da página
        document.body.appendChild(paragrafo);
        return
    }

    for (let index = 0; index < 9; index++) {
        primeiro_num = primeiro_num + (cpfArray[contador1] * multiplicador1)
        contador1++
        multiplicador1--
    }

    primeiro_num = 11 -(primeiro_num % 11)
    if (primeiro_num > 9){
        primeiro_num = 0;
    }
    console.log(primeiro_num)
    cpfArray.push(String(primeiro_num) )
    
    // segundo numero
    let contador2 = 0;
    let multiplicador2 = 11;
    let segundo_num = 0;

    for (let index = 0; index < 10; index++) {
    
        segundo_num = segundo_num + (cpfArray[contador2] * multiplicador2)
        contador2++
        multiplicador2--
    }

    segundo_num = 11 -(segundo_num % 11)
    if (segundo_num > 9){
        segundo_num = 0;
    }
    console.log(segundo_num)
    cpfArray.push(String(segundo_num) )
    let cade1 = cpfArray.join();
    let cade2 = provaTeste.join();
   
    if( cade1 === cade2){
        console.log("confia, que o pai é foda!!")
        let paragrafo = document.createElement("p");   
        paragrafo.textContent = "o seu CPF é VERDADEIRO";
      
        document.body.appendChild(paragrafo);
    }

    else{
        console.log("tome no otario")
        let paragrafo = document.createElement("p");
        paragrafo.textContent = "o seu CPF não FUCIONOU, verifique se foi escrito de forma correta";
        document.body.appendChild(paragrafo);
    }
}

function load () {
    location.reload()
}