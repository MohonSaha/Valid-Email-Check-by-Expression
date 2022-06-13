var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
const invailMail = displayStyle =>{
    document.getElementById("invalid-mail").style.display = displayStyle;
} 
invailMail("none");
const vailMail = displayStyle =>{
    document.getElementById("valid-mail").style.display = displayStyle;
}  
vailMail("none")


const submitMail = () => {
    // console.log('clicked properly');
    const inputValue = document.getElementById('input-field');
    const inputText = inputValue.value;
    console.log(inputText);


    if(pattern.test(inputText)){
       vailMail("block");
       invailMail("none")

    }
    else{
       invailMail("block");
        vailMail("none");
    
    }
}






