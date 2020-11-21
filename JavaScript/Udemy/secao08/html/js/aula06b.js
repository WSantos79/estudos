let btns = document.querySelectorAll('button');
let ap = document.querySelector('.apx');


// ap.style.width = '500px'; // largura
// ap.style.height ='200px'; // altura



for(let i = 0; i < btns.length; i++){
    

    btns[i].onclick = function(){
         
        // this ou btns.style...
       // document.querySelector('body').style.backgroundColor = this.style.backgroundColor;

       document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1];
    };
}