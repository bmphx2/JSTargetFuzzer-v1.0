function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = undefined;
    this.f = undefined;
    this.c = undefined;
}
new F1();
new F1();
new F1();
new WeakSet();
new Date();
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    F28.prototype = 1433387171;
}
const v31 = new F28();
new F28();
const v33 = new F28();
function f35() {
    new Uint32Array(858);
    return v33;
}
function f41() {
    return v31;
}
const v44 = new BigUint64Array(f35, BigUint64Array);
v44.copyWithin();
const v48 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
let v54 = 1073741824n;
v54 &= v54;
try { Float32Array(); } catch (e) {}
(-12n).toString();
const v63 = ([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C68 {
}
const v70 = new v48(v63);
const v73 = new Int8Array(107);
for (let i76 = 0, i77 = 10; i76 < i77;) {
    v73[v70] = i76;
    ++i76;
    Math.max(7);
    function f87(a88) {
        return 26;
    }
    class C89 extends f87 {
        static [1] = 2;
    }
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v96 = new Int8Array(Int8Array, Int8Array, Int8Array);
v96.includes(v96, v96);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e103) {
} finally {
}
