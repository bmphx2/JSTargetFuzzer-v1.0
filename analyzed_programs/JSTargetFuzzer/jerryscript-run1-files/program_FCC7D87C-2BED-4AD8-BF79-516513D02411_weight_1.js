const v5 = new Int8Array(5);
const v8 = new BigUint64Array(8);
const v11 = new Float64Array(5);
function f12(a13, a14) {
    const o29 = {
        set a(a16) {
            for (let i19 = 0, i20 = 10; i19 < i20; i19++, i20--) {
                this ^ i20;
            }
        },
        __proto__: v5,
    };
    return o29;
}
const v30 = f12(-2626, 844798575);
const v31 = f12(8, 5);
const v32 = f12(5, 5);
let v34;
try { v34 = v32["fill"](); } catch (e) {}
v11[5] &= 844798575;
function f35(a36, a37, a38) {
    const o39 = {
        "c": v8,
        1000: a36,
    };
    return o39;
}
f35(v11, 5, v31);
f35(v11, 5, v30);
f35(Int8Array, -2626, v34);
