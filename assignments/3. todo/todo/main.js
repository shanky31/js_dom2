let input = document.querySelector('input');
let ul = document.querySelector(".list");
function handleSubmit (event) {
    console.log(event);
    if (event.keyCode ===13){
        const li = document.createElement('li');
        const btn = document.createElement('button')
        btn.className = "fas fa-times"
        li.innerText= event.target.value;
        ul.appendChild(li);
        li.appendChild(btn);
        }
}


function deleteSubmit (event){
    if (event.target.classList.contains('fa-times')){
        event.target.parentElement.remove();
    }
}
ul.addEventListener('click', deleteSubmit);
document.addEventListener("keydown",handleSubmit);
