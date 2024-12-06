function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9.f = a9;
    this.c = a8;
    this.e = f0;
}
new F6(v4, v3);
new F6(v5, v3);
new F6(v5, v3);
function f14() {
    return true;
}
const v20 = new Uint8Array(7);
new BigInt64Array(BigInt64Array);
new Uint16Array(257);
new Uint16Array(v20);
const v32 = new Float64Array(256);
const v35 = new Int8Array(4096);
new Array([9,v32,Uint16Array,Uint16Array,[256,9,4096,[v35,Float64Array,256]]]);
const v44 = new Uint32Array(181);
let v46 = BigUint64Array;
let v47 = new v46(1);
let v48 = 253;
[v48,,v46,v47] = v44;
try { v46["abs"](181, v48, v46); } catch (e) {}
new Uint16Array(v48);
for (let i61 = 0; i61 < 2; i61++) {
    const v67 = new Function(1);
    v67.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
