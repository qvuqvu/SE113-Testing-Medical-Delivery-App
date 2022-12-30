function CheckInput(phoneNumber, email, name, password, address,birthday) {
    if (phoneNumber.length == 0 || email.length == 0 || name.length == 0 || password.length == 0||address.length == 0||birthday.length == 0) {
        return "Please fill all fields";
    }
    return true;
}

function CheckAddress(address) {
    let reg=/^[a-zA-Z0-9\s,'-]*$/;
    return (reg.test(address) === false ? false : true)
}

function CheckBirthday(birthday) {
    let reg=/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    return (reg.test(birthday) === false ? false : true)
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
function CheckAddEmployees(email, password, name, phoneNumber,address,birthday) {
    return (CheckFormatEmail(email) && CheckFormatPassword(password) && CheckFormatName(name) && CheckPhoneNumber(phoneNumber)&&CheckAddress(address)&&CheckBirthday(birthday) ? true : false)
}
module.exports = { CheckInput, CheckFormatEmail, CheckPhoneNumber, CheckFormatName, CheckFormatPassword, CheckAddEmployees, CheckAddress, CheckBirthday };