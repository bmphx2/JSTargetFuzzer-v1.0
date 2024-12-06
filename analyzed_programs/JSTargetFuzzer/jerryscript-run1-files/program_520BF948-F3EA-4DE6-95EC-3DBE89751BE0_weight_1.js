function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1909746842;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a9;
    this.b = a9;
}
const v10 = new F6(v4, v3);
const v11 = new F6(F0, v10);
new F6(v11, v3);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    F16.c = -4294967297;
}
const v19 = new F16();
new F16();
new F16();
new Number(4087n);
new F16([1073741825,10000,129,257,562671243,-128,5,1950358049,1862516392]);
function f28() {
    const v31 = new Uint32Array(858);
    return v31;
}
function f34() {
    return v19;
}
const v37 = new BigUint64Array(BigUint64Array, BigUint64Array);
v37.copyWithin();
const v41 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v47 = 1073741824n;
v47 &= v47;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C61 {
}
const v63 = new v41(1);
const v66 = new Int8Array(107);
for (let i69 = 0, i70 = 10; i69 < i70;) {
    v66[v63] = i69;
    ++i69;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v86 = new Int8Array(Int8Array, Int8Array, Int8Array);
v86.includes(v86, v86);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
    const v94 = new BigUint64Array();
    try { v94.set(); } catch (e) {}
    let v97 = new BigUint64Array(536870912);
    v97++;
} catch(e99) {
} finally {
}
