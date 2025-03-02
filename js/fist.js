function changeBackColor () {

let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

document.body.style.backgroundColor = randomColor;


}






function displayDate() {
    let today = new Date();
    
    let day = today.toLocaleDateString('en-US', { weekday: 'short' }); // "Sun"
    let month = today.toLocaleDateString('en-US', { month: 'short' }); // "Mar"
    let dayNum = today.getDate(); // "2"
    let year = today.getFullYear(); // "2025"

    // Construct the formatted date with different styles
    let formattedDate = `<span class="day">${day},</span><br><span class="date">${month} ${dayNum} ${year}</span>`;

    document.getElementById("currentDate").innerHTML = formattedDate;
}

displayDate(); //