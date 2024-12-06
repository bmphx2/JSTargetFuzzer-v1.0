new Int32Array(7);
new Int16Array(2268);
new Int32Array(108);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.f = a11;
}
new F9(108, 7);
const v14 = new F9(Int32Array, 2268);
new F9(v14, 2268);
function f16() {
    new Uint32Array(129);
    new Uint8ClampedArray(1);
    new Int32Array(1432);
    return arguments;
}
f16(Int32Array);
