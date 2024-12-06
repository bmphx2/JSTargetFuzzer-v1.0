function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.f = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
    v4.g = a18;
    this.c = a18;
}
new F15(v3, -65535);
new F15(v4, -65535);
new F15(v3, 268435439);
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
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C62 {
}
new v42(1);
const v67 = new Int8Array(107);
for (let i70 = 0, i71 = 10; i70 < i71;) {
    v67[i71] = i70;
    ++i70;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v87 = new Int8Array(Int8Array, Int8Array, Int8Array);
v87.includes(v87, v87);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e94) {
} finally {
}
