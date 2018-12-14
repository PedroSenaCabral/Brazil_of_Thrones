/*
var i;
var txt1='Senhor comandante,<br/><br/> Como o senhor sabe, a situação continua crítica em nossa amada pátria. No entanto, consegui reunir um bom número de soldados aqui no nordeste e tenho relatos que temos tropas suficientes nas outra regiões como o senhor pode verificar no relatório em anexo. Acredito que temos uma boa chance de expulsar os inimigos de diversos estados e recuperar nosso domínio das regiões brasileiras coordenando os ataques. Lhe enviarei o estado  mais vulnerável em uma região da sua escolha, lidere a tropa rápido que teremos chance.<br/><br/> Para não alarmar o inimigo caso sejamos interceptados o nome do estado prioritário lhe será enviado de modo codificado. Cruze as informações sobre o estado e o conflito histórico ocorrido no estado que saberás onde ordenar o ataque. Como os usurpadores detém pouco conhecimento de nossa história e dos aspectos geográficos tenho certeza que esta estratégia será bem sucedida.<br/> <br/> Boa sorte e boa campanha.<br/><br/> Amiral Fulano.';
var speed = 50;

function typeWriter(txt) {

  if (i < txt.length) {
    document.getElementById("textLetter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter(txt), 50);
  }

}

function writeLetter(){
    i=0;
    typeWriter(txt1);
    document.getElementById("textLetter").innerHTML +="<br/> <br/>";    
    
}
*/

function goPag1(){
    document.getElementById("Pag1").style.display = "block";  
    document.getElementById("Pag2").style.display = "none";

    document.getElementById("btnPag1").style.display = "none";  
    document.getElementById("btnPag2").style.display = "block";  
}

function goPag2(){
    document.getElementById("Pag2").style.display = "block";  
    document.getElementById("Pag1").style.display = "none";

    document.getElementById("btnPag2").style.display = "none";  
    document.getElementById("btnPag1").style.display = "block"; 
}


