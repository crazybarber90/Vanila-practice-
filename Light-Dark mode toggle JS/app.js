const toggle = document.getElementById("toggle");
const label = document.getElementById("label");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle('dark',
    e.target.checked);
    if(toggle.checked){
        label.innerText="Use Light mode"
    }else {
        label.innerText="Use Dark mode";
    }
});