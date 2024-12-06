function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 11;
}
const v3 = new F0();
new F0();
let v5 = new F0();
class C6 {
    o(a8, a9) {
        const v10 = v3.__proto__;
        super.e = a9;
        ({"e":F0,"f":v5,"g":a8,} = v10);
        try { new v10(v3, this, v3, v10, v5); } catch (e) {}
        return a8;
    }
    constructor(a13, a14) {
        v3.h = a13;
        typeof a13 === "object";
    }
}
new C6(C6, v3);
new C6(F0, v3);
new C6(C6, F0);
new Float64Array(4096);
new Uint32Array(1935);
new Uint8ClampedArray(1531);
const v36 = [13,9,-12559,-8,-4294967297];
new WeakMap();
const v39 = [0.0,-1.7976931348623157e+308];
[-53434.00315554999,-2.0,2.2250738585072014e-308,0.27370362984709407,-3.0,-1.0673669879627767e+308];
[906687.0125431241,2.2723350947232746e+307];
new Date();
const v45 = new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray);
const o48 = {
    "maxByteLength": 4039,
};
let v49 = 3;
const v50 = new ArrayBuffer(v49, o48);
new Int8Array(v50);
function* f53(a54, a55) {
    yield* v45;
    return 4039;
}
const v58 = Array(9);
const v61 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v67 = `
    v58[v61.join(v67)];
`;
eval(v67);
let v72 = 0;
while (v72 < 0) {
    Object.defineProperty(v39, "length", { configurable: true, enumerable: true, get: f53 });
    const v77 = -2 * Int16Array;
    const v78 = ~-2;
    --v49;
    Math.asin(v78);
    Math.cos(v77);
    v72++;
}
[3,-28987,536870889,1073741825,15];
let v84 = [65535,-1139741600];
new Uint8Array(54);
new Float32Array(256);
new Float64Array(1024);
new Uint8Array(v36, 256, 1531);
let v96 = -41990;
const v98 = v84++;
let v99 = --v96;
const v100 = --v99;
v96--;
v100 * (v98 << v96);
