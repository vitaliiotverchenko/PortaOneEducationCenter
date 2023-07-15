// script.js
function findUnique() {
    var inputText = document.getElementById("inputText").value;
    var words = inputText.split(" ");
    var uniqueChars = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var charCount = {};
  
      for (var j = 0; j < word.length; j++) {
        var char = word.charAt(j);
        charCount[char] = (charCount[char] || 0) + 1;
      }
  
      for (var j = 0; j < word.length; j++) {
        var char = word.charAt(j);
        if (charCount[char] === 1) {
          uniqueChars.push(char);
          break;
        }
      }
    }
  
    var resultElement = document.getElementById("result");
    if (uniqueChars.length > 0) {
      var firstUniqueChar = uniqueChars[0];
      resultElement.textContent = "Перший унікальний символ: " + firstUniqueChar;
    } else {
      resultElement.textContent = "Унікальний символ не знайдено.";
    }
  }
  