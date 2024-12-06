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
[v3,[1000,v5,v4],v4];
[5];
[536870889,1000];
[v3,2147483648,v4,1000,1000];
new Uint16Array(9);
const v23 = new Float64Array(256);
const v26 = new Int8Array(4096);
[9,v23,Uint16Array,Uint16Array,[256,9,4096,[v26,Float64Array,256]]];
new Array(127);
async function f35(a36, a37) {
    return a36;
}
f35(f35, f35);
const v39 = new Uint32Array(181);
let v41 = BigUint64Array;
let v42 = new v41(1);
let v43 = 253;
[v43,,v41,v42] = v39;
try { v41["abs"](181, v43, v41); } catch (e) {}
new Uint16Array(v43);
for (let i56 = 0; i56 < 2; i56++) {
    const v62 = new Function("x");
    v62.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
