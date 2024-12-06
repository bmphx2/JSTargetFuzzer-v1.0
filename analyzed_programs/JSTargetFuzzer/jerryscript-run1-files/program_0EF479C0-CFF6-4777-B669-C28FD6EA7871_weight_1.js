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
const v19 = new F13("-72591847", "4294967295");
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = false;
    this.a = a22;
    this.b = a23;
}
const v24 = new F20("4294967295", F20);
const v25 = new F20("c", false);
let v26 = new F20("c", v25);
function f27() {
    return v17;
}
v24.b = v17;
v26 = v24;
new Int32Array(1024);
new Int8Array(13);
new Uint8Array(129);
function F40() {
    if (!new.target) { throw 'must be called with new'; }
    F40.c = -4294967297;
}
const v43 = new F40();
const v44 = new F40();
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
let v61 = Int16Array;
const v64 = new Float64Array(65);
[v61] = v64;
Math.fround();
Math.min(0.2148301603058278);
let v70 = 1073741824n;
v70 &= v70;
v44.toString = f53;
try { new v60(v56, 9007199254740990, 65, v19, f47); } catch (e) {}
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C88 {
}
const v90 = new v60(1);
const v93 = new Int8Array(107);
for (let i96 = 0, i97 = 10; i96 < i97;) {
    ([-1178371228,-468322201,-4096,-268435456,-268435456,-3,-9007199254740991]).unshift([-65537,8,1073741824,-10,-56139,-2]);
    const t69 = RegExp.bind(i96);
    new t69(1);
    v93[v90] = i96;
    ++i96;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v120 = new Int8Array(Int8Array, Int8Array, Int8Array);
v120.includes(v120, v120);
new Uint8ClampedArray(6);
try {
    const v126 = new WeakSet(4087n);
    v126 === v126;
} catch(e132) {
} finally {
}
