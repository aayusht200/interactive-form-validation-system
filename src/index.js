import './style.css';

const fields = {
    email: {
        input: document.getElementById('email'),
        error: document.getElementById('error-email'),
    },
    country: {
        input: document.getElementById('country'),
        error: document.getElementById('error-country'),
    },
    postal: {
        input: document.getElementById('postal'),
        error: document.getElementById('error-postal'),
    },
    password: {
        input: document.getElementById('password'),
        error: document.getElementById('error-password'),
    },
    confirm: {
        input: document.getElementById('confirm'),
        error: document.getElementById('error-confirm'),
    },
};

Object.keys(fields).forEach((key) => {
    const { input } = fields[key];
    input.addEventListener('input', () => {
        formValidation(input);
    });
});
function formValidation(input) {
    switch (input.id) {
        case 'email':
            if (input.value.length > 0) validateEmail(input);
            else resetState(input);
            break;
        case 'country':
            if (input.value.length > 0) validateCountry(input);
            else resetState(input);
            break;
        case 'postal':
            if (input.value.length > 0) validatePostal(input);
            else resetState(input);
            break;
        case 'password':
            if (input.value.length > 0) validatePassword(input);
            else resetState(input);
            break;
        case 'confirm':
            if (input.value.length > 0) validateConfirm(input);
            else resetState(input);
            break;
    }
}

function validateEmail(input) {
    const validateString = /^\S+@\S+\.\S+$/;
    validateState(validateString, input);
}

function validateCountry(input) {
    const validateString = /^[A-Za-z\s.'-]+$/;
    validateState(validateString, input);
}

function validatePostal(input) {
    const validateString = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    validateState(validateString, input);
}

function validatePassword(input) {
    const validateString = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (validateString.test(input.value)) {
        validInput(input);
        fields.confirm.input.disabled = false;
    } else {
        invalidInput(input);
        fields.confirm.input.disabled = true;
    }
}

function validateConfirm(input) {
    const password = fields.password.input;
    if (input.value === password.value) {
        validInput(input);
    } else {
        invalidInput(input);
    }
}

function validateState(validateString, input) {
    if (validateString.test(input.value)) {
        validInput(input);
    } else {
        invalidInput(input);
    }
}

function validInput(input) {
    input.classList.remove('input-invalid');
    input.classList.add('input-valid');
    fields[input.id].error.classList.add('error-hide');
    fields[input.id].error.classList.remove('error-show');
}
function invalidInput(input) {
    input.classList.remove('input-valid');
    input.classList.add('input-invalid');
    fields[input.id].error.classList.add('error-show');
    fields[input.id].error.classList.remove('error-hide');
}

function resetState(input) {
    input.classList.remove('input-valid');
    input.classList.remove('input-invalid');
    fields[input.id].error.classList.remove('error-show');
    fields[input.id].error.classList.remove('error-hide');
}

Object.keys(fields).forEach((key) => {
    const { input } = fields[key];
    
});
