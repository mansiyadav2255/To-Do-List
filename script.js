let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function ADD(){
    if (inputs.value.trim() == ""){
        alert("Please Enter Your Task");
    }else{
        let newEle= document.createElement("ol");
        newEle.innerHTML =`${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value ="";
    }
}