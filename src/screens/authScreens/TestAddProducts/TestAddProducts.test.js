const { CheckPrice, CheckPharmacy, CheckName, CheckAddProducts } = require('./index');
test("Check Price", () => {
    expect(CheckPrice(10000)).toBe(true);
})
test("Check Name", () => {
    expect(CheckName('Thuốc trị trĩ')).toBe(true);
})
test("Check Pharmacy", () => {
    expect(CheckPharmacy('Nhà Thuốc Long Châu')).toBe(true);
})
test("Check Add Products", () => {
    expect(CheckAddProducts(10000, 'Thuốc trị trĩ', 'Nhà Thuốc Long Châu')).toBe(true);
})