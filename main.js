/* ====================================== QUIZ =================================== */
/* ===================================== State Variables ========================= */

var x = document.getElementById("section1");
var y = document.getElementById("section2");
var z = document.getElementById("section3");
var buttonRow = document.getElementById("btnRow");
var currentQuestion = 0;
var score = 0;
var timeRemain = 30;


var europeQuestions = [
        ['Italy', 'ROME'],
        ['Germany', 'BERLIN'],
        ['Switzlerand', 'BERN'],
        ['England', 'LONDON'],
        ['France', 'PARIS'],
        ['Denmark', 'COPENHAGEN'],
        ['Montenegro', 'PODGORICA'],
        ['Finland', 'HELSINKI'],
        ['Greece', 'ATHENS'],
        ['Hungary', 'BUDAPEST'],
        ['Iceland', 'REYKJAVIK'],
        ['Macedonia', 'SKOPJE']]

var africaQuestions = [
        ['Algeria', 'ALGIERS'],
        ['Angola', 'LUANDA'],
        ['Eritrea', 'ASMARA'],
        ['Zimbabwe', 'HARARE'],
        ['Sudan', 'KHARTOUM'],
        ['Sierra Leone', 'FREETOWN'],
        ['Seychelles', 'VICTORIA'],
        ['Somalia', 'MOGADISHU'],
        ['Ghana', 'ACCRA'],
        ['Botswana', 'GABORONE'],
        ['Burkina Faso', 'OUAGADOUGOU'],
        ['Madagascar', 'ANTANANARIVO']]

var asiaQuestions = [
        ['Afghanistan', 'KABUL'],
        ['Bahrain', 'MANAMA'],
        ['China', 'ASMARA'],
        ['Georgia', 'TBILISI'],
        ['India', 'NEW DELHI'],
        ['Iran', 'TEHRAN'],
        ['Indonesia', 'JAKARTA'],
        ['Japan', 'TOKYO'],
        ['Jordan', 'AMMAN'],
        ['North Korea', 'PYONGYANG'],
        ['Nepal', 'KATHMANDU'],
        ['Singapore', 'SINGAPORE']]

var northAmericaQuestions = [
        ['USA', 'WASHINGTON DC'],
        ['Mexico', 'MEXICO CITY'],
        ['Cuba', 'HAVANA'],
        ['Canada', 'OTTAWA'],
        ['Puerto Rico', 'SAN JUAN'],
        ['Jamaica', 'KINGSTON'],
        ['Bahamas', 'NASSAU'],
        ['Barbados', 'BRIDGETOWN'],
        ['El Salvador', 'SAN SALVADOR'],
        ['Honduras', 'TEGUCIGALPA'],
        ['Nicaragua', 'MANAGUA'],
        ['Panama', 'PANAMA CITY']]

var southAmericaQuestions = [
        ['Brazil', 'BRASILIA'],
        ['Venezuela', 'CARACAS'],
        ['Colombia', 'BOGOTA'],
        ['Zimbabwe', 'HARARE'],
        ['Peru', 'LIMA'],
        ['Bolivia', 'SUCRE'],
        ['Ecuador', 'QUITO'],
        ['Uruguay', 'MONTEVIDEO'],
        ['Paraguay', 'ASUNCION'],
        ['Guyana', 'GEORGETOWN'],
        ['Falkand Islands', 'STANLEY'],
        ['Suriname', 'PARAMARIBO']]

var australasiaQuestions = [
        ['Australia', 'CANBERRA'],
        ['Fiji', 'SUVA'],
        ['Kiribati', 'TARAWA'],
        ['Samoa', 'APIA'],
        ['New Zealnd', 'WELLINGTON'],
        ['Soloman Islands', 'Honiara'],
        ['Papa New Guinea', 'PORT MORESBY'],
        ['Micronesia', 'PALIKIR'],
        ['Marshall Islands', 'MAJURO'],
        ['Vanuatu', 'PORT VILA'],
        ['Tuvalu', 'FUNAFUTI'],
        ['Pitcairn Island', 'ADAMSTOWN']]

/* ================================ Display properties ================================== */

/*x.style.display = 'block';*/
y.style.display = 'block';
z.style.display = 'none';

document.getElementById("countdown").innerHTML = timeRemain;

/* =================================== Functions ====================================== */

document.getElementById("input1")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("nextQuestion").click();
        document.getElementById('input1').value='';
    }
});

function initQuiz(questions) {
    quizQuestions = questions;
    startTimer();
    nextQuestion(quizQuestions);
    buttonRow.style.display = 'none';
};

function nextQuestion (quizQuestions) {
     
      if (currentQuestion < quizQuestions.length - 1) {
        document.getElementById("Question").innerHTML = "What is the capital of " + quizQuestions[currentQuestion]["0"] + "?";
        document.getElementById("nextQuestion").innerHTML = "Next Question";
    }
    
      else /*if (currentQuestion === quizQuestions.length)*/ {
          document.getElementById("Question").innerHTML = "What is the capital of " + quizQuestions[currentQuestion][0] + "?";
          document.getElementById("nextQuestion").innerHTML = "Submit";      
      }
};

function checkAnswer (quizQuestions) { 
    
    var answer = document.getElementById("input1").value.toUpperCase();
    if (answer === quizQuestions[currentQuestion][1]) {
        score++;
    } 
        currentQuestion++;

    if (currentQuestion === quizQuestions.length) {
        document.getElementById("score").innerHTML = "Score: " + score;
        y.style.display = 'none';
        z.style.display = 'block';
        clearInterval(start);
    }
};

function startTimer()
    {
    start = setInterval(function() {
        timeRemain--;
        if (timeRemain>0){
             document.getElementById("countdown").innerHTML = timeRemain;          }

        else {
            y.style.display = 'none';
            z.style.display = 'block';
            document.getElementById("score").innerHTML = "Score: " + score;
            document.getElementById("timeout").innerHTML = "Times up!"
            }    
        }, 1000);
};

function updateUI()
{
    clearInterval(start);
    timeRemain = 30;
    currentQuestion = 0;
    score = 0;
    y.style.display = 'block';
    z.style.display = 'none';
    buttonRow.style.display = 'block';
    document.getElementById("Question").innerHTML = "";
    document.getElementById("countdown").innerHTML = timeRemain;
    quizQuestions = "";
}

/* ================================== BUTTONS ========================================== */
/* ================================== Start Button ============================= */

 /*   document.getElementById("startBtn").onclick = function () {
        event.preventDefault();
        x.style.display = 'none';
        y.style.display = 'block';
};*/

/* ================================== Next Question Button ============================= */
    
    document.getElementById("nextQuestion").onclick = function () {
        checkAnswer(quizQuestions);
        nextQuestion(quizQuestions);
        document.getElementById('input1').value='';
};

/* ============================= Continent buttons ================================== */

    document.getElementById("europe").onclick = function () {
    initQuiz(europeQuestions);    
};

  document.getElementById("northAmerica").onclick = function () {
    initQuiz(northAmericaQuestions);
};

  document.getElementById("southAmerica").onclick = function () {  
    initQuiz(southAmericaQuestions);
};

  document.getElementById("australasia").onclick = function () {
    initQuiz(australasiaQuestions);
};

  document.getElementById("asia").onclick = function () { 
    initQuiz(asiaQuestions);
};

document.getElementById("africa").onclick = function () {
    initQuiz(africaQuestions);  
};

/* ============================= Play Again Button ================================== */

document.getElementById("again").onclick = function () {
    updateUI();
};
