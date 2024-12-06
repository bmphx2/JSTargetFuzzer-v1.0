function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 44344;
    this.h = 44344;
    this.a = 44344;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 extends F0 {
    valueOf(a11, a12) {
        return v3;
    }
    static 1 = 2.0;
    constructor(a17, a18, a19, a20) {
        super();
        for (let v21 = 0; v21 < 32; v21++) {
            v3["p" + v21] = v21;
        }
    }
}
const v24 = new C9(v4, C9, C9, F0);
const v25 = new C9(v3, v5, v5, -2.2250738585072014e-308);
new C9(v24, v25, C9, 2.0);
-Infinity;
new Uint8Array(6);
new Uint8Array(207);
new Uint32Array(8);
new Date();
function F53() {
    if (!new.target) { throw 'must be called with new'; }
    F53.prototype = 1433387171;
}
const v56 = new F53();
new F53();
new F53();
function f60() {
    const v63 = new Uint32Array(858);
    return v63;
}
function f66() {
    return v56;
}
const v69 = new BigUint64Array(BigUint64Array, BigUint64Array);
v69.copyWithin();
const v73 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
let v79 = 1073741824n;
v79 &= v79;
try { Float32Array(); } catch (e) {}
const v84 = (-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C93 {
}
const v95 = new v73(1);
const v98 = new Int8Array(107);
for (let i101 = 0, i102 = 10; i101 < i102;) {
    v98[v95] = i101;
    ++i101;
    Math.max(7);
}
new Int16Array(26);
v84 == [4,7,4294967297,-1,1000];
const v118 = new Int8Array(Int8Array, Int8Array, Int8Array);
v118.includes(v118, v118);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e125) {
} finally {
}
