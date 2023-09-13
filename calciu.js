const input = document.querySelector('.input-text');
const buttons = document.querySelectorAll('.buttons div');
let str = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked');
        const value = button.innerText;
        console.log(value);
        if(value == 'AC'){
            input.innerText="0";
            str="";
        }
        else if(value == 'DEL'){
            if(str != ''){
                str = str.slice(0,-1);
                if(str == '')
                input.innerText = '0';
                else
                input.innerText = str;
            }
        }
        else if(value == '='){
            calculate(str);
        }
        else{
            str=str.concat(value);
            input.innerText=str;        
        }
    })
})

function calculate(event){
    input.innerText="";
    str = '';
    try {
      input.innerText=eval(event);
    }
    catch (error){
      input.innerText="Invalid Expression";
    }
  }