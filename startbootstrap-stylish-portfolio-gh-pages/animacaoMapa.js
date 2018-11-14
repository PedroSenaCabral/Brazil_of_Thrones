/* *** Perguntas *** */
var perguntasSul_01= ["<h2>A Guerra de Farrapos</h2><br /><p><strong> Conflito regional:</strong><br /> Possui uma cultura propria derivada do amalgama da cultura iberica e indigena que habitavam o pampa.</p><p><strong> Conflito regional:</strong><br />A Guerra dos Farrapos foi um conflito de carater republicano, contra o governo imperial do Brasil, e que resultou na declaracao de independencia da provincia como estado republicano. Ocorreu entre 1835 e 1845, inicialmente reivindicando a retirada de todos os portugueses que se mantinham nos mais altos cargos do Imperio e do Exercito, mesmo depois da Independencia. No entanto, a revolucao adquiriu um carater separatista.</p> <br/><strong> Clique no estado em que ocorreu essa guerra. </strong> <br/>",
		      "O Contestado",
		      "O cerco da Lapa"];


var random_01=Math.floor(Math.random()*perguntasSul_01.length);

const estados = document.querySelectorAll('.estado-mapa');
const regioes = document.querySelectorAll('.regiao-mapa');

function flipObj() {
  this.classList.toggle('flip');
}

function hideObj() {
    if(this.style.display=== "none"){
	this.style.display= "block";	
    } else {
	this.style.display= "none"; // block eh melho? testar
	document.getElementById("pergunta_01").innerHTML=perguntasSul_01[random_01];
    }

}

estados.forEach(estado => estado.addEventListener('click', flipObj));
regioes.forEach(regiao => regiao.addEventListener('click', hideObj));




