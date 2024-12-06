function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    if (a5) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            a10(F7);
        }
    }
}
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a16;
    this.b = a15;
}
const v17 = new F13("4294967295", "-72591847");
new F13("c", "-72591847");
new F13("-72591847", "4294967295");
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = false;
    this.a = a22;
    this.b = a23;
}
new F20("4294967295", F20);
const v25 = new F20("c", false);
new F20("c", v25);
function f27() {
    return v17;
}
new Int32Array(1024);
new Int8Array(13);
new Uint8Array(129);
function F37() {
    if (!new.target) { throw 'must be called with new'; }
    F37.c = -4294967297;
}
const v40 = new F37();
new F37();
new F37();
function f44() {
    const v47 = new Uint32Array(858);
    return v47;
}
function f50() {
    return v40;
}
const v53 = new BigUint64Array(BigUint64Array, BigUint64Array);
v53.copyWithin();
const v57 = RegExp.bind(2);
let v58 = Int16Array;
const v61 = new Float64Array(65);
[v58] = v61;
Math.fround();
Math.min(0.2148301603058278);
let v67 = 1073741824n;
v67 &= v67;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C81 {
}
const v83 = new v57(1);
const v86 = new Int8Array(107);
for (let i89 = 0, i90 = 10; i89 < i90;) {
    ([-1178371228,-468322201,-4096,-268435456,-268435456,-3,-9007199254740991]).unshift([-65537,8,1073741824,-10,-56139,-2]);
    const t65 = RegExp.bind(i89);
    new t65(1);
    v86[v83] = i89;
    ++i89;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v113 = new Int8Array(Int8Array, Int8Array, Int8Array);
v113.includes(v113, v113);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e120) {
} finally {
}
