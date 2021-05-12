const closedFace = document.querySelector('.closed');
const opendFace = document.querySelector('.open');
const gore = document.querySelector('.up-text');

//add event listener 



closedFace.addEventListener("click", ()=> {
    if(opendFace.classList.contains('open')) {
        opendFace.classList.add('active');
        closedFace.classList.remove('active');
        text.innerText = "Yo, close my eyes!";

        
    }
        
});

opendFace.addEventListener("click", ()=> {
    if (closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        opendFace.classList.remove('active');
        text.innerText = "Click to open my eyes buddie!";


    }
});

const text = document.createElement("h1");
text.innerText = '';
text.classList.add('text');
gore.appendChild(text);