let display = document.getElementById('calculations');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'Clear':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
            display.innerText += e.target.innerText;
            console.log(e.target.innerText);
        }
    });
});