function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -8;
    this.b = -8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o19 = {
        __proto__: a7,
        get c() {
            new Uint32Array(2878);
            new BigInt64Array(9);
            const v18 = new Uint8Array(512);
            return v18;
        },
    };
    return o19;
}
const v21 = Error();
const v23 = new Uint32Array();
try {
    Object.defineProperty(v23, 2, { configurable: true, set: v21 });
} catch(e25) {
}
f6(v5, v3);
f6(v5, v4);
f6(v4, v5);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a35;
    this.d = a35;
}
new F32(v3, 1e-15);
new F32(v3, 2.220446049250313e-16);
new F32(v5, 1e-15);
new Uint8Array(1024);
new Float32Array(128);
new Int16Array(129);
new Uint16Array(9);
new Uint32Array();
const o56 = {
    valueOf() {
        super.f = this;
        return this;
    },
};
const v57 = new Float64Array(256);
const v60 = new Int8Array(4096);
[9,v57,Uint16Array,Uint16Array,[256,9,4096,[v60,Float64Array,256]]];
("9").lastIndexOf();
eval("4");
1.3541845898040805e+308 <= 536870887n;
new Uint8Array();
new Array(127);
const v79 = new BigInt64Array(245);
function f80(a81, a82) {
    v79.map(a81);
    return a82;
}
new Promise(f80);
const v88 = new Uint32Array(181);
let v90 = BigUint64Array;
let v91 = new v90(1);
let v92 = 253;
[v92,,v90,v91] = v88;
try { v90["abs"](181, v92, v90); } catch (e) {}
new Uint16Array(v92);
for (let i105 = 0; i105 < 2; i105++) {
    const v111 = new Function("x");
    v111.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
