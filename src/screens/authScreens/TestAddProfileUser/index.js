function CheckInput(Address, Name, phoneNumber) {
  if (Address == '' || Name == '' || phoneNumber == '') {
    return 'Please fill all fields';
  }
  return true;
}
function CheckAddress(Address) {
  let reg = /^[a-zA-Z0-9\s,'-]*$/;
  return reg.test(Address) === false ? false : true;
}
function CheckName(Name) {
  return Name.length <= 0 ? false : true;
}
function CheckPhoneNumber(phoneNumber) {
  let reg = /^(84|0[3|5|7|8|9])+([0-9]{8})$/;
  return reg.test(phoneNumber) === false ? false : true;
}
function CheckAddProducts(Address, Name, phoneNumber) {
  return CheckPrice(Address) && CheckName(Name) && CheckPhoneNumber(phoneNumber)
    ? true
    : false;
}
module.exports = {CheckAddress, CheckName, CheckPhoneNumber, CheckAddProducts};
