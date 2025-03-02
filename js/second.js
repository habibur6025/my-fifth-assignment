let taskCount = 6; 
let myCount = 23;
let completedCount = 0;
let totalCards = 6;
        const taskCountElement = document.getElementById("taskCount");
        const myCountElement = document.getElementById("myCount")
        const buttons = document.querySelectorAll(".completedBtn");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                if (!this.disabled) {
                    taskCount--;
                    myCount++;
                    
                    taskCountElement.textContent = taskCount; 
            myCountElement.textContent = myCount;
                    this.disabled = true; 
                    this.style.backgroundColor = "gray";
                    let h2Text = this.closest(".card1").querySelector("h2").textContent;
                alert("Board updated Succesfully");

if (myCount > 28 || 29 < myCount){
    alert("congrates!!! you have completed all the current task")
}



              





            }



            });
        });