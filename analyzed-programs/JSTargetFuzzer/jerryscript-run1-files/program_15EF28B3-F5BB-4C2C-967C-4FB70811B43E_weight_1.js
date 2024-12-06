const v4 = new Map();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v4;
}
new F5(v4);
new F5(F5);
new F5(-2.0);
new Map(v4);
new Int8Array(3681);
new Uint8ClampedArray(1000);
new Uint16Array(8);
new Int8Array(Uint8ClampedArray);
new BigUint64Array(8);
new Int16Array(14);
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
function f41() {
    const o42 = {
    };
    return o42;
}
const v45 = new Uint16Array(f41);
v45["filter"](f41);
new Uint16Array(v36);
for (let i56 = 0; i56 < 2; i56++) {
    const v62 = new Function("x");
    v62.name;
}
Function();
