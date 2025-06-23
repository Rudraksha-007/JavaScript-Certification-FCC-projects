const numberInput=document.getElementById("number");
const submitBtn=document.getElementById("convert-btn");
const outputDiv=document.getElementById("output");
const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];
const updateUI=(str)=>{
    if(str==="invalidInp"){
        outputDiv.style.backgroundColor='#850000';
        outputDiv.style.color='#ffadad';
        outputDiv.style.padding='5%';
        outputDiv.style.border='1px solid #ffadad';
        outputDiv.style.borderRadius='5px';
    }
    if(str==="valid"){
        outputDiv.style.backgroundColor='#4635B1';
        outputDiv.style.color='#white';
        outputDiv.style.fontFamily=`'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
        outputDiv.style.padding='5%';
        outputDiv.style.border='1px solid white';
        outputDiv.style.borderRadius='5px';
    }
    outputDiv.classList.toggle("hidden");
}
const convert=()=>{
    outputDiv.innerText=``;
    
    if(numberInput.value===""){
        outputDiv.innerText=`Please enter a valid number`;
        updateUI("invalidInp");
        return;
    }
    let x=parseInt(numberInput.value);
    if(x<0){
        outputDiv.innerText=`Please enter a number greater than or equal to 1`;
        updateUI("invalidInp");
        return;
    }
    if(x>=4000){
        outputDiv.innerText=`Please enter a number less than or equal to 3999`;
        updateUI("invalidInp");
        return;
    }
    ref.forEach((arr)=>{
        while(x>=arr[1]){
            outstr.push(arr[0]);
            x-=arr[1];
        }
    });
    const out=outstr.join('');
    outputDiv.innerText=`${out}`;
    updateUI("valid");
};
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convert();
});