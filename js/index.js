function onInit() {
  console.log("ready");
}

var hebToEng = [
  ["א", "a"],
  ["ב", "b"],
  ["ג", "g"],
  ["'ג", "g"],
  ["ד", "d"],
  ["ה", "h"],
  ["ו", "v"],
  ["ז", "z"],
  ["ח", "kh"],
  ["ט", "t"],
  ["י", "y"],
  ["כ", "k"],
  ["ל", "l"],
  ["מ", "m"],
  ["נ", "n"],
  ["ס", "s"],
  ["ע", "a"],
  ["'ע", "a"],
  ["פ", "p"],
  ["צ", "ts"],
  ["ק", "k"],
  ["ר", "r"],
  ["ש", "sh"],
  ["ת", "t"],
  ["ך", "k"],
  ["ם", "m"],
  ["ן", "n"],
  ["ף", "p"],
  ["ץ", "ts"],
  [" ", " "],
];

function convertToEng() {
  var hebText = document.querySelector(".hebTxt")?.value;

  console.log(hebText);
  var result = "";
  for (var i = 0; i < hebText.length; i++) {
    for (var j = 0; j < hebToEng.length; j++) {
      if (hebText[i] == hebToEng[j][0]) {
        if (hebText[i + 1] == "/n") {
          result += hebToEng[j][1] + "/n";
          i++;
        } else result += hebToEng[j][1];
      }
    }
  }
  document.querySelector(".engTxt").innerHTML = result;
}
