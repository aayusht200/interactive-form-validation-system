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
    if (input.value.length <= 0) {
        invalidInput(input);
        return;
    }

    switch (input.id) {
        case 'email':
            validateEmail(input);
            break;
        case 'country':
            validateCountry(input);
            break;
        case 'postal':
            validatePostal(input);
            break;
        case 'password':
            validatePassword(input);
            break;
        case 'confirm':
            validateConfirm(input);
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
    if (!fields.confirm.input.disabled) {
        if (input.value === password.value) {
            validInput(input);
        } else {
            invalidInput(input);
        }
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

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let isValid = true;
    Object.keys(fields).forEach((key) => {
        const { input } = fields[key];
        if (input.classList.contains('input-invalid') || input.value.length <= 0) {
            formValidation(input);
            isValid = false;
        }
    });
    if (!isValid) {
        e.preventDefault();
    }
});
