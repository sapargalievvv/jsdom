const opener = document.getElementById("opener")
const okno = document.getElementById("modal-overlay")
const close = document.getElementById("close")
const cancel = document.getElementById("pizdec")
opener.addEventListener("click",()=>{
  okno.style.visibility = "visible"
})

close.addEventListener("click",()=>{
  okno.style.visibility = "hidden"
})
cancel.addEventListener("click",()=>{
  okno.style.visibility = "hidden"
})