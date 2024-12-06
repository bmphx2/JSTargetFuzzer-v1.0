function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v5,v4,F0,v5];
const v7 = [v4];
[v7,v3,v7,v3,v6];
const v11 = new Uint8Array(1086);
new Float32Array(681);
new Float32Array(3771, Uint8Array, Float32Array, v11);
function f21(a22, a23) {
    const o30 = {
        get h() {
            this[46667] = a22;
            try { a23(a23, a23); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a27) {
            this[a27] *= 46667;
            [] = 39946;
            const v28 = super.a;
            let v29;
            try { v29 = new v28(v28, a27); } catch (e) {}
            v29[2147483648] = v29;
            return a27;
        },
    };
    return o30;
}
const v31 = f21(39946, 46667);
f21(255, 46667);
f21(255, 46667);
class C39 {
    constructor(a41) {
        ("getOwnPropertyDescriptor").match(a41);
    }
}
const v43 = new C39(Uint8Array, Float32Array);
new C39(v43);
const v46 = new BigUint64Array(16);
const v49 = new Float32Array(3007);
const v52 = new Float32Array(3);
Object.defineProperty(v46, "byteOffset", { configurable: true, value: v52 });
v49[v52];
let v54 = v49[2936874794];
v31.g = -1024;
let v57 = --v54;
const v58 = v31 | v57;
const v59 = v31 ** v54;
!v58;
Math.clz32(v59);
--v57;
~v59;
