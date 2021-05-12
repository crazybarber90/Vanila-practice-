const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestias numquam ab expedita quia eveniet, omnis excepturi tempora voluptatem possimus nam minus adipisci exercitationem recusandae dolorum eum saepe hic quisquam voluptas non reiciendis? Corporis, recusandae.",
    },
    {
        id: 2,
        name: "Brad Luter",
        job: "web developer",
        img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestias numquam ab expedita quia eveniet, omnis excepturi tempora voluptatem possimus nam minus adipisci exercitationem recusandae dolorum eum saepe hic quisquam voluptas non reiciendis? Corporis, recusandae.",
    },
    {
        id: 3,
        name: "Joe Matew",
        job: "web developer",
        img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestias numquam ab expedita quia eveniet, omnis excepturi tempora voluptatem possimus nam minus adipisci exercitationem recusandae dolorum eum saepe hic quisquam voluptas non reiciendis? Corporis, recusandae.",
    },


];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function (){
 showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});