function piglatinise(text) {
  
  var arr = text.split(/(?=[.\s]|\b)/);
  
  for (var i = 0; i < arr.length; i++){
    if (arr[i].match(/[a-z]/i)) {
      

      var disassemble = [];
      var firstLetter = arr[i].charAt(0);

      for (var j=1; j<arr[i].length; j++){
        disassemble.push(arr[i].charAt(j));
      }

      disassemble.push(firstLetter);


      if(disassemble[0] == disassemble[0].toLowerCase() && disassemble[disassemble.length -1] == disassemble[disassemble.length -1].toUpperCase()){
        
        disassemble[0] = disassemble[0].toUpperCase();
        disassemble[disassemble.length -1] = disassemble[disassemble.length -1].toLowerCase();
      }

        disassemble = disassemble.join("");
        disassemble == disassemble.toUpperCase() ? disassemble = disassemble + "YA" : disassemble = disassemble + "ya";

      arr[i] = disassemble;
    }
  }

console.log(arr.join(""));

}

piglatinise(prompt("Please insert the text to piglatinise!"));