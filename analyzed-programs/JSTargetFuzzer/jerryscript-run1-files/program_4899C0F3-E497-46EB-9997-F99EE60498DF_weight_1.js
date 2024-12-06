function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1;
    this.d = -1;
    this.g = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = "f";
    this.a = a14;
    this.h = a14;
}
const v16 = new F10("f", v3, "f", v5);
new F10(undefined, v3, "xw9be", v3);
new F10(v16, v3, "f", v4);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    F19.c = -4294967297;
}
const v22 = new F19();
new F19();
new F19();
new Uint16Array(255);
new BigUint64Array(10);
new BigInt64Array(2294);
function f38() {
    const v41 = new Uint32Array(858);
    return v41;
}
function f44() {
    return v22;
}
const v47 = new BigUint64Array(BigUint64Array, BigUint64Array);
v47.copyWithin();
const v51 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v57 = 1073741824n;
v57 &= v57;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C71 {
}
const v73 = new v51(1);
const v76 = new Int8Array(107);
for (let i79 = 0, i80 = 10; i79 < i80;) {
    v76[v73] = i79;
    ++i79;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v96 = new Int8Array(Int8Array, Int8Array, Int8Array);
v96.includes(v96, v96);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e103) {
} finally {
}
