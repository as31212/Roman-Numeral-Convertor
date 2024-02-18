const userInput = document.getElementById('user-input');
const result = document.getElementById('result');
const convertButton = document.getElementById('convert-button');

const numToRoman = (num) => {
if(!userInput.value){
    alert('Please Input Value');
    return;
}

  let changingNum = Number(num);

  if(changingNum >10000){
    alert('Please Input Smaller Value');
    userInput.value = '';
    return;
  }
  console.log(changingNum);
  let numeral = "";
  const romanNumerals = [
    { numeral: "M", number: 1000 },
    { numeral: "CM", number: 900 },
    { numeral: "D", number: 500 },
    { numeral: "CD", number: 400 },
    { numeral: "C", number: 100 },
    { numeral: "XC", number: 90 },
    { numeral: "L", number: 50 },
    { numeral: "XL", number: 40 },
    { numeral: "X", number: 10 },
    { numeral: "IX", number: 9 },
    { numeral: "V", number: 5 },
    { numeral: "IV", number: 4 },
    { numeral: "I", number: 1 },
  ];
  for (let i = 0; i < romanNumerals.length; i++) {
    if (changingNum / romanNumerals[i].number >= 1) {
      for (let j = 0; j < Math.floor(changingNum / romanNumerals[i].number); j++) {
        numeral += romanNumerals[i].numeral;
      }
      changingNum %= romanNumerals[i].number;
    }
  }
  result.innerText = numeral;
  return;
};

convertButton.addEventListener('click',()=>{
    numToRoman(userInput.value);
})

document.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        numToRoman(userInput.value);
    }
})