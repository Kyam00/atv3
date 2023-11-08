const form = document.getElementById("form");
const ul = document.getElementById("lista");

ul.innerHTML = localStorage.getItem("listataf");

const taf = document.getElementById("taf");
const b1 = document.getElementById("b1");
function logsub(evento){
    evento.preventDefault();
    if (evento.target.taf.value != ""){
        const li = document.createElement("li");
        console.log(evento.target.taf.value);
        li.innerText = evento.target.taf.value;
        li.addEventListener("click", troca);
        ul.appendChild(li);
        const b1 = document.createElement("button");
        b1.innerText = "Apagar";
        b1.addEventListener("click", del);
        b1.style.marginLeft = "1rem";
        li.appendChild(b1);
        localStorage.setItem("listataf", ul.innerHTML)
    }
    else{
        console.log("Vazio")
    }
    
}
form.addEventListener("submit", logsub);
function troca(ev2){
    if(ev2.target.classList.contains("selecionado") == false){
        ev2.target.classList.add("selecionado");
    }
    else{
        ev2.target.classList.remove("selecionado");
    }
}
function del(evento){
    const lid = evento.target.parentElement
    lid.remove()
    localStorage.removeItem("listataf")
    localStorage.setItem("listataf", ul.innerHTML)
    console.log("removi")
}
















































































































































































































































