let screenValue="";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let buttonText=e.target.innerHTML;
        
        
        if(buttonText=='='){
            screenValue=eval(screenValue);
            document.querySelector('input').value = screenValue;
        }

        
        else if(buttonText=='C'){
            screenValue="";
            document.querySelector('input').value = screenValue;
        }

            else{
                console.log(e.target)
                screenValue =screenValue +e.target.innerHTML;
                document.querySelector('input').value=screenValue;
                
            }
        })
    })
