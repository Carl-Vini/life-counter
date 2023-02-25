const button = document.querySelectorAll('.container-player-increment');
const life = document.querySelector('.number');

console.log(button.parentNode);
button.forEach((element) => {
    element.addEventListener('click', (event) => {
        //console.log(element);
        console.log(event.target.parentNode);
        lifeManipulation(event.target.textContent, event.target.parentNode);
        // console.log(life.textContent);
        console.log(event.target.parentNode);
        
    } )
})


 function lifeManipulation (operation, exchange) {
    const life = exchange.querySelector('.number');
     if (operation === "◄") {
        life.textContent = parseInt(life.textContent) - 1;
     }
     else {
        life.textContent = parseInt(life.textContent) + 1;
     }
 } 



 console.log()