let output = document.querySelector(".text");
let vals = document.querySelectorAll(".val");
let clearBtn = document.querySelector(".AC");
let deleteBtn = document.querySelector(".DEL");
let equalBtn = document.querySelector(".equal");


vals.forEach(val=>{
    val.addEventListener(
        "click",()=>{
            output.value += val.value
        });
});


clearBtn.addEventListener("click" ,() => {
    output.value = "";
});

deleteBtn.addEventListener("click" ,() => {
    output.value =  output.value.slice(0,-1);
});


equalBtn.addEventListener("click" , () => {
    output.value = eval(output.value)
});