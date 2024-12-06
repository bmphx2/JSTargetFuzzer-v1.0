function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = true;
    this.g = true;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
    this.c = a8;
    this.d = a8;
}
new F6(v5);
new F6(v4);
new F6(v5);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    F15.c = -4294967297;
}
const v18 = new F15();
new F15();
const v20 = new F15();
function f22() {
    const v25 = new Uint32Array(858);
    const v26 = v20[536870889];
    function f27() {
        return v26;
    }
    f22();
    return v25;
}
function f31() {
    return v18;
}
const v34 = new BigUint64Array(BigUint64Array, BigUint64Array);
v34.copyWithin();
const v38 = RegExp.bind(2);
Math.fround();
const v43 = Math.min(0.2148301603058278);
let v44 = 1073741824n;
v44 &= v44;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
const v56 = new Float64Array(16);
class C58 {
}
const v60 = new v38(1);
const v63 = new Int8Array(107);
for (let i66 = 0, i67 = 10; i66 < i67;) {
    v63[v60] = i66;
    ++i66;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v83 = new Int8Array(Int8Array, Int8Array, Int8Array);
v83.includes(v83, v83);
const v86 = new Uint8ClampedArray(6);
for (const v87 in v86) {
    v34.valueOf = f22;
}
try { v83.toLocaleString(v43, v56); } catch (e) {}
[-1,-49940,-1120735589,2,-40438,33285,-61373367,13];
[-9223372036854775807,16,39067,-1145886595];
[-8,-4294967295,65537,-9007199254740990,-65536,-780607973,4096,15,7,1000];
try {
    new WeakSet(4087n);
} catch(e95) {
} finally {
}
