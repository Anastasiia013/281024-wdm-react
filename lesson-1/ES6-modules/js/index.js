import { calcWeightIndex } from "./functions.js";
import NewUser from "./User.js";

const weightIndexForm = document.getElementById("weight-index-form");

weightIndexForm.addEventListener("submit", function(e){
    e.preventDefault();
    const weight = Number(this.querySelector("[name=weight]").value);
    const height = Number(this.querySelector("[name=height]").value);
    
    const weightIndex = calcWeightIndex(weight, height);
    
    const weightIndexContainer = document.getElementById("weight-index");
    weightIndexContainer.textContent = weightIndex;
})

