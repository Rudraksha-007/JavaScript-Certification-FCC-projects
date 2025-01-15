const resultString = document.getElementById("result");
const triggerButton = document.getElementById("check-btn");

const palindrome_Checker = () => {
    const  str= document.getElementById("text-input").value;
    //clean the string : 
    let inputString = str.toLowerCase().replace(/[\s\.\,\_\-\(\)\:\\\/\-]/g, ''); 
    if(inputString.length===0){
        alert("Please input a value");
        return;
    }
    let left = 0, right = inputString.length - 1;
    while (left < right) {
        if (inputString[left] === inputString[right]) {
            left++;
            right--;
        } else {
            resultString.style.display = "block";
            resultString.innerText = `${str} is not a palindrome`;
            resultString.style.color="red";
            return;
        }
    }
    resultString.style.display = "block";
    resultString.innerText = `${str} is a palindrome`;
    resultString.style.color="green";
};
triggerButton.addEventListener("click", palindrome_Checker);