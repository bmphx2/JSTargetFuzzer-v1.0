function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1;
    this.g = 1;
    Object.defineProperty(this, "g", { writable: true, configurable: true, enumerable: true, value: F0 });
    try { this["getUint8"](); } catch (e) {}
}
const v8 = new F0();
const v9 = new F0();
new F0();
new Uint8ClampedArray(4);
v8 instanceof Uint8ClampedArray;
new BigInt64Array(6);
new Int16Array(64);
new Float64Array(867);
new Float64Array(0);
const v29 = new BigInt64Array(4096);
const v34 = new Map();
function F36() {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = new F36();
class C39 {
}
const v40 = new F36();
const v42 = `
    const v43 = F36 ^ -1.0;
    function F44(a46, a47, a48) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = v43;
        this.a = -1.0;
        this.f = a46;
    }
    const v49 = new F44(C39, v38, v40);
    new F44(v43, v38, v49);
`;
const o51 = {
    ...v42,
};
let v53 = -37768;
function F57(a59, a60) {
    if (!new.target) { throw 'must be called with new'; }
    v29.b = a60;
    this.a = 13;
    this.f = a59;
}
let v61 = new F57(536870912, -574757824);
new F57(536870912, 13);
const v63 = new F57(v53, -579245951);
v61 = v63;
let v64;
try {
const t0 = -574757824;
v64 = t0(255, F57, -579245951, v34, Map);
} catch (e) {}
let v65;
try { v65 = v64(v34, v34, Map, 255); } catch (e) {}
v63[268435441] = v61;
try { v63.o(v63); } catch (e) {}
v9[-2] = v34;
~4;
Math.floor(-5.238788401432517);
Math.ceil(6);
([-3.9420134706840244,1000000.0,0.33415843436813053,2.2250738585072014e-308,-9.57664291846752e+307,7.5080309400479095,-836439.2043889777]).lastIndexOf;
[5.0];
new Set(v64);
const v80 = new Uint32Array(181);
v53 = 1;
function f82() {
    return v65;
}
v65 /= -5.238788401432517;
let v83 = BigUint64Array;
let v84 = new v83(6);
let v85 = 253;
[v85,,v83,v84] = v80;
function* f88(a89, a90) {
    const o91 = {
    };
    268435439n ** o91;
    return a90;
}
try { v83["abs"](181, v85, v83); } catch (e) {}
new Uint16Array(v85);
for (let i104 = 0;
    (() => {
        const v106 = i104 < 2;
        [Float32Array,1142439131];
        const o110 = {
            ...f88,
            226: -579245951,
        };
        return v106;
    })();
    i104++) {
    const v114 = new Function("x");
    v114.name;
}
[v64];
const v118 = [977677784,-4230];
function f119(a120, a121, a122) {
    return a122;
}
v118.reduceRight(f119);
Function();
