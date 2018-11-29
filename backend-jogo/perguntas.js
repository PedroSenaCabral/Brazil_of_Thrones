
//array com perguntas do sul
(function() {
  var questions = [{
    question: "Guerra dos Farrapos ou Revolu��o Farroupilha foi como ficou conhecida a revolu��o ou guerra regional e separatista,de car�ter republicano, contra o governo imperial do Brasil, e que resultou na declara��o de independ�ncia da prov�ncia como estado republicano.Estendeu-se de 20 de setembro de 1835 a 1 de mar�o de 1845.  Onde aconteceu a guerra dos farrapos?",
    choices: ["SC", "RS", "PR"],
    correctAnswer: 1
  }, {
    question: "Onde aconteceu a guerra do contestado?",
    choices: ["SC", "RS", "PR"],
    correctAnswer: 0
  }, {
    question: "Onde aconteceu o cerco da Lapa?",
    choices: ["SC", "RS", "PR"],
    correctAnswer: 2
  }];
  
  var questionCounter = 0; //N�mero de perguntas
  var selections = []; //Array com as perguntas
  var quiz = $('#quiz'); //Quiz div 
  
  // Iniciar quest�o
  displayNext();
  
  // Fun��o do bot�o proximo
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    //Desabilitar m�ltiplos cliques
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // Fun��o que bloqueia a escolha vazia
    if (isNaN(selections[questionCounter])) {
      alert('Por Favor, escolha uma resposta');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Bot�o voltar
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Bot�o iniciar novamente
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Hover e foco 
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Cria��o da div que cont�m as perguntas
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Cria��o das op��es para respostas
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
  
    }
   
     
    return radioList;
  }
  
  //Fun��o que l� a resposta do usu�rio
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
     if (selections[questionCounter] === questions[questionCounter].correctAnswer) {
      	alert("Voc� ganhou o estado!!");
        //inserir funcao de checar resposta ChecaResp
  
      }

       else{
         alert("Voc� perdeu o estado!!");
          
          }
    
  }
  
  // Exibe a pr�xima quest�o
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

 //fun��o de dica
  function dica(){
  //contar se o clique � maior que 1, se for, mandar alert com dica de acordo com o id da pergunta
 }

 //fun��o que calcula se � a primeira tentativa
   function countClicks(){
   var contador = document.querySelector('.badge');

   document.querySelector('button').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
 });

}
 //fun��o do tempo

 function time(){
  var duracao = Date.now() ; 
}

//fun��o que insere trofeu
  function winner(){
	//tornar visivel a imagem na div dos trofeus

  }	


  // Calcula os pontos do jogador
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
	
      }


        	
    }

	//fazer calculo de m�dia aritmetica de pontos para ganho ou perda do reino
	 if(numCorrect>=2){
            score.append('Voc� ganhou o reino do sul ');
           }else{ score.append('Voc� perdeu o reino do sul '); }
    	//se a media for a permitida, desbloquear trofeu
    score.append(',acertou ' + numCorrect + ' quest�es ' +
                 questions.length + ' parab�ns!!!');
    return score;
  }
})();