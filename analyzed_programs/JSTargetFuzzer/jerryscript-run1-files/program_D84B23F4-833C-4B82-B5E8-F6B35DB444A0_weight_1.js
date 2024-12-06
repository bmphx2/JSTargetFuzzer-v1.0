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
const o18 = {
    "apply": f0,
    "call": f0,
    "defineProperty": f0,
    "deleteProperty": f0,
    "get": f0,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f0,
    "has": f0,
    valueOf(a11, a12, a13, a14) {
        return -1n;
    },
    "isExtensible": f0,
    "ownKeys": f0,
    "set": f0,
    "setPrototypeOf": f0,
};
new Proxy(v7, o18);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
    this.e = a23;
}
new F21(v7, v7);
new F21(f0, v9);
new F21(v8, v9);
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    F28.c = -4294967297;
}
const v31 = new F28();
new F28();
new F28();
function f35() {
    const v38 = new Uint32Array(858);
    return v38;
}
function f41() {
    return v31;
}
const v44 = new BigUint64Array(BigUint64Array, BigUint64Array);
v44.copyWithin();
const v48 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v54 = 1073741824n;
v54 &= v54;
try { Float32Array(); } catch (e) {}
(-12n).toString();
-112059956n ^ 0n;
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C71 {
}
const v73 = new v48(1);
const v76 = new Int8Array(107);
for (let i79 = 0, i80 = 10;
    i79 < i80;
    (() => {
        function f84() {
            arguments >>> f35;
            arguments[5];
            return arguments;
        }
        f84(f84);
    })()) {
    v76[v73] = i79;
    ++i79;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v101 = new Int8Array(Int8Array, Int8Array, Int8Array);
v101.includes(v101, v101);
let v106;
try { v106 = new f0(23751, 23751, BigUint64Array, 23751, ...23751); } catch (e) {}
v106 == f35;
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e113) {
} finally {
}
