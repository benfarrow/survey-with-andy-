// function to calculate the result of the survey
function tabulateAnswers() {
   
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
    var c6score = 0;
    var c7score = 0;
    var c8score = 0;
    var c9score = 0;
    var c10score = 0;
    var c11score = 0;
    var c12score = 0;
    var c13score = 0;
    var c14score = 0;
    var c15score = 0;
    var c16score = 0;
    var c17score = 0;
    var c18score = 0;
    var c19score = 0;
    var c20score =0;
​
// again i dont think we need an individual score for each one, just a total, however only
// problem with this method is we would need something that stops people clicking multiple
// buttons to increase maxscore. This would also let people change there answer, in which case
// it may be better to use the c1-20 var u listed and reset the value for eg c1score if they
// press c1 buttons 1-4. Thoughts

//     var choices = document.getElementsByTagName('input');
// ​
//     for (i=0; i<choices.length; i++) {
// ​
//       if (choices[i].checked) {
// ​
//         if (choices[i].value == 'c1') {
          if ('check1') {
            return (maxscore += 1);

          }else if ('check2'){
            return (maxscore +=2);

          }else if ('check3'){
            return (maxscore +=3);

          }else if ('check4'){
              return (maxscore +=4);
          }
// checks which button is clicked then adds a value to c1score based on button clicked.

// i think we can remove choices part, if we copy paste this if/else selection for each
// question. May want to substitue maxscore for c1score for individual totals, which would
// help with changing clicks as i wrote above
          
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
        if (choice[i].value == 'c5') {
            c5score = c5score + 1;
        }
        if ()
        
      }
    }
    
    
    
    var maxscore = Math.max(c1score,c2score,c3score,c4score);
    // may want to change it to maxscore = c1score+c2score etc -> c20score
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = 
    }
    if (c2score == maxscore) { // If user chooses the sec"You are an altruistic coder! Yond choice the most, this outcome will be displayed.
      answerbox.innerHTML = 
    }
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerbox.innerHTML = 
    }
    if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = 
    }
    // If you add more choices, you must add another response below.
  }
//   then display this here instead:

if (maxscore >=10 && maxscore <18)
  answerbox.innerHTML="Your social style is Analytical!"
  if (maxscore >=18 && maxscore <25)
  answerbox.innerHTML="Your social style is Amiable!"
  if (maxscore >=25 && maxscore <32)
  answerbox.innerHTML="Your social style is Expressive!"
  if (maxscore >=32 && maxscore <=40)
  answerbox.innerHTML="Your social style is Driver!" 

  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }