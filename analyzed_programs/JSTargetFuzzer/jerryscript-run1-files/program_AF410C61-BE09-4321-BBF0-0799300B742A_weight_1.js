function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 65535;
    this.a = 65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    a11.g = 1178999022;
}
new F9(4294967295, v3, 1178999022);
new F9(1178999022, v5, -2147483649);
new F9(4294967295, v4, 1178999022);
new F0();
let v26 = 14n;
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    F34.prototype = 1433387171;
}
const v37 = new F34();
new F34();
new F34();
function f41() {
    const v44 = new Uint32Array(858);
    return v44;
}
function f47() {
    return v37;
}
const v50 = new BigUint64Array(f47, BigUint64Array);
v50.copyWithin();
const v54 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
v26 &= 1073741824n;
try { Float32Array(); } catch (e) {}
(1073741824n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C74 {
}
const v76 = new v54(1);
const v79 = new Int8Array(107);
for (let i82 = 0, i83 = 10; i82 < i83;) {
    v79[v76] = i82;
    ++i82;
    Math.max(7);
}
new Int16Array(26);
const v96 = [4,7,4294967297,-1,1000];
4 == v96;
const v99 = new Int8Array(Int8Array, Int8Array, Int8Array);
v99.includes(v99, v99);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n, v96, 255);
} catch(e106) {
} finally {
}
