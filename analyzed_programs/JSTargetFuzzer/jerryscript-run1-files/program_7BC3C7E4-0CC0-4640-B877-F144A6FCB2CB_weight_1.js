let v5 = 536870888;
const v14 = 3 > 1;
const v15 = typeof v14;
const v16 = ("lx").charAt(128);
let [,...v17] = v16;
function f18(a19, a20, a21) {
    const o31 = {
        [false](a23, a24) {
            const v27 = a20 ^ v5;
            +v5;
            --v5;
            Math.cosh(v27);
            return false;
        },
        [a19]: a20,
        "h": -4294967296,
        "f": a21,
        "g": v16,
    };
    return o31;
}
f18(3.0, 1e-15, 1e-15, 536870888, -4294967296, f18(1e-15, 3.0, false, 3.0, v17, v15));
f18(v5, 3.0, false);
try { v14(); } catch (e) {}
