let display = document.getElementById('calculations');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'Clear':
                display.innerText = '';
                break;
            case '=':
                try{
                    if(display.innerText != ''){
                        display.innerText = eval(display.innerText);
                    } else {
                        display.innerText = '';
                    }
                } catch {
                    display.innerText = 'Error!!!';
                }
                
                break;
            default:
            display.innerText += e.target.innerText;
            console.log(e.target.innerText);
        }
    });
});