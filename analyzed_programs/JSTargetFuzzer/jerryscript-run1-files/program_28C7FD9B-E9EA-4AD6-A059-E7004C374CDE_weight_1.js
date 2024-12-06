function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -11;
    this.a = -11;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new WeakMap();
Math.acosh(5);
v4 / v4;
+-241777385;
[v5,F0];
[v3];
[v5,WeakMap];
new Float32Array(8);
new Int32Array(13);
new Float64Array(5);
const v28 = new Uint32Array(181);
const o32 = {
    "maxByteLength": 4294967295,
};
const v34 = new ArrayBuffer(129, o32);
new Uint8Array(v34);
let v37 = BigUint64Array;
let v38 = new v37(1);
let v39 = 253;
[v39,,v37,v38] = v28;
try { v37["abs"](181, v39, v37); } catch (e) {}
new Uint16Array(v39);
for (let i52 = 0; i52 < 2; i52++) {
    const v58 = new Function("x");
    v58.name;
}
Function();
