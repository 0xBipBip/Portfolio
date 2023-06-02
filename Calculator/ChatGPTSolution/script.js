function appendCharacter(char) {
    document.getElementById('result').value += char;
  }
  
  function deleteCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    var result = document.getElementById('result').value;
    var calculation = eval(result);
  
    document.getElementById('result').value = calculation;
  }
  