const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

//Creates an alert on invalid inputs
textInput.setAttribute("oninvalid", "alert('Please input a value')");

checkButton.addEventListener("click", () => {
    
  const inputted = textInput.value;
  const inputtedReformated = inputted.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const inputtedReverse = inputtedReformated.split("").reverse().join("");

  console.log(inputtedReformated);

  if(inputtedReformated.localeCompare(inputtedReverse) === 0) {
    result.innerText = `${inputted} is a palindrome`;
  }
  else {
    result.innerText = `${inputted} is not a palindrome`;
  }

});