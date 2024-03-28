export const validation = (input) => {
    const errors = {}

    if(!input.username) errors.username = '*Username required.'
    if(!input.password) errors.password = '*Password required.'

    return errors;
}