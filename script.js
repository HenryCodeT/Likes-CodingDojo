let element1 = document.getElementById("likes1");
let element2 = document.getElementById("likes2");
let element3 = document.getElementById("likes3");

let count1 = 0;
let count2 = 0;
let count3 = 0;

function addLike(event) {
    if (event.id==="btn-1") {
        count1++
        element1.innerText=`${count1} like(s)`
    }else if(event.id==="btn-2"){
        count2++
        element2.innerText=`${count2} like(s)`
    }else if(event.id==="btn-3"){
        count3++
        element3.innerText=`${count3} like(s)`
    }
}
function addStyleOver(event) {
    event.classList.replace("btn-1","btn-2")
}
function addStyleOut(event) {
    event.classList.replace("btn-2","btn-1") 
}