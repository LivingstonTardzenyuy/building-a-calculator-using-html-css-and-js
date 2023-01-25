// function addNums(num1, num2) {}

// function subtractNums(num1, num2) {}
// window.alert("hello world")

let display=document.getElementById("calculator-inputs");
let buttons=Array.from(document.getElementsByClassName("button"));       //we need to cover our elements into an array formate

// window.alert(button)

buttons.map(button=>{          //mapping through our array to provide a call back function
    button.addEventListener("click", (e) =>
    {
        switch(e.target.innerText){

            case "C":
                display.innerHTML="";
                break;
            
            case "=":
                display.innerHTML=eval(display.innerHTML)
                break

            default:
                display.innerText+=e.target.innerText;
        }
    });

});