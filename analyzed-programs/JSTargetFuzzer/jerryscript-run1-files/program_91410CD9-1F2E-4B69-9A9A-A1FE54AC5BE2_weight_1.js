function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = undefined;
    this.d = undefined;
    this.h = undefined;
}
new F1();
new F1(undefined);
new F1();
new Uint16Array(9);
const v20 = new Float64Array(256);
const v23 = new Int8Array(4096);
[9,v20,Uint16Array,Uint16Array,[256,9,4096,[v23,Float64Array,256]]];
new Array(127);
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
new Uint16Array(v36);
for (let i49 = 638046528; i49 < 2; i49++) {
    const v55 = new Function("x");
    v55.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(9);
new Int8Array(255);
Function();
