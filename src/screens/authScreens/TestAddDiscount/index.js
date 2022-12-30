function CheckNullNameAndSaleOffValue(name, saleOffValue) {
    if (name === '' && saleOffValue === '') {
        return "Please enter name and sale off value"
    }
    else if (name === '' && saleOffValue !== '') {
        return "Please enter name"
    }
    else if (name !== '' && saleOffValue === '') {
        return "Please enter sale off value"
    }
    else {
        return true
    }
}

function CheckName(name) {
    let reg = /^[a-zA-Z0-9!-]+$/;
    return (reg.test(name) === false ? false : true)
}

function CheckSaleOffValue(saleOffValue) {
    // the value must is number and greater than 0 and less than 100
    let reg = /^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$/
    return (reg.test(saleOffValue) === false ? false : true)
}

function CheckAddDiscount(name, saleOffValue) {
    return (CheckNullNameAndSaleOffValue(name, saleOffValue) && CheckName(name) && CheckSaleOffValue(saleOffValue) ? true : false)
}

module.exports = { CheckNullNameAndSaleOffValue, CheckName, CheckSaleOffValue, CheckAddDiscount };