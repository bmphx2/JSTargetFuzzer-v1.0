function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -1;
    this.b = -1;
    this.h = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v3,v5,1000,1000,v3];
const v10 = [1000,v5,v4];
[v3,v10,v4];
new F0();
(v10 != F0) & F0;
let v16 = new F0();
++v16;
[5];
[536870889,1000];
[v3,2147483648,v4,1000,1000];
new Uint16Array(9);
const v28 = new Float64Array(256);
const v31 = new Int8Array(4096);
[9,v28,Uint16Array,Uint16Array,[256,9,4096,[v31,Float64Array,9]]];
new Array(127);
async function f40(a41, a42) {
    return a41;
}
f40(f40, f40);
const v44 = new Uint32Array(181);
let v46 = BigUint64Array;
let v47 = new v46(1);
let v48 = 253;
[v48,,v46,v47] = v44;
try { v46["abs"](181, v48, v46); } catch (e) {}
new Uint16Array(v48);
for (let i61 = 0; i61 < 2; i61++) {
    const v67 = new Function("x");
    v67.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
