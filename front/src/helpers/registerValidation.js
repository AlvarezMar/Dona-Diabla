const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

export const validation = (input) => {
    const errors = {};

    const emptyFields = Object.values(input).some(value => !value);
    if (emptyFields) errors['allFields'] = '*All fields are required.';

    if ( isNaN(input.nDni) || input.nDni.length < 8 || input.nDni.length > 10) errors.nDni = '*Invalid ID number (8 to 10 numeric characters).';

    if (!passwordRegex.test(input.password)) errors.password = '*Password must contain one uppercase letter, one number, and have at least 8 characters.';

    if(input.password !== input.confirmPassword) errors.confirmPassword = '*Passwords do not match.'

    return errors;
}