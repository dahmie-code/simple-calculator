const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
     let styles = e.currentTarget.classList;

     if(styles.contains('number')) {
         /*if(display.value <= 0){
             display.value='';
         }
         if(display.value === ''){
             display.value = '';
         }*/
         let number = btn.getAttribute('data-num');
         display.value += number;
         } else if(styles.contains('equalSign')){
             if(display.value === ''){
                 alert('input is empty');
             }else {
         let value = eval(display.value);
         display.value = value;
         } 
        } else if(styles.contains('clear')) {
             display.value = 0;
         } else if (styles.contains('on')) {
             display.value = 0;
         } else if(styles.contains('off')){
             display.value ='';

         } else if (styles.contains('del')) {
             display.value = display.value.substring(0, display.value.length - 1);
         }
    });
});

