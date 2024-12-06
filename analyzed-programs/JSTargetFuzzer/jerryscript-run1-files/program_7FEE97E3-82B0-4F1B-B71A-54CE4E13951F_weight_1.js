function f0() {
}
const v2 = new WeakSet();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.b = f0;
}
const v7 = new F3(WeakSet, F3);
const v8 = new F3(F3, v7);
const v9 = new F3(f0, f0);
const o10 = {
    "apply": f0,
    "call": f0,
    "defineProperty": f0,
    "deleteProperty": f0,
    "get": f0,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f0,
    "has": f0,
    "isExtensible": f0,
    "ownKeys": f0,
    "set": f0,
    "setPrototypeOf": f0,
};
new Proxy(v7, o10);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
    this.e = a15;
}
new F13(v7, v7);
new F13(f0, v9);
new F13(v8, v9);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    F20.c = -4294967297;
}
const v23 = new F20();
new F20();
new F20();
function f27() {
    const v30 = new Uint32Array(858);
    return v30;
}
function f33() {
    return v23;
}
const v36 = new BigUint64Array(BigUint64Array, BigUint64Array);
v36.copyWithin();
const v40 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v46 = 1073741824n;
v46 &= v46;
try { Float32Array(); } catch (e) {}
(-12n).toString();
-112059956n ^ 0n;
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C63 {
}
const v65 = new v40(1);
const v68 = new Int8Array(107);
for (let i71 = 0, i72 = 10;
    i71 < i72;
    (() => {
        function f76() {
            arguments >>> f27;
            arguments[5];
            return arguments;
        }
        f76(f76);
    })()) {
    v68[v65] = i71;
    ++i71;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v93 = new Int8Array(Int8Array, Int8Array, Int8Array);
v93.includes(v93, v93);
let v98;
try { v98 = new f0(23751, 23751, BigUint64Array, 23751, ...23751); } catch (e) {}
v98 == f27;
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e105) {
} finally {
}
