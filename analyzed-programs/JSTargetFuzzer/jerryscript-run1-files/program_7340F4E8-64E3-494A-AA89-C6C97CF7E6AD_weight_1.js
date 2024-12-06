function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
}
new F4(127);
new F4(3);
const v9 = new F4(3);
const v16 = [-2147483648n,-9n,-40461];
[v16,v9];
[v16];
new Uint16Array(9);
const v24 = new Float64Array(256);
const v27 = new Int8Array(4096);
[9,v24,Uint16Array,Uint16Array,[256,9,4096,[v27,Float64Array,256]]];
new Array(127);
const v36 = new Uint32Array(127);
let v38 = BigUint64Array;
let v39 = new v38(1);
let v40 = 253;
[v40,,v38,v39] = v36;
try { v38["abs"](181, v40, v38); } catch (e) {}
new Uint16Array(127);
for (let i53 = 0; i53 < 2; i53++) {
    new Function("x");
    v39.name;
}
64 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(v39);
Function();
