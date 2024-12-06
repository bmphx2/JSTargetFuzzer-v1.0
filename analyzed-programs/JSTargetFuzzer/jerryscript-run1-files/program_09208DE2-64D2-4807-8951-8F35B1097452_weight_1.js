function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
    this.f = 9;
    this.a = 9;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
}
new F9(v3, 137847317n);
new F9(v5, -1169242957n);
new F9(v3, -16n);
new Int16Array(718);
class C20 {
}
const v21 = new C20();
const v24 = [4096,"string"];
Reflect.apply(("string").padStart, v21, v24);
new Float32Array(1361);
new Uint8ClampedArray(679);
function f33(a34, a35) {
    'use strict';
    for (let i37 = 0;
        i37 < 7;
        (() => {
            const o41 = {
            };
            new Date(o41);
        })()) {
    }
    return a35;
}
