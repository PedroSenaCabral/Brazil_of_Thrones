/* *** Perguntas *** */
var perguntasSul_01= ["<h2>A Guerra de Farrapos</h2><br /><p><strong> Conflito regional:</strong><p><strong> Informação geográfica/cultural:</strong><br />Possui uma cultura própria derivada do amálgama da cultura ibérica e indígena que habitavam o pampa.</p><br/><p><strong> Conflito regional:</strong><br />A Guerra dos Farrapos foi um conflito de caráter republicano, contra o governo imperial do Brasil, e que resultou na declaração de independência da província como estado republicano. Ocorreu entre 1835 e 1845, inicialmente reivindicando a retirada de todos os portugueses que se mantinham nos mais altos cargos do Império e do Exército, mesmo depois da Independência. No entanto, a revolução adquiriu um caráter separatista.</p> <br/><strong> Clique no estado em que ocorreu esse conflito. </strong> <br/>",
		      "<h2>O Contestado</h2><br /><p><strong> Informação geográfica/cultural:</strong><br /> É o 20º estado brasileiro por área territorial e o 11.º por população. Sua cultura é derivada de imigrantes majoritariamente europeus (portugueses, italianos e alemães).</p><br/> <p><strong> Conflito regional:</strong><br /> A Guerra do Contestado ocorreu no período de 1912 a 1916. Dentre as principais causas estão a disputa territorial de uma área rica em erva-mate e madeira, o autoritarismo de coronéis locais e da guarda nacional e o impacto da construção de uma estrada de ferro que ligava o Rio Grande do sul a São Paulo. No fim da construção do trecho da estrada de ferro na região, como parte do acordo de concessão, a companhia responsável (Brazil Railway Company) recebeu do governo 15 km de cada lado da ferrovia e iniciou a desapropriação de 6.696 km² de terras ocupadas já há muito tempo por posseiros que viviam na região. Também, os trabalhadores, que vinham de todas as partes do Brasil, haviam sido dispensados com o fim do serviço e não tinham como retornar a sua terra de origem.</p> <br/> <p>A revolta também tinha um caráter messiânico e chegou a ser chamada de “um novo Canudos” pela imprensa da época. O movimento teve início com com um grupo muito pequeno de sertanejos que seguiam um curandeiro, o \"santo monge\" José Maria, com o intuito de formar uma comunidade autônoma, onde todos viveriam em comunhão de bens. No entanto, com o tempo ganhou força e até ex-combatentes da Revolução Federalista se juntaram ao movimento.</p> <br/><strong> Clique no estado em que ocorreu esse conflito. </strong> <br/>",
		      "<h2>O Cerco da Lapa</h2><br /><p><strong> Informação geográfica/cultural:</strong><br /> Cultura derivada dos imigrantes majoritariamente europeus (portugueses, italianos, alemães e poloneses).</p> <br/><p><strong> Conflito regional:</strong><br /> O Cerco da Lapa foi um episódio militar (Exército Brasileiro, Guarda Nacional, Polícia Militar do estado e voluntários) que ocorreu durante a Revolução Federalista em 1894, quando a cidade de Lapa tornou-se arena de um sangrento confronto entre as tropas republicanas, os chamados pica-paus (legalistas), e os maragatos (federalistas), contrários ao sistema presidencialista de governo. Os legalistas resistiram bravamente ao cerco por 26 dias, mas sucumbiram pela falta de munição e comida. A lendária batalha deu ao Marechal Floriano Peixoto, chefe da República, tempo suficiente para reunir forças e deter as tropas federalistas.</p> <br/><strong> Clique no estado em que ocorreu esse conflito. </strong> <br/>"];


var random_01=Math.floor(Math.random()*perguntasSul_01.length);

//const regioes = document.querySelectorAll('.regiao-mapa');
var regSel=false;
var estadoReg, regiao, i,j;
var zIndReg, zIndEst;


function getStyle(el,styleProp)
{
    var x = document.getElementById(el);

    if (window.getComputedStyle) {
        var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp); 
    } else if (x.currentStyle) {
        var y = x.currentStyle[styleProp];
    }                     

    return Number(y);
}


function hideReg(id_reg) {
    
    if(!regSel){
	document.getElementById(id_reg).style.display="none";
	document.getElementById("pergunta_01").innerHTML=perguntasSul_01[random_01];
	regSel=true;

	estadoReg=document.getElementsByClassName(id_reg);
	for(i=0;i<estadoReg.length;i++){
	    zIndEst = getStyle(estadoReg[i].id,"z-index");
	    if(zIndEst!==150){ 
		estadoReg[i].style.zIndex=zIndEst+200;
	    }
	    //console.log(estadoReg[i].id,"Antes:",zIndEst,"Depois:",getStyle(estadoReg[i].id,"z-index"))
	}
    } 

}

function showReg(){
    regiao=document.getElementsByClassName("regiao-mapa");
    for(i=0;i<regiao.length;i++){
	if(regiao[i].style.display==="none"){

	    estadoReg=document.getElementsByClassName(regiao[i].id);
	    for(j=0;j<estadoReg.length;j++){
		zIndEst=getStyle(estadoReg[j].id,"z-index");
		if(zIndEst!=150){ 
		    estadoReg[j].style.zIndex=zIndEst-200;
		}
		//console.log(estadoReg[j].id,"Antes:",zIndEst,"Depois:",getStyle(estadoReg[j].id,"z-index"))
	    }
	    regiao[i].style.display="block";
	    break;
	}
    }

}

function checaResp(id_state){
    switchState(id_state);
    regSel=false;
    showReg();
}

function switchState(id_state) {
    document.getElementById(id_state).classList.add('switch');
    document.getElementById(id_state).style.zIndex=150;    
}



//regioes.forEach(regiao => regiao.addEventListener('click', hideReg));



