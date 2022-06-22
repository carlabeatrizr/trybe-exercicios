const btn = document.getElementById("click-counter");
const displayCount = document.getElementById("display-counter");
let clickCount = 0;

btn.addEventListener("click", () => {
    clickCount++;
    displayCount.innerHTML = clickCount;
});