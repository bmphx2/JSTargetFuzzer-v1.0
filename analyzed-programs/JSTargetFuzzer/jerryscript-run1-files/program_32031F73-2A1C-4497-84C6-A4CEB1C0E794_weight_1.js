function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 44335;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.f = v3;
}
const v9 = new F6(v3);
const v10 = new F6(v3);
const v11 = new F6(v3);
function f12() {
    return v3;
}
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v11;
    this.e = a17;
    this.h = a17;
}
new F13(v4, v9, v10);
new F13(v10, v10, v5);
new F13(v9, v10, v11);
new Uint16Array(9);
const v26 = new Float64Array(256);
const v29 = new Int8Array(4096);
[9,v26,Uint16Array,Uint16Array,[256,9,4096,[v29,Float64Array,256]]];
new Array(127);
const v38 = new Uint32Array(181);
let v40 = BigUint64Array;
let v41 = new v40(1);
let v42 = 253;
[v42,,v40,v41] = v38;
try { v40["abs"](181, v42, v40); } catch (e) {}
new BigUint64Array(64);
new Int16Array(3848);
new Uint32Array(229);
new Uint16Array(v42);
for (let i64 = 0; i64 < 2; i64++) {
    const v70 = new Function("x");
    v70.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
