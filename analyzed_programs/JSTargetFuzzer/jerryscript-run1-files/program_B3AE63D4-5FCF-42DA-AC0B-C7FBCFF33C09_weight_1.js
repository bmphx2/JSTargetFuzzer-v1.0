function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = null;
    this.g = null;
}
new F1();
const v4 = new F1();
const v5 = new F1();
function f6() {
    return v5;
}
let v9 = new Uint8ClampedArray(64);
function f10() {
    return v9;
}
++v9 || v9;
Math.log1p(Uint8ClampedArray);
new BigUint64Array(10);
const v21 = new BigInt64Array(10);
if (v9) {
    delete v4[5];
} else {
    try { v21.fill(f10, 10, 64); } catch (e) {}
}
class C24 {
}
for (let i = 0; i < 5; i++) {
    function f25() {
        return f25;
    }
}
