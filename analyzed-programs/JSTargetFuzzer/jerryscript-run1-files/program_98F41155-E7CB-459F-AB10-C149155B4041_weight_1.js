function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    this.g = f0;
}
const v3 = new F1(F1);
new F1(v3);
const v5 = new F1();
new Uint32Array(2035, Uint32Array, v5, Uint32Array);
new Uint8Array(10, v3, f0);
const v14 = new Int16Array(128);
function f15() {
    return v14;
}
let v17 = TypeError(TypeError);
v17++;
