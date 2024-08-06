// Form Elements
const formEl = document.querySelector('form');
const nameInput = document.querySelector('#cardholder_name');
const cardNumInput = document.querySelector('#cardholder_number');
const expiryMonthInput = document.querySelector('#expiryMonth');
const expiryYearInput = document.querySelector('#expiryYear');
const cvcInput = document.querySelector('#cvc');
const formInputs = document.querySelectorAll('input');

// Form error messages
const chNameErr = document.querySelector('#error_chname');
const chNumErr = document.querySelector('#error_chnum');
const expiryErr = document.querySelector('#error_expiry');
const cvcErr = document.querySelector('#error_cvc');

// Card Elements
const cardFrontNum = document.querySelector('.card-front-num');
const cardFrontName = document.querySelector('.card-front-name');
const cardFrontExpMonth = document.querySelector('.card-front-month');
const cardFrontExpYear = document.querySelector('.card-front-year');
const cardBackCVC = document.querySelector('.card-back-cvc');


// Display user inputs on cards
nameInput.addEventListener('input', (e) => {
    if (e.target.value) {
        cardFrontName.innerText = e.target.value;
    } else {
        cardFrontName.innerText = 'Jessie James';
    }
})

cardNumInput.addEventListener('input', (e) => {
    let value = e.target.value;

    // Remove spaces
    value = value.replace(/\s/g, '');

    // Insert space every 4 digits
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue;

    if (formattedValue) {
        cardFrontNum.innerText = formattedValue;
    } else {
        cardFrontNum.innerText = '1234 5678 9123 0000';
    }
});

expiryMonthInput.addEventListener('input', (e) => {

    if (e.target.value) {
        cardFrontExpMonth.innerText = e.target.value;
    } else {
        cardFrontExpMonth.innerText = '00';
    }
})


expiryYearInput.addEventListener('input', (e) => {
    if (e.target.value) {
        cardFrontExpYear.innerText = e.target.value;
    } else {
        cardFrontExpYear.innerText = '00';
    }
})

cvcInput.addEventListener('input', (e) => {
    if (e.target.value) {
        cardBackCVC.innerText = e.target.value;
    } else {
        cardBackCV.innerText = '00';
    }
})


// Form validations
const errorMsgs = [
    "Can't be blank",
    "Wrong format, numbers only",
    "Wrong format, letters only",
    "Complete the field"
]

const showError = (msgEl, msgText) => {
    msgEl.classList.add('show');
    msgEl.innerText = msgText;
}

const hideError = (msgEl) => {
    msgEl.classList.remove('show');
    msgEl.innerText = '';
}

validateName = (e) => {
    const nameValue = nameInput.value.trim();
    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    if (nameValue === '') {
        e.preventDefault();
        showError(chNameErr, errorMsgs[0]);
        nameInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (!namePattern.test(nameValue)) {
        e.preventDefault();
        showError(chNameErr, errorMsgs[2]);
        nameInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        hideError(chNameErr);
    }
}

validateCardNum = (e) => {
    const numValue = cardNumInput.value.trim();
    const numPattern = /^(?:\d{4} ){3}\d{4}$/;
    if (numValue === '') {
        e.preventDefault();
        showError(chNumErr, errorMsgs[0]);
        cardNumInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (cardNumInput.value.length < 19) {
        e.preventDefault();
        showError(chNumErr, errorMsgs[3]);
        cardNumInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (!numPattern.test(numValue)) {
        e.preventDefault();
        showError(chNumErr, errorMsgs[1]);
        cardNumInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        hideError(chNumErr);
    }
}

validateExpiryMonth = (e) => {
    const expiryValue = expiryMonthInput.value.trim();
    const pattern = /^\d{2}$/;
    if (expiryValue === '') {
        e.preventDefault();
        showError(expiryErr, errorMsgs[0]);
        expiryMonthInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (expiryValue.length < 2) {
        e.preventDefault();
        showError(expiryErr, errorMsgs[3]);
        expiryMonthInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (!pattern.test(expiryValue)) {
        e.preventDefault();
        showError(expiryErr, errorMsgs[1]);
        expiryMonthInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        hideError(expiryErr);
    }
}

validateExpiryYear = (e) => {
    const expiryValue = expiryYearInput.value.trim();
    const pattern = /^\d{2}$/;
    if (expiryValue === '') {
        e.preventDefault();
        showError(expiryErr, errorMsgs[0]);
        expiryYearInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (expiryValue.length < 2) {
        e.preventDefault();
        showError(expiryErr, errorMsgs[3]);
        expiryYearInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (!pattern.test(expiryValue)) {
        e.preventDefault();
        showError(expiryErr, errorMsgs[1]);
        expiryYearInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        hideError(expiryErr);
    }
}

validateCVC = (e) => {
    const cvcValue = cvcInput.value.trim();
    const pattern = /^\d{3}$/;
    if (cvcValue === '') {
        e.preventDefault();
        showError(cvcErr, errorMsgs[0]);
        cvcInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (cvcValue.length < 2) {
        e.preventDefault();
        showError(cvcErr, errorMsgs[3]);
        cvcInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (!pattern.test(cvcValue)) {
        e.preventDefault();
        showError(cvcErr, errorMsgs[1]);
        cvcErr.style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        hideError(cvcErr);
    }
}

formEl.addEventListener('submit', (e) => {
    validateName(e);
    validateCardNum(e);
    validateExpiryMonth(e);
    validateExpiryYear(e);
    validateCVC(e);
})