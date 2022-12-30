const { CheckFormatEmail, CheckPhoneNumber, CheckInput, CheckFormatName, CheckFormatPassword, CheckAddress,CheckBirthday,CheckAddEmployees } = require('./index');
test("Check Input", () => {
    expect(CheckInput('', '', '', '','','')).toBe("Please fill all fields");
})
test("Check Phone Number", () => {
    expect(CheckPhoneNumber('0987134912')).toBe(true);
})
test("Check Format Email", () => {
    expect(CheckFormatEmail('20521420@gm.uit.edu.vn')).toBe(true);
})
test("Check Format Name", () => {
    expect(CheckFormatName('Nguyen Van A')).toBe(true);
})
test("Check Format Password", () => {
    expect(CheckFormatPassword('huy123')).toBe(true);
})

test("Check Address", () => {
    expect(CheckAddress('linh trung, thu duc')).toBe(true);
})

test("Check Birthday", () => {
    expect(CheckBirthday('10/12/2002')).toBe(true);
})

test("Check Sign Up", () => {
    expect(CheckAddEmployees('20521420@gm.uit.edu.vn', 'huy123', 'Nguyen Van A', '0973191283','linh trung, thu duc','10/12/2002')).toBe(true);
})