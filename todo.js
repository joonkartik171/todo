a= document.querySelector("button")
b= document.querySelector("input")
c= document.querySelector(".text")


a.addEventListener("click",function(){
    if(b.value === ""){
        alert("please enter the task")
    }
    else {
        let newel= document.createElement("li");
        newel.innerHTML=`${b.value} <i class="fa-solid fa-trash"></i>`;
        c.appendChild(newel);
        b.value = "";

        newel.querySelector("i").addEventListener("click",function(){
            newel.remove()
        })
    }
})