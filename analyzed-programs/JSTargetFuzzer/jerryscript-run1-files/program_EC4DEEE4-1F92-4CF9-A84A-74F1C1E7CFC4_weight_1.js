function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a13;
    this.e = F1;
}
new F9(v3, v4, v4);
new F9(v4, v5, v5);
new F9(v5, v3, v4);
new Uint16Array(4);
new BigInt64Array(41);
new BigUint64Array(v4);
async function* f26(a27, a28) {
    return f26;
}
f26();
