  function findSmallestNumber(){
    const array = [];
    let input;

    while (true) {
      input = prompt("Enter a number (or type 'done' to finish):");
      if (input.toLowerCase() === 'done') {
        break;
      }
      const number = parseFloat(input);
      if (!isNaN(number)) {
        array.push(number);
      } else {
        alert("Please enter a valid number.");
      }
    } 

    
  }