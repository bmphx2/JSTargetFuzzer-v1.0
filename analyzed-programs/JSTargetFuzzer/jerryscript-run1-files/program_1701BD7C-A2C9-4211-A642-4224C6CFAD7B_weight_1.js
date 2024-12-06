function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 32151;
    this.g = 32151;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0;
    a12.d = a13;
}
new F9(0, v4, F0);
new F9(0, v3, v3);
new F9(1024, v4, 1024);
new WeakMap();
function f19() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
function f35(a36, a37) {
    const o44 = {
        get h() {
            this[803142468] = a36;
            try { a37(a37, a37); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a41) {
            this[a41] *= 803142468;
            [] = 39946;
            const v42 = super.a;
            let v43;
            try { v43 = new v42(v42, a41, a41, 190); } catch (e) {}
            v43[2147483648] = v43;
            return a41;
        },
    };
    return o44;
}
const v45 = f35(39946, 803142468);
f35(255, 803142468);
f35(255, 803142468);
const v53 = new BigUint64Array(16);
const v56 = new Float32Array(3007);
const v59 = new Float32Array(3);
Object.defineProperty(v53, "byteOffset", { configurable: true, value: v59 });
v56[v59];
let v61 = v56[2936874794];
v45.g = -1024;
let v64 = --v61;
const v65 = v45 | v64;
const v66 = v45 ** v61;
!v65;
Math.clz32(v66);
--v64;
~v66;
