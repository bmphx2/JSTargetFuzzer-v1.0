function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 16;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(214);
new Int16Array(76);
new Uint32Array(3);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    F21.c = -4294967297;
}
const v24 = new F21();
new F21();
new F21();
function f28() {
    const v31 = new Uint32Array(858);
    return v31;
}
function f34() {
    return v24;
}
const v37 = new BigUint64Array(BigUint64Array, BigUint64Array);
v37.copyWithin();
const v41 = RegExp.bind(2);
const v43 = [];
const o45 = {
    p() {
        this[v43] = this;
        return v43;
    },
};
Math.fround();
Math.min(0.2148301603058278);
let v50 = 1073741824n;
v50 &= v50;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C64 {
}
const v66 = new v41(1);
const v69 = new Int8Array(107);
for (let i72 = 0, i73 = 10; i72 < i73;) {
    v69[v66] = i72;
    ++i72;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v89 = new Int8Array(Int8Array, Int8Array, Int8Array);
v89.includes(v89, v89);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e96) {
} finally {
}
