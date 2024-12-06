const v1 = new WeakMap();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a8;
}
const v9 = new F5(-52987, -647150915);
const v10 = new F5(-647150915, 57811);
const v11 = new F5(-647150915, 57811);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v9;
    this.g = v11;
}
new F12(-52987, v11, v9);
new F12(57811, v10, v1);
new F12(v1, v9, F12);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    F20.c = -4294967297;
}
const v23 = new F20();
new F20();
new F20();
function f27() {
    const v30 = new Uint32Array(858);
    return v30;
}
function f33() {
    return v23;
}
const v36 = new BigUint64Array(BigUint64Array, BigUint64Array);
v36.copyWithin();
const v39 = [-1.4322344581691674e+308];
const v40 = [0.9824621037580522,2.2889030652093406e+307,1.7976931348623157e+308,2.220446049250313e-16,4.0,-5.0];
function f41() {
    return v40;
}
v39.filter(f41);
const v44 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v50 = 1073741824n;
v50 &= v50;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C64 {
}
const v66 = new v44(1);
const v69 = new Int8Array(107);
for (let i72 = 0, i73 = 10; i72 < i73;) {
    v69[v66] = i72;
    ++i72;
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
