function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2;
    this.b = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
let v8 = new Map();
function f9() {
    return f6;
}
let v11;
try { v11 = v3.valueOf(v4, v8, f6); } catch (e) {}
const v12 = delete v8[2147483649];
v8.valueOf = f6;
let v13;
try { v13 = v11(v5, v12); } catch (e) {}
++v8;
v5.h = BigInt64Array;
v8 = v13;
Object.defineProperty(v4, "a", { get: f6 });
const o22 = {
    "maxByteLength": 128,
};
const v24 = new ArrayBuffer(128, o22);
new Float64Array(v24);
const v27 = new BigInt64Array(1576);
v27.lastIndexOf(224945336n);
