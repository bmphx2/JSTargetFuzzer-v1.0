function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.c = a5;
}
const v6 = new F3(1073741823);
new F3(1073741823);
const v8 = new F3(-39023);
function f9(a10, a11, a12, a13) {
    const o28 = {
        valueOf(a15, a16, a17, a18) {
            function F19(a21, a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a17;
                this.a = v6;
            }
            const v25 = new F19(a13, 1073741823, a11, F19);
            const v26 = new F19(a10, -39023, -65537, v25);
            new F19(a10, a10, 1073741823, a11);
            return v26;
        },
        ...v8,
    };
    return o28;
}
const v29 = f9(-65537, -39023, 1073741823, -65537);
f9(-65537, -65537, -65537, f9(1073741823, -65537, -65537, -39023));
function F32() {
    if (!new.target) { throw 'must be called with new'; }
    F32.c = -4294967297;
}
new F32();
new F32();
new F32();
function f39() {
    const v42 = new Uint32Array(858);
    return v42;
}
function f45() {
    return F3;
}
const v48 = new BigUint64Array(BigUint64Array, BigUint64Array);
v48.copyWithin();
const v52 = RegExp.bind(2);
const v56 = Math.fround();
Math.min(0.2148301603058278);
let v58 = 1073741824n;
v58 &= v58;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
resourceName.bind();
new Float64Array(16);
let v75 = 0;
for (let i = 0; i < 10; i++) {
    9n > v75;
    v75++;
}
class C78 {
}
const v80 = new v52(v56);
const v83 = new Int8Array(107);
for (let i86 = 0, i87 = 10; i86 < i87;) {
    v83[v80] = i86;
    ++i86;
    Math.max(-7);
}
new Int16Array(26);
v29 == [4,7,4294967297,-1,1000];
const v103 = new Int8Array(Int8Array, Int8Array, Int8Array);
v103.includes(v103, v103);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e110) {
} finally {
}
