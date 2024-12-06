function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.b = this;
}
const v13 = new F9(v4, v5);
const v14 = new F9(v13, -65535);
const v15 = new F9(v5, v14);
const v16 = [];
const v19 = new Uint8ClampedArray(0);
const v22 = new Uint8Array(199);
let v23 = 1445;
const v25 = new Uint8ClampedArray(v23);
let v26 = 16773;
v25.copyWithin(199, ...v16, 199, v23);
const v32 = -Infinity;
v26 ^= 607782562;
v22.buffer ^= v32;
try { v15.includes(...v23, ...v19, Uint8ClampedArray, 0); } catch (e) {}
v23--;
