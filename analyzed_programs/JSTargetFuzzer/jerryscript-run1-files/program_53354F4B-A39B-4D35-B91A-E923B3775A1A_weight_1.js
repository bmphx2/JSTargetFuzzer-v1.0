new Set();
function f14(a15, a16) {
    const o23 = {
        get h() {
            this[46667] = a15;
            try { a16(a16, a16); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a20) {
            this[a20] *= 46667;
            [] = 39946;
            const v21 = super.a;
            let v22;
            try { v22 = new v21(v21, a20); } catch (e) {}
            v22[2147483648] = v22;
            return a20;
        },
    };
    return o23;
}
const v24 = f14(39946, 46667);
const v25 = f14(255, 46667);
f14(255, 46667);
const v32 = new BigUint64Array(16);
const v35 = new Float32Array(3007);
const v38 = new Float32Array(3, Float32Array, 39946);
Object.defineProperty(v32, "byteOffset", { configurable: true, value: v38 });
v35[v38];
let v40 = v35[2936874794];
v24.g = -1;
const v43 = [-4096];
Reflect.apply(Math.random, v25, v43);
try { v40(v43, v25, 39946, -4294967296); } catch (e) {}
let v48 = --v40;
const v49 = v24 | v48;
const v50 = v24 ** v40;
!v49;
Math.clz32(v50);
--v48;
~v50;
