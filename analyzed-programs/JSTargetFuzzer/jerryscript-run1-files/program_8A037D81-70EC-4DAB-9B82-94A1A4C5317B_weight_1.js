function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 4;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o10 = {
        get e() {
            v3 = v4;
            try { F0(); } catch (e) {}
            return v3;
        },
        "f": v3,
        [v3]: v4,
        __proto__: v3,
        1073741824: a7,
        [a7]: a7,
    };
    return o10;
}
f6(v3);
f6(f6(v5));
new Date();
new Uint32Array(1493);
new Uint8ClampedArray(1000);
new BigInt64Array(158);
function F40() {
    if (!new.target) { throw 'must be called with new'; }
    F40.prototype = 1433387171;
}
const v43 = new F40();
new F40();
new F40();
function f47() {
    const v50 = new Uint32Array(858);
    return v50;
}
function f53() {
    return v43;
}
const v56 = new BigUint64Array(BigUint64Array, BigUint64Array);
v56.copyWithin();
const v60 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
let v66 = 1073741824n;
v66 &= v66;
switch (1000) {
    default:
        new BigInt64Array(40);
        new Uint32Array(1);
        new Int8Array(1024);
        break;
}
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C89 {
}
const v91 = new v60(1);
const v94 = new Int8Array(107);
for (let i97 = 0, i98 = 10; i97 < i98;) {
    v94[v91] = i97;
    ++i97;
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
