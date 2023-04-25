function retornarValores(conteudo){
    if (!("erro" in conteudo)){
        document.getElementById("endereço").value = (conteudo.logradouro);
        document.getElementById("bairro").value = (conteudo.bairro);
        document.getElementById("cidade").value = (conteudo.localidade);
    }else{
        alert("Cep inexistente!")
    }
}

function buscaCep(valor){
    var cep = valor.replace(/\D/g, '');
    if(cep != ''){
        var validarCep = /^[0-9]{8}$/;
        if(validarCep.test(cep)){
            document.getElementById('endereço'),value = "...";
            document.getElementById("bairro").value = "...";
            document.getElementById("cidade").value = "...";
            var script = document.createElement('script');
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`;
            document.body.appendChild(script);
        }else{
            alert("Formato de cep imvalido")
        }
    }
}