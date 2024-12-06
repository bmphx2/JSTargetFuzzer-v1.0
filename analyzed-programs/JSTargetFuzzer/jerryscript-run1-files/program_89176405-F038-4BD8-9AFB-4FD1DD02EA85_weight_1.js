function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 5;
    this.d = 5;
    this.e = 5;
}
new F0();
new F0();
new F0();
new Int16Array(5);
new Float32Array(184);
new BigUint64Array(10);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    F18.c = -4294967297;
}
const v21 = new F18();
new F18();
new F18();
function f25() {
    const v28 = new Uint32Array(858);
    return v28;
}
function f31() {
    return v21;
}
const v34 = new BigUint64Array(BigUint64Array, BigUint64Array);
v34.copyWithin();
const v38 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v44 = 1073741824n;
v44 &= v44;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C58 {
}
const v60 = new v38(1);
const v63 = new Int8Array(107);
for (let i66 = 0, i67 = 10;
    i66 < i67;
    (() => {
        const v72 = [2147483648];
        const v75 = [1000];
        Reflect.apply(("object").charCodeAt, v72, v75);
    })()) {
    v63[v60] = i66;
    ++i66;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v90 = new Int8Array(Int8Array, Int8Array, Int8Array);
v90.includes(v90, v90);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e97) {
} finally {
}
