export const validation = (input) => {
    const errors = {}

    if(!input.date) errors.date = '*Date required.'
    if(!input.time) errors.time = '*Hour required.'

    return errors;


}