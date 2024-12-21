let string = ""; 
let buttons = document.querySelectorAll('.button,.operator');


Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
       
        string = string.replace(/\^/g, "**");
        string = eval(string); 
        document.querySelector('.input').value = string;
      } catch (error) {
        document.querySelector('.input').value = "Error";
        string = "";
      }
    } else if (value === 'AC') {
      string = "";
      document.querySelector('.input').value = string;
    } else {
     
      string += value;
      document.querySelector('.input').value = string;
    }
  });
});
