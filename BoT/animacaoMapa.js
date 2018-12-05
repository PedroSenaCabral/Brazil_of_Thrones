/* *** Perguntas *** */


/*************************************** PERGUNTAS ***************************************/
const perguntasNorte= [{
    conflito: "<h2>Norte</h2> <br /><br /> <strong> Clique no estado em que ocorreu esse conflito. </strong>",
    infoEstado: "<br /> <p> Informação geográfica/cultural </p>",
    infoConflito: "<br /> <p> Conflito regional </p> ",
    dica: "<br /> <p> Dica: </p>",
    correctAnswer: " "
}
]




const perguntasNordeste= [{
    conflito: "<h2>Nordeste</h2><br /><br /> <strong> Clique no estado em que ocorreu esse conflito. </strong>",
    infoEstado: "<br /> <p> Informação geográfica/cultural </p>",
    infoConflito: "<br /> <p> Conflito regional </p> ",
    dica: "<br /> <p> Dica: </p>",
    correctAnswer: " "
}
]




const perguntasCentroOeste= [{
    conflito: "<h2>Centro-oeste</h2><br /><br /> <strong> Clique no estado em que ocorreu esse conflito. </strong>",
    infoEstado: "<br /> <p> Informação geográfica/cultural </p>",
    infoConflito: "<br /> <p> Conflito regional </p> ",
    dica: "<br /> <p> Dica: </p>",
    correctAnswer: " "
}
]




const perguntasSudeste= [{
    conflito: "<h2>Sudeste</h2><br /><br /> <strong> Clique no estado em que ocorreu esse conflito. </strong>",
    infoEstado: "<br /> <p> Informação geográfica/cultural </p>",
    infoConflito: "<br /> <p> Conflito regional </p> ",
    dica: "<br /> <p> Dica: </p>",
    correctAnswer: " "
}
]




const perguntasSul= [{
    conflito: "<h2>A Guerra de Farrapos</h2><br /><br/><strong> Clique no estado em que ocorreu esse conflito. </strong>",
    infoEstado: "<br /><p> Possui uma cultura própria derivada do amálgama da cultura ibérica e indígena que habitavam o pampa.</p>",
    infoConflito: "<br /> <p>A Guerra dos Farrapos foi um conflito de caráter republicano, contra o governo imperial do Brasil, e que resultou na declaração de independência da província como estado republicano. Ocorreu entre 1835 e 1845, inicialmente reivindicando a retirada de todos os portugueses que se mantinham nos mais altos cargos do Império e do Exército, mesmo depois da Independência. No entanto, a revolução adquiriu um caráter separatista.</p> ",
    dica: "<br /> <p> Um traje típico da região é a bombacha, uma calça abotoadas no tornozelo. O nome foi adotado do termo espanhol \"bombacho\", que significa \"calças largas\".</p>",
    correctAnswer: "RS"
}, {
    conflito: "<h2>O Contestado</h2><br /> <br /><strong> Clique no estado em que ocorreu esse conflito. </strong>",
    infoEstado: "<br /> <p> É o 20º estado brasileiro por área territorial e o 11.º por população. Sua cultura é derivada de imigrantes majoritariamente europeus (portugueses, italianos e alemães).</p>",
    infoConflito: "<br /> <p> A Guerra do Contestado ocorreu no período de 1912 a 1916. Dentre as principais causas estão a disputa territorial de uma área rica em erva-mate e madeira, o autoritarismo de coronéis locais e da guarda nacional e o impacto da construção de uma estrada de ferro que ligava o Rio Grande do sul a São Paulo. No fim da construção do trecho da estrada de ferro na região, como parte do acordo de concessão, a companhia responsável (Brazil Railway Company) recebeu do governo 15 km de cada lado da ferrovia e iniciou a desapropriação de 6.696 km² de terras ocupadas já há muito tempo por posseiros que viviam na região. Também, os trabalhadores, que vinham de todas as partes do Brasil, haviam sido dispensados com o fim do serviço e não tinham como retornar a sua terra de origem.</p> <br/> <p>A revolta também tinha um caráter messiânico e chegou a ser chamada de “um novo Canudos” pela imprensa da época. O movimento teve início com com um grupo muito pequeno de sertanejos que seguiam um curandeiro, o \"santo monge\" José Maria, com o intuito de formar uma comunidade autônoma, onde todos viveriam em comunhão de bens. No entanto, com o tempo ganhou força e até ex-combatentes da Revolução Federalista se juntaram ao movimento.</p> ",
    dica: "<br /> <p> Após a rendição do último líder dos insurgentes, houve a assinatura do acordo de limites entre os estados a qual pertencia a área contestada. O estado, cujo território atual compreende a maior parte da região do conflito, passou a fazer fronteira com a Argentina e Paraguai, enquanto que o outro estado deixou de fazer fronteira com um dos estados brasileiros.</p>",
    correctAnswer: "SC"
}, {
    conflito: "<h2>O Cerco da Lapa</h2><br /> <br/><strong> Clique no estado em que ocorreu esse conflito. </strong> ",
    infoEstado: "<br /> <p> Cultura derivada dos imigrantes majoritariamente europeus (portugueses, italianos, alemães e poloneses).</p>",
    infoConflito: " <br /> <p>O Cerco da Lapa foi um episódio militar (Exército Brasileiro, Guarda Nacional, Polícia Militar do estado e voluntários) que ocorreu durante a Revolução Federalista em 1894, quando a cidade de Lapa tornou-se arena de um sangrento confronto entre as tropas republicanas, os chamados pica-paus (legalistas), e os maragatos (federalistas), contrários ao sistema presidencialista de governo. Os legalistas resistiram bravamente ao cerco por 26 dias, mas sucumbiram pela falta de munição e comida. A lendária batalha deu ao Marechal Floriano Peixoto, chefe da República, tempo suficiente para reunir forças e deter as tropas federalistas.</p> ",
    dica: "<br /> <p> Esse estado também é conhecido como a terra dos pinheirais.</p>",
    correctAnswer: "PR"

}];

/*************************************** FIM DAS PERGUNTAS ***************************************/


var random_01;
var regSel=false,perguntaOK; //bool
var estadoReg, regiao, i,j;
var zIndReg, zIndEst;
var tentativa;

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
	regSel=true;

	perguntaOK=0;
	do{
	    random_01=Math.floor(Math.random()*perguntasSul.length);

	    zIndEst= getStyle(perguntasSul[random_01].correctAnswer,"z-index");
	    if(zIndEst!==150){ 
		perguntaOK=1;
	    }
	}while(!perguntaOK);

	document.getElementById("tabPergunta").innerHTML=perguntasSul[random_01].conflito;
	document.getElementById("infoConf").innerHTML=perguntasSul[random_01].infoConflito;
	document.getElementById("infoGeo").innerHTML=perguntasSul[random_01].infoEstado;
	
	tentativa=0;

	// Eleve os estados que não foram virados apenas
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

	    // Abaixe os estados que não foram virados apenas
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

    document.getElementById("tabPergunta").innerHTML="<h2>Selecione uma região.</h2>";
    document.getElementById("infoConf").innerHTML="";
    document.getElementById("infoGeo").innerHTML="";
    $('.nav-pills a[href="#tabPergunta"]').tab('show');

}

function checaResp(id_state){

    zIndEst = getStyle(id_state,"z-index");
    if(zIndEst!==150){
	tentativa++;
	if(perguntasSul[random_01].correctAnswer===id_state){
	    // se acertou
	    alert("Correto!");
	    switchState(id_state);
	    showReg();
	    regSel=false;
	} else if (tentativa===1){
	    // se errou pela primeira vez

	    document.getElementById("dica").innerHTML=perguntasSul[random_01].dica;
            $('.nav-pills a[href="#dica"]').toggleClass('disabled');
	    $('.nav-pills a[href="#dica"]').attr('data-toggle','pill');
	    $('.nav-pills a[href="#dica"]').tab('show');

    
	    alert("Estado incorreto! Tem mais uma tentativa.");
	    

	} else {
	    // se acertou ou errou após a dica
	    alert("Estado incorreto!");
	    showReg();
	    regSel=false;
	}
	
	if (tentativa>1){
	    $('.nav-pills a[href="#dica"]').toggleClass('disabled');
	    $('.nav-pills a[href="#dica"]').attr('data-toggle','');
	}
    }
}

function switchState(id_state) {
    document.getElementById(id_state).classList.add('switch');
    document.getElementById(id_state).style.zIndex=150;    
}

function switchReg(id_reg) {
    document.getElementById(id_reg).classList.add('switch');
    document.getElementById(id_reg).style.zIndex=150;    
}



//regioes.forEach(regiao => regiao.addEventListener('click', hideReg));



