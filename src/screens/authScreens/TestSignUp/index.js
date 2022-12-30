function CheckInput(phoneNumber, email, name, password) {
    if (phoneNumber.length == 0 || email.length == 0 || name.length == 0 || password.length == 0) {
        return "Please fill all fields";
    }
    return true;
}

function CheckFormatEmail(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return (reg.test(email) === false ? false : true)
}

function CheckPhoneNumber(phoneNumber) {
    let reg = /^(84|0[3|5|7|8|9])+([0-9]{8})$/;
    return (reg.test(phoneNumber) === false ? false : true)
}

function CheckFormatName(name) {
    let reg = /^[a-zA-Z ]{2,30}$/;
    return (reg.test(name) === false ? false : true)
}

function CheckFormatPassword(password) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return (reg.test(password) === false ? false : true)
}
function CheckSignUp(email, password, name, phoneNumber) {
    return (CheckFormatEmail(email) && CheckFormatPassword(password) && CheckFormatName(name) && CheckPhoneNumber(phoneNumber) ? true : false)
}
module.exports = { CheckInput, CheckFormatEmail, CheckPhoneNumber, CheckFormatName, CheckFormatPassword, CheckSignUp };