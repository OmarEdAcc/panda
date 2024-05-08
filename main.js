let charNameEL = document.getElementById("char-name");

// KF Panda Search
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("char-in").value.toLowercase();

  if (name === "po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "Tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "Mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the bug!";
    document.getElementById("char-img").src = "img/Mantis.png";
  } else if (name === "Monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "I am the monkey!";
    document.getElementById("char-img").src = "img/Monkey.png";
  } else if (name === "Viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML = "I dont need to bite!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "Crane") {
    document.getElementById("char-name").innerHTML = "crane";
    document.getElementById("char-quote").innerHTML = "We dont need to fight.";
    document.getElementById("char-img").src = "img/crane.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "---------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

// theme
document.getElementById("btnT").addEventListener("click", changeTheme);

function changeTheme() {
  nameTheme = document.getElementById("theme-in").value.toLowerCase();

  if (nameTheme === "black") {
    document.getElementById("theBody").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("theBody").style.color = "white";
  }
}
