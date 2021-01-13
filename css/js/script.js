// Array of various games
// java
const JavaQues = [
  "Which of the following option leads to the portability and security of Java?",
  "Which of the following is not a Java features?",
  "The u0021 article referred to as a?",
  "Which of the following is a valid declaration of a char?",
  "Which of the following is a valid long literal?",
  "What is the use of the intern() method?",
  "Which of the following is a marker interface?",
  "Which of the following is a reserved keyword in Java?",
  "Which keyword is used for accessing the features of a package?",
  "In java, jar stands for_____.",
];
const JavacorrectAns = [
  "Bytecode is executed by JVM",
  "Use of pointers",
  "Unicode escape sequence",
  "char ch = ''utea';",
  "0xnf029L",
];
const JavaOpt = [
  [
    "Bytecode is executed by JVM",
    "The applet makes the Java code secure and portable",
    "Use of exception handling",
    "Dynamic binding between objects",
  ],
  ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
  ["Unicode escape sequence", "Octal escape", "Hexadecimal", "Line feed"],
  [
    "char ch = '\'utea\';",
    "char ca = \'tea\';",
    "char cr = \'u0223;",
    "char cc = \'itea\';",
  ],
  ["ABH8097", "L990023", "904423", "0xnf029L"],
  [
    "It returns the existing string from memory",
    "It creates a new string in the database",
    "It modifies the existing string in the database",
    "None of the above",
  ],
  [
    "Runnable interface",
    "Remote interface",
    "Readable interface",
    "Result interface",
  ],
  ["object", "strictfp", "main", "system"],
  ["package", "main", "extends", "Import"],
  [
    "Java Archive Runner",
    "Java Application Resource",
    "Java Application Runner",
    "None of the above",
  ],
];
const JavaAns = ["a", "c", "a", "a", "d", "a", "b", "b", "a", "d"];
const JavaHintAns = [
  "Either a or c",
  "Either d or c",
  "Either d or a",
  "Either a or c",
  "Either d or b",
  "Either b or a",
  "Either b or c",
  "Either b or d",
  "Either d or a",
  "Either d or c",
];
//c
const CQues = [
  "What is the 16-bit compiler allowable range for integer constants?",
  "What is required in each C program?",
  "What is a lint?",
  'What is the output of this statement printf("%d", (a++))?',
  "What does this declaration mean? int x : 4;",
  "How many times will the following loop execute? for(j = 1; j <= 10; j = j-1)",
  "Which one of the following is a loop construct that will always be executed once?",
  "Which of the following best describes the ordering of destructor calls for stack-resident objects in a routine?",
  "How many characters can a string hold when declared as follows? char name[20]",
  "Directives are translated by the",
];
const COpt = [
  [
    "-3.4e38 to 3.4e38",
    "-32767 to 32768",
    "-32668 to 32667",
    "-32768 to 32767",
  ],
  [
    "The program must have at least one function.",
    "The program does not require any function.",
    "Input data",
    "Output data",
  ],
  ["C compiler", "Interactive debugger", "Analyzing tool", "C interpreter"],
  [
    "The value of (a + 1)",
    "The current value of a",
    "Error message",
    "Garbage",
  ],
  [
    "X is a four-digit integer.",
    "X cannot be greater than a four-digit integer.",
    "X is a four-bit integer.",
    "None of the these",
  ],
  ["Forever", "never", "1", "10"],
  ["while", "for", "switch", "do while"],
  [
    "The first object created is the first object destroyed; last created is last destroyed.",
    "The first object destroyed is the last object destroyed; last created is first destroyed.",
    "The order is undefined and may vary from compiler to compiler.",
    "None of these",
  ],
  ["18", "20", "40", "0"],
  ["Pre-processor", "Compiler", "Linker", "Editor"],
];
const CAns = ["d", "a", "c", "c", "c", "a", "d", "b", "b", "a"];
const CHintAns = [
  "Either d or c",
  "Either a or c",
  "Either c or a",
  "Either a or c",
  "Either c or b",
  "Either b or a",
  "Either d or c",
  "Either b or d",
  "Either b or a",
  "Either a or c",
];
//c++
const CPlusQues = [
  "Which of the following is the correct syntax to print the message in C++ language?",
  "Which of the following is the correct identifier?",
  "Which of the following is the address operator?",
  " Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
  "The programming language that has the ability to create new data types is called ?",
  "Which of the following comment syntax is correct to create a single-line comment in the C++ program?",
  "C++ is a ___ type of language.",
  "Which of the following is the correct syntax for declaring the array?",
  "Which type of memory is used by an Array in C++ programming language?",
  'In C++, for what purpose the "rank()" is used?',
];
const CPlusOpt = [
  [
    'cout <<"Hello world!";',
    "Cout << Hello world! ;",
    'Out <<"Hello world!;',
    "None of the above",
  ],
  ["$var_name", "VAR_123", "varname@", "None of the above"],
  ["#", "%", "&", "$"],
  ["Encapsulation", "Inheritance", "Polymorphism", "All of the above"],
  ["Overloaded", "Encapsulated", "Reprehensible", "Extensible"],
  ["//comment", "/comment", "/*comment*/", "none of these"],
  ["High level", "low level", "middle level", "none of these"],
  ["int array []", "int array [5]", "Array[5]", "int array[]=new int()"],
  ["Contiguous", "Non-Contiguous", "both a and b", "none of these"],
  [
    "It returns the size of each dimension",
    "It returns the maximum number of elements that can be stored in the array",
    "It returns the dimension of the specified array",
    "none of these",
  ],
];
const CPlusAns = ["a", "b", "c", "d", "c", "a", "c", "b", "a", "c"];
const CPlusHintAns = [
  "Either a or c",
  "Either b or c",
  "Either c or a",
  "Either d or c",
  "Either c or b",
  "Either b or a",
  "Either b or c",
  "Either b or d",
  "Either d or a",
  "Either d or c",
];
//python
const PythonQues = [
  "What is the maximum possible length of an identifier?",
  "Who developed the Python language?",
  "In which year was the Python language developed?",
  "In which language is Python written",
  "Which one of the following is the correct extension of the Python file?",
  "What do we use to define a block of code in Python language?",
  "Which character is used in Python to make a single line comment?",
  "Which of the following statements is correct regarding the object-oriented programming concept in Python?",
  "Which of the following declarations is incorrect?",
  "Why does the name of local variables start with an underscore discouraged?",
];
const PythonOpt = [
  ["19", "56", "4", "None of the above"],
  ["Zim Den", "Guido van Rossum", "Niene Stom", "Wick van Rossum"],
  ["1995", "2000", "1978", "1989"],
  ["english", "c++", "c", "c and c++"],
  [".py", ".pyth", ".p", "none of the above"],
  ["Key", "brackets", "indentation", "none of the above"],
  ["/", "//", "#", "!"],
  [
    "Classes are real-world entities while objects are not real",
    "Objects are real-world entities while classes are not real",
    "Both objects and classes are real-world entities",
    "all of the above",
  ],
  ["_x = 2", "__x = 3", "__xyz__ = 5", "None of these"],
  [
    "To identify the variable",
    "It confuses the interpreter",
    "It indicates a private variable of a class",
    "None of these",
  ],
];
const PythonAns = ["a", "b", "d", "c", "a", "c", "c", "b", "d", "c"];
const PythonHintAns = [
  "Either a or c",
  "Either b or c",
  "Either d or a",
  "Either a or c",
  "Either a or b",
  "Either c or a",
  "Either b or c",
  "Either b or d",
  "Either d or a",
  "Either d or c",
];
// variables
var game,
  curr_score = 0,
  qcount = 0,
  count = 0,
  lifeline1Status = 0,
  lifeline2Status = 0;
//
//this assigns the game on button clicked
document.querySelector("#java").addEventListener("click", function () {
  game = "java";
  document.querySelector("#java").style.backgroundColor = "blue";
  document.querySelector("#java").style.color = "white";
  document.querySelector("#c").style.backgroundColor = "white";
  document.querySelector("#c").style.color = "blue";
  document.querySelector("#cplus").style.backgroundColor = "white";
  document.querySelector("#cplus").style.color = "blue";
  document.querySelector("#python").style.backgroundColor = "white";
  document.querySelector("#python").style.color = "blue";
  restartValues();
  startTimer();
  Quiz(game);
});
document.querySelector("#c").addEventListener("click", function () {
  game = "c";
  document.querySelector("#java").style.backgroundColor = "white";
  document.querySelector("#java").style.color = "blue";
  document.querySelector("#c").style.backgroundColor = "blue";
  document.querySelector("#c").style.color = "white";
  document.querySelector("#cplus").style.backgroundColor = "white";
  document.querySelector("#cplus").style.color = "blue";
  document.querySelector("#python").style.backgroundColor = "white";
  document.querySelector("#python").style.color = "blue";
  restartValues();
  startTimer();
  Quiz(game);
});
document.querySelector("#cplus").addEventListener("click", function () {
  game = "cplus";
  document.querySelector("#java").style.backgroundColor = "white";
  document.querySelector("#java").style.color = "blue";
  document.querySelector("#c").style.backgroundColor = "white";
  document.querySelector("#c").style.color = "blue";
  document.querySelector("#cplus").style.backgroundColor = "blue";
  document.querySelector("#cplus").style.color = "white";
  document.querySelector("#python").style.backgroundColor = "white";
  document.querySelector("#python").style.color = "blue";
  restartValues();
  startTimer();
  Quiz(game);
});
document.querySelector("#python").addEventListener("click", function () {
  game = "python";
  document.querySelector("#java").style.backgroundColor = "white";
  document.querySelector("#java").style.color = "blue";
  document.querySelector("#c").style.backgroundColor = "white";
  document.querySelector("#c").style.color = "blue";
  document.querySelector("#cplus").style.backgroundColor = "white";
  document.querySelector("#cplus").style.color = "blue";
  document.querySelector("#python").style.backgroundColor = "blue";
  document.querySelector("#python").style.color = "white";
  restartValues();
  startTimer();
  Quiz(game);
});
//
// functions
function Quiz() {
  //enableAll();
  if (game === "java") {
    if (count==JavaQues.length) {
      result();
    } else {
      enableBtns();
      count++;
      GenerateRandomNum();
      DisplayQues(JavaQues, JavaOpt, qcount);
    }
  }
  if (game === "c") {
    if (count == JavaQues.length) {
      result();
    } else {
      enableBtns();
      count++;
      // this generates random questions from array
      GenerateRandomNum();
      DisplayQues(CQues, COpt, qcount);
    }
  }
  if (game === "cplus") {
    if (count==JavaQues.length) {
      result();
    } else {
      enableBtns();
      count++;
      GenerateRandomNum();
      DisplayQues(CPlusQues, CPlusOpt, qcount);
    }
  }
  if (game === "python") {
    if (count==JavaQues.length) {
      result();
    } else {
      enableBtns();
      count++;
      GenerateRandomNum();
      DisplayQues(PythonQues, PythonOpt, qcount);
    }
  }
}
// this function to display question and options
function DisplayQues(quesarr, optarr, index) {
  document.querySelector(".questionNoBox").innerHTML = "Question no " + count;
  document.querySelector(".questionBox").innerHTML = quesarr[index];
  document.querySelector("#opt1").innerHTML = optarr[index][0];
  document.querySelector("#opt2").innerHTML = optarr[index][1];
  document.querySelector("#opt3").innerHTML = optarr[index][2];
  document.querySelector("#opt4").innerHTML = optarr[index][3];
}
function DisplayScore(score) {
  document.querySelector(".score_tab").innerHTML = "Score-" + score + "/10";
}
// this checks the answer
function checkans(value) {
  if (game === " ") {
    alert("Select a game");
  }
  if (game === "java") {
    if (value === JavaAns[qcount]) {
      curr_score++;
    }
  }
  if (game === "c") {
    if (value === CAns[qcount]) {
      curr_score++;
    }
  }
  if (game === "cplus") {
    if (value === CPlusAns[qcount]) {
      curr_score++;
    }
  }
  if (game === "python") {
    if (value === PythonAns[qcount]) {
      curr_score++;
    }
  }
  qcount++;
  seconds=30;
  DisplayScore(curr_score);
  Quiz();
}
function result() {
  hideAll();
  restartValues();
  document.querySelector(".questionNoBox").innerHTML = "Game Ended";
  clearInterval(timer);
  seconds="-";
  displayTime();
  //alert(JavacorrectAns);
}
// timer
var timer,seconds=30,min=5;
function startTimer() {
 if(timer!=0) timer= setInterval(run, 1000);
}
function run(){
  /*if (seconds === 0) {
    min = min - 1;
    seconds = 60;
  } */
  seconds--;
  displayTime();
  if (seconds === 0) {
    displayTime();
    result();
  }
}
function displayTime() {
   document.querySelector("#timer").innerHTML = "Time-"+seconds;
}
var arraylist = [];
function GenerateRandomNum() {
  let ran = Math.floor(Math.random() * 10);
  if (arraylist.includes(ran)) {
    GenerateRandomNum();
  } else {
    console.log(ran);
    arraylist.push(ran);
    qcount = ran;
  }
}
function hideAll() {
  document.querySelector(".questionNoBox").innerHTML = "GAME ENDED";
  document.querySelector(".questionBox").innerHTML = " ";
  document.querySelector("#opt1").innerHTML = " ";
  document.querySelector("#opt2").innerHTML = " ";
  document.querySelector("#opt3").innerHTML = " ";
  document.querySelector("#opt4").innerHTML = " ";
  document.querySelector("#btn1").style.display = "none";
  document.querySelector("#btn2").style.display = "none";
  document.querySelector("#btn3").style.display = "none";
  document.querySelector("#btn4").style.display = "none";
  document.querySelector("#lifeline1Btn").style.display = "none";
  document.querySelector("#lifeline2Btn").style.display = "none";
  document.querySelector(".timer-block").style.display = "none";
}
function enableAll() {
  document.querySelector(".questionBox").innerHTML = " ";
  document.querySelector("#opt1").innerHTML = " ";
  document.querySelector("#opt2").innerHTML = " ";
  document.querySelector("#opt3").innerHTML = " ";
  document.querySelector("#opt4").innerHTML = " ";
  document.querySelector(".questionNoBox").innerHTML = " ";
  document.querySelector("#btn1").style.display = "block";
  document.querySelector("#btn2").style.display = "block";
  document.querySelector("#btn3").style.display = "block";
  document.querySelector("#btn4").style.display = "block";
  document.querySelector("#restartBtn").style.display = "block";
  document.querySelector("#quitBtn").style.display = "block";
  document.querySelector("#lifeline1Btn").style.display = "block";
  document.querySelector("#lifeline2Btn").style.display = "block";
  document.querySelector(".timer-block").style.display = "block";
}
function enableBtns() {
  document.querySelector("#btn1").style.display = "block";
  document.querySelector("#btn2").style.display = "block";
  document.querySelector("#btn3").style.display = "block";
  document.querySelector("#btn4").style.display = "block";
  document.querySelector("#lifeline1Btn").style.display = "block";
  document.querySelector("#lifeline2Btn").style.display = "block";
}
function restartValues() {
  count = 0;
  qcount = 0;
  curr_score = 0;
  DisplayScore(curr_score);
  lifeline1Status = 0;
  lifeline2Status = 0;
  seconds=30;
  clearInterval(timer);
  enableAll();
  enableBtns();
}
//
document.querySelector("#restartBtn").addEventListener("click", function () {
  qcount = 0;
  curr_score = 0;
  count = 0;
  lifeline1Status = 0;
  lifeline2Status = 0;
  seconds = 30;
  enableAll();
  enableBtns();
  DisplayScore(curr_score);
  while(arraylist.length!=0){
    arraylist.pop();
  }
  Quiz(game);
});
document.querySelector("#quitBtn").addEventListener("click", function () {
  qcount = 0;
  curr_score = 0;
  count = 0;
  lifeline1Status = 0;
  lifeline2Status = 0;
  hideAll();
  document.querySelector(".questionBox").innerHTML =
    "You Left !!" + "</br>" + "Select a game to play";
  document.querySelector("#restartBtn").style.display = "none";
  game = " ";
});
document.querySelector("#lifeline2Btn").addEventListener("click", function () {
  if (lifeline2Status === 0) {
    qcount++;
    curr_score++;
    lifeline2Status = 1;
  } else {
    alert("You can use Skip Only ONCE !!");
  }
  displayTime();
  DisplayScore(curr_score);
  Quiz(game);
});
document.querySelector("#lifeline1Btn").addEventListener("click", function () {
  if (lifeline1Status === 0) {
    if (game === "java") {
      alert(JavaHintAns[qcount]);
    } else if (game === "c") {
      alert(CHintAns[qcount]);
    } else if (game === "cplus") {
      alert(CPlusHintAns[qcount]);
    } else if (game === "python") {
      alert(PythonHintAns[qcount]);
    }
    lifeline1Status = 1;
  } else {
    alert("You can use Hint Only ONCE !!");
  }
});
