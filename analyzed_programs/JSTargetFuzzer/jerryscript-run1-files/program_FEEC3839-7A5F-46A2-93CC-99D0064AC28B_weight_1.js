function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 42914;
}
new F0();
const v4 = new F0();
new F0();
function f19(a20, a21) {
    const o29 = {
        get h() {
            this[46667] = a20;
            try { a21(a21, a21); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        get a() {
            Object.defineProperty(this, 3, { writable: true, set: f19 });
            super.g = 3;
            return a21;
        },
        m(a26) {
            this[a26] *= 46667;
            [] = 39946;
            const v27 = super.a;
            let v28;
            try { v28 = new v27(v27, a26); } catch (e) {}
            v28[2147483648] = v28;
            return a26;
        },
    };
    return o29;
}
const v30 = f19(39946, 46667);
f19(255, 46667);
f19(255, 46667);
const v38 = new BigUint64Array(16);
const v41 = new Float32Array(3007);
const v44 = new Float32Array(3);
Object.defineProperty(v38, "byteOffset", { configurable: true, value: v44 });
v41[v44];
let v46 = v41[2936874794];
v30.g = -1024;
let v49 = --v46;
const v50 = v30 | v49;
const v51 = v30 ** v46;
!v50;
const v53 = Math.clz32(v51);
const v54 = (a55, a56, a57, a58) => {
    try { a56(a56, a56, -6, a56, a56); } catch (e) {}
    return Float32Array;
};
try { v4.match(null, 39946, v53); } catch (e) {}
--v49;
~v51;
