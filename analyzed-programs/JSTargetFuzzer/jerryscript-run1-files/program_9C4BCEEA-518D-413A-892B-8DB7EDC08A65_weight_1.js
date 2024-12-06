function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = undefined;
    this.f = undefined;
    this.c = undefined;
}
new F1();
const v4 = new F1();
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
try { v4(); } catch (e) {}
(-12n).toString();
const v61 = [2036046200,-9223372036854775807,-61646];
([54783,-268435456,46487,11,-1059659455,16,65537]).fill();
const v65 = v61["map"](Array);
new Float64Array(16);
class C70 {
}
const v72 = new v48(v65);
const v75 = new Int8Array(107);
for (let i78 = 0, i79 = 10; i78 < i79;) {
    v75[v72] = i78;
    ++i78;
    Math.max(7);
    function f89(a90) {
        return 26;
    }
    class C91 extends f89 {
        static [-1024] = 2;
    }
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v98 = new Int8Array(Int8Array, Int8Array, Int8Array);
v98.includes(v98, v98);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e105) {
} finally {
}
