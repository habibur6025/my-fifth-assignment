let taskCount = 6; 
let myCount = 23;
let completedCount = 0;
let totalCards = 6;
        const taskCountElement = document.getElementById("taskCount");
        const myCountElement = document.getElementById("myCount")
        const buttons = document.querySelectorAll(".completedBtn");

        const logLeft = document.querySelector(".log-left");
            const logRight = document.querySelector(".log-right");

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


//hhjhjghhjjjjjj



  // 6. Add task name with completion time to the right log
  const taskName = button.closest(".card1").querySelector("h2").textContent;
  const currentTime = new Date().toLocaleTimeString();
  const taskLog = document.createElement("div");
  taskLog.classList.add("log-entry");
  taskLog.textContent = `You have completed the task ${taskName} at: ${currentTime}`;
  logRight.appendChild(taskLog);

  // 7. Create "Clear History" button only once
  if (!clearHistoryBtnExists) {
    const clearHistoryBtn = document.createElement("button");
    clearHistoryBtn.textContent = "Clear History";
    clearHistoryBtn.classList.add("clear-history");
    logLeft.appendChild(clearHistoryBtn);

    clearHistoryBtn.addEventListener("click", function () {
        logLeft.innerHTML = "";
        logRight.innerHTML = "";
        clearHistoryBtnExists = false; // Allow new button creation if needed
    });

    clearHistoryBtnExists = true;
}

          


////kjkjkkkkkkkkkkk
            }

////khbbb






       //mahhjjj     


            });
        });