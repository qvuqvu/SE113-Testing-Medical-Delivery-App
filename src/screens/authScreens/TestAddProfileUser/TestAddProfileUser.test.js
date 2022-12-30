const {
  CheckAddress,
  CheckName,
  CheckPhoneNumber,
  CheckAddProducts,
} = require('./index');

test('Check Name', () => {
  expect(CheckName('Thuốc trị trĩ')).toBe(true);
});

test('Check Phone Number', () => {
  expect(CheckPhoneNumber('0987134912')).toBe(true);
});

test('Check Address', () => {
  expect(CheckAddress('linh trung, thu duc')).toBe(true);
});
