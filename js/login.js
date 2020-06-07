var note = document.querySelector('.note')
var password = document.querySelector('.password')
var formNone = document.querySelector('.block')
var formBlock = document.querySelector('.none')
note.onclick = function(){
    formNone.style.display = "none";
    formBlock.style.display = "block"
}
password.onclick = function(){
    formBlock.style.display = "none";
    formNone.style.display = "block"
}