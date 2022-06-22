const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");
const button = document.getElementById("button");

function verifyIfHaveEmptyInputs(a, b) {
    if (a === "" || b === "") {
        throw new Error("Please, fill all inputs");
    }
}

function verifyIfHaveStringsInInput(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Please, insert only numbers");
    }
}

const sum = () => {
    try {
        let a = value1.value;
        let b = value2.value;
        verifyIfHaveStringsInInput(a, b);
        verifyIfHaveEmptyInputs(a, b);
        result.innerHTML = parseInt(a) + parseInt(b);
    } catch (error) {
        result.innerHTML = error.message;
    } finally {
        value1.value = "";
        value2.value = "";
    }
};

button.addEventListener("click", sum);