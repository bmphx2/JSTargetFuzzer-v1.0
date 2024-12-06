const v2 = new Int16Array(3);
new Float64Array(1);
const v8 = new Float64Array(1000);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v8;
    this.e = 1000;
}
const v14 = new F9(1, 3, 3);
new F9(3, 1000, 1000);
const v16 = new F9(1, 1000, 1);
v14.length = 0;
function f18(a19, a20) {
    v14[7] |= 1000;
    try { a19.copyWithin(v2, v16, 1, v14, v2); } catch (e) {}
}
new Promise(f18);
