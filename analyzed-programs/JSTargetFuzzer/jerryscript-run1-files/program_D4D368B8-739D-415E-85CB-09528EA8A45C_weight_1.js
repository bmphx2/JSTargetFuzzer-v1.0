function f3() {
    return "0";
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = this;
}
const v7 = new F4("b");
new F4("0");
new F4(F4);
const v18 = new Int8Array(2);
const v21 = new BigUint64Array(300);
const o22 = {
    ...v21,
    [v18]: 2,
};
try { v7.getFloat32(); } catch (e) {}
const v25 = new Map();
v25["has"]();
