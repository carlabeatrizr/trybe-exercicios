function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Requisito 1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfDecember(inputArray) {
    let daysUnorderedList = document.getElementById("days");

    for (let i = 0; i < inputArray.length; i += 1) {
        let day = inputArray[i];
        let dayLi = document.createElement("li");

        if (day === 24 || day === 31) {
            dayLi.className = "day holliday";
            dayLi.innerHTML = day;
            daysUnorderedList.appendChild(dayLi);
        } else if (day === 4 || day === 11 || day === 18) {
            dayLi.className = "day friday";
            dayLi.innerHTML = day;
            daysUnorderedList.appendChild(dayLi);
        } else if (day === 25) {
            dayLi.className = "day friday holliday";
            dayLi.innerHTML = day;
            daysUnorderedList.appendChild(dayLi);
        }
    }
}
createDaysOfDecember(dezDaysList);
//Requisito 2.
function createHolidayButton(inputString) {
    let buttonContainer = document.querySelector(".buttons-container");
    let holidayButton = document.createElement("button");
    holidayButton.innerText = inputString;
    holidayButton.id = "btn-holiday";
    buttonContainer.appendChild(holidayButton);
}
createHolidayButton("Feriados");
//Requisito 3.
let hollidayButton = document.getElementById("btn-holiday");
holidayButton.addEventListener("click", holidayButtonEvent);

function holidayButtonEvent() {
    let defaultBackgroundColor = "rgb(238, 238, 238)";
    let newBackgroundColor = "rgb(250, 250, 250)";
    let holidays = document.getElementsByClassName("holiday");
    for (let i = 0; i < holidays.length; i += 1) {
        let element = holidays[i];
        if (element.getElementsByClassName.backgroundColor === newBackgroundColor) {
            element.style.backgroundColor === defaultBackgroundColor;
        } else {
            element.style.backgroundColor === newBackgroundColor;
        }
    }
}
//Requisito 4.
function createFridayButton(inputString) {
    let buttonContainer = document.querySelector(".buttons-container");
    let fridayButton = document.createElement("button");
    fridayButton.innerText = inputString;
    fridayButton.id = "btn-friday";
    buttonContainer.appendChild(fridayButton);
}
createFridayButton("Sexta-feira");
//Requisto 5.
let fridayButton = document.getElementById("btn-friday");
fridayButton.addEventListener("click", createFridayButton);
function createEventFridayButton() {
    let fridays = document.getElementsByClassName("friday");
    let dezFridays = [4, 11, 18, 25];
    let newFridayText = "Sextou!";

    for (let i = 0; i < fridays.length; i += 1) {
        const element = fridays[i];
        if (element.innerText !== newFridayText) {
            element.innerText = newFridayText;
        } else {
            element.innerText = dezFridays[i];
        }
    }
}
// Requisito 6.
let day = document.getElementById("days");
day.addEventListener("mouseover", dayZoomIn);
day.addEventListener("mouseover", dayZoomOut);

function dayZoomIn(inputEvent) {
    inputEvent.target.style.fontSize = "30px";
    inputEvent.target.style.fontWeight = "600";
}

function dayZoomOut(inputEvent) {
    inputEvent.target.style.fontWeight = "200";
    inputEvent.target.style.fontSize = "20px";
}

// Requisito 7.
function customTask(inputString) {
    let taskContainer = document.querySelector(".my-tasks");
    let = taskName = document.createElement("span");

    taskName.innerHTML = inputString;
    taskContainer.appendChild(taskName);
}
customTask("Cozinhar");

//Requisito 8.
function createColorSubtitle(inputString) {
    let colorSubtitle = document.createElement("div");
    let taskContainer = document.querySelector(".my-tasks");
    colorSubtitle.className = "task";
    colorSubtitle.style.backgroundColor = inputString;
    taskContainer.appendChild(colorSubtitle);
}
createColorSubtitle("green");

//Requisito 9.
let task = document.querySelector(".task");
let taskSelected = document.getElementsByClassName("task selected");
task.addEventListener("click", selectedTaks);
function selectedTaks(event) {
    if (taskSelected.length === 0) {
        event.target.className = "task selected";
    } else {
        event.target.className = "task";
    }
}
//Requisito 10.
day.addEventListener("click", changeDayColorSubtitle);
function changeDayColorSubtitle(event){
    let selectedColorTask = document.getElementsByClassName("task selected");
    let taskColorDiv = document.querySelector(".task");
    let taskColor = taskColorDiv.style.backgroundColor;
    let eventTargetColor = event.target.style.color;

    if(selectedColorTask.length > 0 && eventTargetColor !== taskColor){
        event.target.style.color = taskColor;
    } else if (eventTargetColor === taskColor && selectedColorTask !== 0){
        event.target.style.color = "rgb(119, 119, 119";
    }
}
