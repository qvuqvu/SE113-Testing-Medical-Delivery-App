
function CheckNullEmailandPassword(email, password) {
    if (email === '' && password !== '') {
        return 'Email is null';
    }
    if (email !== '' && password === '') {
        return 'Password is null';
    }
    if (email === '' && password === '') {
        return 'Email and password are null';
    }
    if (email !== '' && password !== '') {
        return true;
    }
}

function CheckFormatEmail(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return (reg.test(email) === false ? false : true)
}

function CheckFormatPassword(password) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return (reg.test(password) === false ? false : true)
}

function CheckLogin(email, password) {
    return (CheckNullEmailandPassword(email, password) && CheckFormatEmail(email) && CheckFormatPassword(password) ? true : false)
}

module.exports = { CheckNullEmailandPassword, CheckFormatEmail, CheckFormatPassword, CheckLogin };