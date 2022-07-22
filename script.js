let btn = Array.from(document.getElementsByClassName('button')); // This line array.from convert html collection to array and store in btn
let display = document.getElementById('dis');
let Calculation;
btn.map(buttona => {
  // Array maping just work like loop its process the all element
  buttona.addEventListener('click', e => {
    if (e.target.innerText === '=') {
      if (!display.innerText) {
        console.log('Error');
      } else {
        Calculation = eval(display.innerText);
        console.log(Calculation);
        display.innerText += `=${Calculation}`;
      }
    } else if (e.target.innerText === 'CE') {
      display.innerText = '';
    } else if (e.target.innerText === '←') {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      display.innerText += e.target.innerText;
    }
  });
});

//keybord Event

document.addEventListener('keydown', e => {
  console.log(e.key);
  switch (e.key) {
    case '=':
      if (!display.innerText) {
        console.log('Error');
      } else {
        Calculation = eval(display.innerText);
        console.log(Calculation);
        display.innerText += `=${Calculation}`;
      }
      break;
    case 'Backspace':
      display.innerText = display.innerText.slice(0, -1);
      break;
    case 'Delete':
      display.innerText = '';
      break;
    default:
      if (e.key === 'Shift' || e.key === 'Control' || e.key == 'NumLock') {
        console.log('EROOR');
      } else {
        display.innerText += e.key;
      }
  }
});
