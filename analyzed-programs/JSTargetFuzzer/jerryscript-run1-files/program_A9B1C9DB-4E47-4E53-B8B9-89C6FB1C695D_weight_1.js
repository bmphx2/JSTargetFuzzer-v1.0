new Uint32Array(7);
const v5 = new Int8Array(702);
const v8 = new Float32Array(4096);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 702;
}
new F10(4096, 7, 7);
const v16 = new F10(7, 4096, 7);
new F10(4096, 702, 7);
function f24(a25, a26) {
    const o34 = {
        get h() {
            this[46667] = a25;
            try { a26(Float32Array, a26); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a30) {
            this[a30] *= 46667;
            [] = 39946;
            a30.h = this;
            Object.defineProperty(this, "d", { value: 702 });
            const v31 = v5 === a25;
            Object.defineProperty(v16, "h", { writable: true, configurable: true, set: f24 });
            this[1] = v31;
            const v32 = super.a;
            let v33;
            try { v33 = new v32(v32, a30); } catch (e) {}
            v33[2147483648] = v33;
            return a30;
        },
    };
    return o34;
}
const v35 = f24(39946, 46667);
f24(255, 46667);
f24(255, 46667);
const v43 = new BigUint64Array(16);
const v46 = new Float32Array(3007);
const v49 = new Float32Array(3);
Object.defineProperty(v43, "byteOffset", { configurable: true, value: v49 });
v8[v49];
let v51 = v46[2936874794];
v35.g = 46667;
let v54 = --v51;
const v55 = v35 | v54;
const v56 = v35 ** v51;
!v55;
Math.clz32(v56);
--v54;
~v56;
