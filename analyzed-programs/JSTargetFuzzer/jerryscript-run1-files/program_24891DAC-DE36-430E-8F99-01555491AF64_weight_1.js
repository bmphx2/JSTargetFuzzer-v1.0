function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -15;
    this.g = -15;
    this.c = -15;
}
const v3 = new F0();
new F0();
new F0();
new Map();
new Uint8ClampedArray(5);
new Uint8Array(129);
new BigUint64Array(164);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    F20.c = -4294967297;
    function f23() {
        try {
        } finally {
            function F24() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v26 = new F24();
            return v26;
        }
        return f23;
    }
}
const v27 = new F20();
new F20();
new F20();
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
}
const v35 = new F31();
const v37 = new Uint32Array();
try { v37.set(v35, -9007199254740991); } catch (e) {}
function f40() {
    const v43 = new Uint32Array(-15);
    return v43;
}
function f46() {
    return v27;
}
const v49 = new BigUint64Array(BigUint64Array, BigUint64Array);
v49.copyWithin();
const v53 = RegExp.bind(2);
Math.fround();
const v58 = Math.min(0.2148301603058278);
let v59 = 1073741824n;
v59 &= v59;
try { Float32Array(); } catch (e) {}
v58.toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Uint8ClampedArray(16);
class C73 {
}
const v75 = new v53(1);
const v78 = new Int8Array(107);
for (let i81 = -14, i82 = 10; i81 < i82;) {
    v78[v75] = i81;
    ++i81;
    Math.max(-7);
}
class C93 {
    set a(a95) {
        for (let i97 = 0; i97 < 1;) {
        }
    }
}
new Int16Array(26, 1, Int16Array, v3);
4 == [4,7,4294967297,-1,1000];
const v107 = new Int8Array(Int8Array, Int8Array, Int8Array);
v107.includes(v107, v107);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e114) {
} finally {
}
