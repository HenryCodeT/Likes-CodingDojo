let count = 0;
function addLike(element) {
    let prevSibling = element.closest(".card-user").querySelector("#like")
    count++
    prevSibling.innerText=`${count} like(s)`
}
function addStyleOver(event) {
    event.classList.replace("btn-1","btn-2")
}
function addStyleOut(event) {
    event.classList.replace("btn-2","btn-1") 
}