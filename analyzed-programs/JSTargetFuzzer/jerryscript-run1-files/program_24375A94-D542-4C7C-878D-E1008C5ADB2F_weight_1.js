function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.f = f0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
const v6 = f0 in v3;
let v7;
try { v7 = v3.m(v6, F1); } catch (e) {}
v7 = v6;
v3.length = 5;
[[f0,[v3,v5],v3,v5]];
[-1314342040,536870887,-6,7,-1297875044,13,4096,3,65535];
[-638413662,-31729,-8,9877,1501682739,-4];
[-15,-1,-2147483647];
new Date();
function F32() {
    if (!new.target) { throw 'must be called with new'; }
    F32.prototype = 1433387171;
}
const v35 = new F32();
new F32();
new F32();
function f39() {
    const v42 = new Uint32Array(858);
    return v42;
}
function f45() {
    new Float32Array(13);
    new Float32Array(0);
    new BigInt64Array(138);
    return v35;
}
const v57 = new BigUint64Array(BigUint64Array, BigUint64Array);
v57.copyWithin();
const v61 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
let v67 = 1073741824n;
v67 &= v67;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C81 {
}
const v83 = new v61(1);
const v86 = new Int8Array(107);
for (let i89 = 0, i90 = 10; i89 < i90;) {
    v86[v83] = i89;
    const v103 = new Float64Array(231);
    3650 * v103;
    -1679320101 === 1341;
    ++i89;
    Math.max(7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v114 = new Int8Array(Int8Array, Int8Array, Int8Array);
v114.includes(v114, v114);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e121) {
} finally {
}
