const fruitItems = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitItems.length; i++){
    const newbtn = document.createElement('button');
    const newbtnTxt = document.createTextNode("Edit");
    newbtn.appendChild(newbtnTxt);
    newbtn.className = "edit-btn";
    fruitItems[i].appendChild(newbtn);
}

// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector(".fruits");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    newLi.className = "fruit";
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';
    const newbtn = document.createElement('button');
    const newbtnTxt = document.createTextNode("Edit");
    newbtn.appendChild(newbtnTxt);
    newbtn.className = "edit-btn";
    newLi.appendChild(newbtn);
    fruits.appendChild(newLi);
});
fruits.addEventListener('click', function(event){
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})
