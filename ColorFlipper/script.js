const button = document.getElementById('btn');
const color = document.querySelector(".color");
const colors= ["green", "red", "blue", "grey", "purple", "black"];

button.addEventListener("click", function(){
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

    console.log(randomNumber)
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};