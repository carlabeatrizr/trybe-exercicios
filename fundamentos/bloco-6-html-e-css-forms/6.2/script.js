const submitButton = document.getElementById("submit-button");
const resetFormsButton = document.getElementById("reset-forms-button");
const agreementCheckbox = document.getElementById("agreement");
const textArea = document.getElementById("reason-to-win");

function enableSubmit() {
    submitButton.disabled = !agreementCheckbox.checked;
}

function textInputValidation() {
    const nameInput = document.getElementById("input-name");
    const nameInputValue = nameInput.value;
    const invalidNameValue = nameInputValue < 10 || nameInputValue > 40;
    const emailInput = document.getElementById("input-email");
    const emailInputValue = emailInput.value;
    const invalidEmailValue = emailInputValue < 10 || emailInputValue > 50;
    const reasonInput = document.getElementById("reason-to-win");
    const reasonInputValue = reasonInput.value;
    const invalidReasonValue = reasonInputValue > 500;

    if (invalidNameValue || invalidEmailValue || invalidReasonValue) {
        return false;
    } else {
        return true;
    }
}

function submit(event) {
    event.preventDefault();
    const isValid = textInputValidation();
    if (isValid) {
        alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
    } else {
        alert("Dados inválidos");
    }
}

function resetForms() {
    document.getElementById("trybetrip-form").reset();
}

agreementCheckbox.addEventListener("change", enableSubmit);
submitButton.addEventListener("click", submit);
resetFormsButton.addEventListener("click", resetForms);