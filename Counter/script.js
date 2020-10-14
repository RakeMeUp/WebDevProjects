//set initial count
let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('reset')){
            count = 0;
        }else if(styles.contains('increase')){
            count++;
        }
        value.textContent = count;
    })
})
