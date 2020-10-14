const reviews = [
    {
        id: 1,
        name: "Lola Moana",
        job: "Web Developer",
        img: "img/img2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel eleifend lorem, imperdiet eleifend dui. Ut mollis, nulla eu tempor. "
    },
    {
        id: 2,
        name: "Kale Dylan",
        job: "UX/UI Manager",
        img: "img/img1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula venenatis libero, non pharetra erat bibendum sed. Nunc quis massa. "
    },
    {
        id: 3,
        name: "Helen Koal",
        job: "Just a janitor",
        img: "img/img4.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet augue nisl, et congue quam porta nec. Proin consequat m."
    },
    {
        id: 4,
        name: "Ben Raker",
        job: "King of Coal",
        img: "img/img5.jpg",
        text: "amet, consectetur adiprdiet auguerem ipsum dolor sit  nisl, et congue quam porta nec. Piscing elit. Aliquam imperoin consequat m"
    }
]

//selecting items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const randomButton = document.querySelector('.random-button');

//setting starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextButton.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    };
    showPerson();
});

prevButton.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    };
    showPerson();
})

randomButton.addEventListener('click',function (){
    currentItem = Math.floor(Math.random()* 3);
    showPerson();
    }
)

