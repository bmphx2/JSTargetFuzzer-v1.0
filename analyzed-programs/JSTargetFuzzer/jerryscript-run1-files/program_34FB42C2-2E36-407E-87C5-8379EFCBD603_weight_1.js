function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 42914;
}
new F0();
const v4 = new F0();
new F0();
function f19(a20, a21) {
    const o28 = {
        get h() {
            this[46667] = a20;
            try { a21(a21, a21); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a25) {
            this[a25] *= 46667;
            [] = 39946;
            const v26 = super.a;
            let v27;
            try { v27 = new v26(v26, a25); } catch (e) {}
            v27[2147483648] = v27;
            return a25;
        },
    };
    return o28;
}
const v29 = f19(39946, 46667);
f19(255, 46667);
f19(255, 46667);
const v37 = new BigUint64Array(16);
const v40 = new Float32Array(3007);
const v43 = new Float32Array(3);
Object.defineProperty(v37, "byteOffset", { configurable: true, value: v43 });
v40[v43];
let v45 = v40[2936874794];
v29.g = -1024;
let v48 = --v45;
const v49 = v29 | v48;
const v50 = v29 ** v45;
!v49;
const v52 = Math.clz32(v50);
const v53 = (a54, a55, a56, a57) => {
    try { a55(a55, a55, -6, a55, a55); } catch (e) {}
    return Float32Array;
};
try { v4.match(null, 39946, v52); } catch (e) {}
--v48;
~v50;
