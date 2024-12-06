function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 268435441;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
}
new F9(v3, v3);
new F9(v5, v4);
new F9(v4, v3);
new Date();
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    F30.prototype = 1433387171;
}
const v33 = new F30();
new F30();
new F30();
function f37() {
    const v40 = new Uint32Array(858);
    return v40;
}
function f43() {
    return v33;
}
const v46 = new BigUint64Array(BigUint64Array, BigUint64Array);
v46.copyWithin();
const v50 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
let v56 = 1073741824n;
v56 &= v56;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C70 {
}
const v72 = new v50(1);
for (let v74 = 0; v74 < 5; v74++) {
    gc(10000);
}
const v79 = new Int8Array(107);
for (let i82 = 0, i83 = 10; i82 < i83;) {
    v79[v72] = i82;
    ++i82;
    Math.max(7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v99 = new Int8Array(Int8Array, Int8Array, Int8Array);
v99.includes(v99, v99);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e106) {
} finally {
}
