new Float32Array(741);
const v5 = new Uint8ClampedArray(5);
let v6 = 152;
new Float64Array(v6);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.e = v5;
}
const v13 = new F9(5, 741);
new F9(v6, v6);
const v15 = new F9(v6, 5);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = Float64Array;
}
const v20 = new F16(741, v13);
let v21 = new F16(v6, v15);
new F16(v6, v15);
v21 *= v21;
let v23;
try { v23 = v20(5, v13, 741, v13, v15); } catch (e) {}
5 || v23;
v6 = v21;
