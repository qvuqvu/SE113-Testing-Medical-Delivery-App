const {
  CheckNullNameAndSaleOffValue,
  CheckName,
  CheckSaleOffValue,
  CheckAddDiscount,
} = require(`./index`);

test(`CheckNullNameAndSaleOffValue`, () => {
  expect(CheckNullNameAndSaleOffValue(``, ``)).toBe(
    `Please enter name and sale off value`,
  );
  // expect(CheckNullNameAndSaleOffValue("","123456")).toBe("Please enter name");
  // expect(CheckNullNameAndSaleOffValue("123456","")).
  // toBe("Please enter sale off value");
  // expect(CheckNullNameAndSaleOffValue("123456","123456")).toBe(true);
});

test(`CheckName`, () => {
    expect(CheckName(`huy123`)).toBe(true);
    // expect(CheckName("12345")).toBe(false);
});

test(`CheckSaleOffValue`, () => {
    expect(CheckSaleOffValue(`10`)).toBe(true);
    // expect(CheckSaleOffValue("12345")).toBe(true);
});



test(`CheckAddDiscount`, () => {
  expect(CheckAddDiscount(`huy123`, `20`)).toBe(true);
});
