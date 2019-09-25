var input = document.querySelector(".input");
var add = document.querySelector("button");
add.className = "add";
var ul = document.querySelector("ul");
var searchBar = document.querySelector('.outline');
hide = document.querySelector('#hide');
var bookList = [];
function render (arrList){
    ul.innerHTML = "";
    
    arrList.forEach(book => {
        let li = document.createElement('li');
        li.textContent = book;
        ul.appendChild(li);
    });
}

function search (event){
    let query = event.target.value.trim();
    let searchResults = bookList.filter(book => {
        return book.startsWith(query);
    });
    console.log(searchResults);
    render(searchResults);
}

 function enterBooks (event){
     if (event.keyCode === 13 && event.target.value.trim() != "" ) {
         console.log(event.target.value, "inside...")
         book = event.target.value ;
         bookList.push(book);
            isDone = hide.checked;
         if (isDone == true) {
            ul.style.display = "none";
         } else {
            ul.style.display = "block";
         }
         event.target.value = "";
         console.log(bookList);
        
     }
 }
 function addBooks (event) {
    if (event.target.previousElementSibling.value.trim() != "") {
        book = event.target.previousElementSibling.value;
        bookList.push(book);
       
        event.target.previousElementSibling.value = "";
        console.log(bookList);
    }
}
function check (event) {
    
 if (event.target.checked == true){
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
}
}

input.addEventListener('keydown',enterBooks);
add.addEventListener('click',addBooks);
searchBar.addEventListener('keydown',search);
hide.addEventListener('click',check);
