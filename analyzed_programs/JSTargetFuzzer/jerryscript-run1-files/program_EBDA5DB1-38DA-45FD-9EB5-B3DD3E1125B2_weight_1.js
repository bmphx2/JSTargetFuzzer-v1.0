const v6 = new Uint8Array(1000);
const v8 = new Int16Array(v6, 1000, 1000);
for (let v9 = 0; v9 < 32; v9++) {
    v8["p" + v9] = v9;
}
let v12 = -65537;
function f14(a15, a16) {
    const o28 = {
        "f": -54782,
        get c() {
            const v18 = --v12;
            this[a16] = a15;
            let v20 = -65537;
            const v21 = --v20;
            const v22 = -v18;
            const v23 = ~this;
            let v24 = v23 >>> v20;
            Math.atan2(v21, v22);
            v20 && ++v24;
            return v23;
        },
    };
    return o28;
}
const v29 = f14(v12, 3);
const v30 = f14(-9007199254740992, 3);
const v31 = f14(-22020, -22020);
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a36;
}
new F32(61137, v30, 3);
new F32(-54782, v31, -9007199254740992);
new F32(-9007199254740992, v29, -22020);
function F40() {
    if (!new.target) { throw 'must be called with new'; }
    F40.c = -4294967297;
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
Math.min(0.2148301603058278);
let v66 = 1073741824n;
v66 &= v66;
try { Float32Array(); } catch (e) {}
(3).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C80 {
}
const v82 = new v60(1);
const v85 = new Int8Array(107);
for (let i88 = 0, i89 = 10; i88 < i89;) {
    v85[v82] = i88;
    ++i88;
    Math.max(-7);
}
Math.atan2(Float64Array, Math);
const v104 = 2147483649 && -2147483649n;
v104 & v104;
new Int16Array(26);
2 == [4,7,4294967297,-1,1000];
const v112 = new Int8Array(Int8Array, Int8Array, Int8Array);
v112.includes(v112, v112);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e119) {
} finally {
}
