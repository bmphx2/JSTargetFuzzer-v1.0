function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2944;
    this.h = 2944;
    this.f = 2944;
}
const v3 = new F0();
new F0(v3, v3);
const v5 = new F0();
function f6(a7, a8) {
    const o23 = {
        [F0]: F0,
        5: v5,
        m(a10, a11, a12, a13) {
            const v14 = a12.__proto__;
            const v15 = new F0();
            function f16(a17, a18, a19, a20) {
                a19 in a8;
                let [] = v14;
                v3.valueOf = v14;
                return a17;
            }
            f16(a8, v15, v3, a10);
            return a7;
        },
    };
    return o23;
}
f6(f6(v3, f6(v5, v5)), v5);
function F33() {
    if (!new.target) { throw 'must be called with new'; }
    F33.c = -4294967297;
}
const v36 = new F33();
new F33();
new F33();
function f40() {
    const v43 = new Uint32Array(858);
    return v43;
}
function f46() {
    return v36;
}
const v49 = new BigUint64Array(BigUint64Array, BigUint64Array);
v49.copyWithin();
const v53 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v59 = 1073741824n;
v59 &= v59;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C73 {
}
const v75 = new v53(1);
const v78 = new Int8Array(107);
for (let i81 = 0, i82 = 10; i81 < i82;) {
    v78[v75] = i81;
    ++i81;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v98 = new Int8Array(Int8Array, Int8Array, Int8Array);
v98.includes(v98, v98);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e105) {
} finally {
}
