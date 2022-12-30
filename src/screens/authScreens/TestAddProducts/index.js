function CheckInput(Price, Name, Pharmacy) {
    if (Price == '' || Name == '' || Pharmacy == '') {
        return 'Please fill all fields';
    }
    return true;
}
function CheckPrice(Price) {
    return (Price <= 0 ? false : true)
}
function CheckName(Name) {
    return (Name.length <= 0 ? false : true)
}
function CheckPharmacy(Pharmacy) {
    return (Pharmacy === 'Nhà Thuốc Long Châu' ? true : false)
}
function CheckAddProducts(Price, Name, Pharmacy) {
    return (CheckPrice(Price) && CheckName(Name) && CheckPharmacy(Pharmacy) ? true : false)
}
module.exports = { CheckPrice, CheckInput, CheckName, CheckPharmacy, CheckAddProducts };