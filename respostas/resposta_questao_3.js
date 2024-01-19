function sequencia(str) {
    let pilha = [];
    let mapa = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (char === "(" || char === "[" || char === "{") {
        pilha.push(char);
      } 
      else {
        let ultimo = pilha.pop();
        if (char !== mapa[ultimo]) {
          return false;
        }
      }
    }
  
    return pilha.length === 0;
  }
  
  console.log(sequencia('{[()(){}[]]{}}'));
  