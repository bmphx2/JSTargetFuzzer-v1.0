new Int8Array(16);
new Uint8Array(12);
new Int32Array(16);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = Int32Array;
    this.b = a12;
}
new F9(12, F9, 16);
const v15 = new F9(12, F9, 64);
new F9(12, v15, 16);
const v19 = new Uint16Array(9);
const v22 = new Float64Array(256);
const v25 = new Int8Array(4096);
[9,v22,Uint16Array,Uint16Array,[256,9,4096,[v25,Float64Array,v19]]];
new Array(127);
const v34 = new Uint32Array(181);
let v36 = BigUint64Array;
let v37 = new v36(1);
let v38 = 253;
[v38,,v36,v37] = v34;
try { v36["abs"](181, v38, v36); } catch (e) {}
new Uint16Array(v38);
for (let i51 = 0; i51 < 2; i51++) {
    const v57 = new Function("x");
    v57.name;
}
181 + "x";
new Uint8ClampedArray(v15);
new Int32Array(16);
const v67 = Symbol.toPrimitive;
const o73 = {
    [v67]() {
        this.__proto__;
        return 4096;
    },
};
new Int8Array(255);
Function();
