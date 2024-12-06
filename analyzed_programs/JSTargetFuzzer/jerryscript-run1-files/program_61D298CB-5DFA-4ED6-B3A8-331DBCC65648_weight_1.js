function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
}
new F6(v3);
new F6(v4);
new F6(v4);
function f12() {
    return F6;
}
const v15 = new Uint8Array(960);
new Uint32Array(v15);
new BigInt64Array(3639);
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    F22.c = -4294967297;
}
const v25 = new F22();
new F22();
new F22();
function f29() {
    const v32 = new Uint32Array(858);
    return v32;
}
function f35() {
    return v25;
}
const v38 = new BigUint64Array(BigUint64Array, BigUint64Array);
v38.copyWithin();
const v42 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v48 = 1073741824n;
v48 &= v48;
let v51;
try { v51 = Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C62 {
}
const v64 = new v42(v15);
new Int8Array(107);
for (let i70 = 0, i71 = 10; i70 < i71;) {
    i70[v64] = i70;
    ++i70;
    Math.max(-7);
}
new Int16Array(26);
const v84 = [4,7,4294967297,-1,1000];
v84 == v84;
const v87 = new Int8Array(Int8Array, Int8Array, Int8Array);
v87.includes(v51, v87);
new Uint8ClampedArray(6);
try {
    new WeakSet(960);
} catch(e94) {
} finally {
}
