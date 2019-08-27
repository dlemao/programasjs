function exe07() {
    var salario = Number(document.getElementById("salario").value);
    var calc = (salario * 30)/100

    if (salario < 500){
        var novo = salario + calc
        alert("Novo salario: " +novo)
    }
    else{
        alert("Não tem direito a aumento!")
    }

}