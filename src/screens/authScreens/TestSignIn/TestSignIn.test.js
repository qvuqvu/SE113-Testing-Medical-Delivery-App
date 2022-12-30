const { CheckNullEmailandPassword, CheckFormatEmail, CheckFormatPassword, CheckLogin } = require('./index');

test('CheckNullEmailandPassword', () => {
    expect(CheckNullEmailandPassword("", "123456")).toBe("Email is null");
    // expect(CheckNullEmailandPassword("nguyendinhduy@gmail.com","")).toBe("Password is null");
    // expect(CheckNullEmailandPassword("","")).toBe("Email and password are null");
    // expect(CheckNullEmailandPassword("nguyendinhduy@gmail.com","123456")).toBe(true);
})

test('CheckFormatEmail', () => {
    expect(CheckFormatEmail("nguyendinhduy@gm.uit.edu.vn")).toBe(true);
    // expect(CheckFormatEmail("nguyendinhduy")).toBe(false);
})

test('CheckFormatPassword', () => {
    expect(CheckFormatPassword("huy123")).toBe(true);
    // expect(CheckFormatPassword("12345")).toBe(false);
})

test('CheckLogin', () => {
    expect(CheckLogin("nguyendinhduy@gm.uit.edu.vn", "huy123")).toBe(true);
})

