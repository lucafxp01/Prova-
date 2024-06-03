function adicionarNaTabela() {
   
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    
    
    var media = (nota1 + nota2) / 2;
    
    
    var situacao = (media >= 5) ? "Aprovado" : "Reprovado";

    
    var newRow = "<tr><td>" + nome + "</td><td>" + matricula + "</td><td>" + nota1 + "</td><td>" + nota2 + "</td><td>" + media.toFixed(2) + "</td><td>" + situacao + "</td></tr>";
    
    
    document.getElementById("tabelaestudante").getElementsByTagName('tbody')[0].innerHTML += newRow;

    
    document.getElementById("formulárioum").reset();
}