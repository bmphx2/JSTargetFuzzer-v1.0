function f0() {
}
function f4() {
    return f0;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
    this.g = a8;
    this.c = a8;
}
new F5(NaN, f4);
new F5(-4.0, f4);
new F5(NaN, -4.0);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    F15.c = -4294967297;
}
const v18 = new F15();
new F15();
new F15();
function f22() {
    const v25 = new Uint32Array(858);
    return v25;
}
function f28() {
    return v18;
}
const v31 = new BigUint64Array(BigUint64Array, BigUint64Array);
v31.copyWithin();
const v35 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v41 = 1073741824n;
v41 &= v41;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C55 {
}
const v57 = new v35(1);
const v60 = new Int8Array(107);
for (let i63 = 0, i64 = 10;
    (() => {
        const v70 = new Date(Math.min(-505138646, Math));
        v70.setUTCFullYear(("2147483647")[11], -505138646, 150);
        return i63 < i64;
    })();
    ) {
    v60[v57] = i63;
    ++i63;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v89 = new Int8Array(Int8Array, Int8Array, Int8Array);
v89.includes(v89, v89);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e96) {
} finally {
}
