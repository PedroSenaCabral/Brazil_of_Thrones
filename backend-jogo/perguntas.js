
//array com perguntas do sul
(function() {
  var questions = [{
    question: "Guerra dos Farrapos ou Revolução Farroupilha foi como ficou conhecida a revolução ou guerra regional e separatista,de caráter republicano, contra o governo imperial do Brasil, e que resultou na declaração de independência da província como estado republicano.Estendeu-se de 20 de setembro de 1835 a 1 de março de 1845.  Onde aconteceu a guerra dos farrapos?",
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
  
  var questionCounter = 0; //Número de perguntas
  var selections = []; //Array com as perguntas
  var quiz = $('#quiz'); //Quiz div 
  
  // Iniciar questão
  displayNext();
  
  // Função do botão proximo
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    //Desabilitar múltiplos cliques
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // Função que bloqueia a escolha vazia
    if (isNaN(selections[questionCounter])) {
      alert('Por Favor, escolha uma resposta');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Botão voltar
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Botão iniciar novamente
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
  
  // Criação da div que contém as perguntas
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
  
  // Criação das opções para respostas
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
  
  //Função que lê a resposta do usuário
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
     if (selections[questionCounter] === questions[questionCounter].correctAnswer) {
      	alert("Você ganhou o estado!!");
        //inserir funcao de checar resposta ChecaResp
  
      }

       else{
         alert("Você perdeu o estado!!");
          
          }
    
  }
  
  // Exibe a próxima questão
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

 //função de dica
  function dica(){
  //contar se o clique é maior que 1, se for, mandar alert com dica de acordo com o id da pergunta
 }

 //função que calcula se é a primeira tentativa
   function countClicks(){
   var contador = document.querySelector('.badge');

   document.querySelector('button').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
 });

}
 //função do tempo

 function time(){
  var duracao = Date.now() ; 
}

//função que insere trofeu
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

	//fazer calculo de média aritmetica de pontos para ganho ou perda do reino
	 if(numCorrect>=2){
            score.append('Você ganhou o reino do sul ');
           }else{ score.append('Você perdeu o reino do sul '); }
    	//se a media for a permitida, desbloquear trofeu
    score.append(',acertou ' + numCorrect + ' questões ' +
                 questions.length + ' parabéns!!!');
    return score;
  }
})();