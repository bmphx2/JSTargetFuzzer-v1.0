function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v7 = new Map();
function f8(a9, a10, a11, a12) {
    const o19 = {
        ...a9,
        ...v4,
        "f": a12,
        __proto__: v7,
        "g": v5,
        "c": a12,
        "h": a12,
        "b": F1,
        ...a11,
        set d(a14) {
            [a14,a14];
            [a14];
            [a10,a14,a10,a12] - a12;
        },
    };
    return o19;
}
const v20 = f0(v3, v3, v3, v3);
f8(f8(v3, v4, v3, v3), v20, v20, v4);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    F26.c = -4294967297;
}
const v29 = new F26();
new F26();
new F26();
function f33() {
    const v36 = new Uint32Array(858);
    return v36;
}
function f39() {
    return v29;
}
const v42 = new BigUint64Array(BigUint64Array, BigUint64Array);
v42.copyWithin();
const v46 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v52 = 1073741824n;
v52 &= v52;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C66 {
}
const v68 = new v46(1);
const v71 = new Int8Array(107);
for (let i74 = 0, i75 = 10; i74 < i75;) {
    v71[v68] = i74;
    ++i74;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v91 = new Int8Array(Int8Array, Int8Array, Int8Array);
v91.includes(v91, v91);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e98) {
} finally {
}
