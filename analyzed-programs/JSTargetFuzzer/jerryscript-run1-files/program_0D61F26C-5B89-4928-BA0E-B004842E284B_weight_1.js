function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 129;
    this.d = 129;
    this.c = 129;
}
const v3 = new F0(F0, F0, F0);
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o18 = {
        set b(a9) {
            try { a9(v5); } catch (e) {}
            try {
                super.setPrototypeOf(a7);
            } catch(e12) {
            }
        },
        ...v5,
        set f(a14) {
            const v15 = v3[a7];
            try { new v15(); } catch (e) {}
            v4[this];
        },
        ...v3,
        8: a7,
    };
    return o18;
}
f6(v4);
const v20 = f6(v5);
f6(v4);
new Date(1254606044, 1073741824, 1254606044);
function F39() {
    if (!new.target) { throw 'must be called with new'; }
    F39.prototype = 1433387171;
}
const v42 = new F39();
new F39();
new F39();
function f46() {
    const v49 = new Uint32Array(858);
    return v49;
}
function f52() {
    return v42;
}
const v55 = new BigUint64Array(BigUint64Array, BigUint64Array);
v55.copyWithin();
const v59 = gc.bind(2);
Math.fround();
Math.min(NaN);
let v65 = 1073741824n;
function f66(a67, a68) {
    v55[Symbol.split] = v20;
}
new Promise(f66);
v65 &= v65;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C86 {
}
const v88 = new v59(1);
const v91 = new Int8Array(107);
for (let i94 = 0, i95 = 10; i94 < i95;) {
    v91[v88] = i94;
    ++i94;
    Math.max(7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v111 = new Int8Array(Int8Array, Int8Array, Int8Array);
v111.fill(v111, v111);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e118) {
} finally {
}
