new Set();
function f11(a12, a13, a14, a15) {
    const o22 = {
        __proto__: a14,
        n(a17, a18) {
            for (let v19 = 0; v19 < 32; v19++) {
                a14["p" + v19] = v19;
            }
            return a15;
        },
        1073741824: a15,
        "h": 0.0,
        [a13]: a15,
    };
    return o22;
}
f11(1e-15, "2147483647", "apply", 1000.0);
f11(2.220446049250313e-16, "apply", "apply", 0.0);
f11(-1000000000.0, "2147483647", "2147483647", 1000.0);
const v28 = new Array(10);
function f32(a33, a34, a35, a36) {
    const o46 = {
        "g": 4096,
        ...a36,
        "e": a34,
        set b(a38) {
            function F39(a41, a42) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a41;
            }
            const v43 = new F39(a36, 129);
            new F39(a35, v43);
            new F39(F39, 481111932);
        },
    };
    return o46;
}
let v47 = f32(4096, 481111932, 129, v28);
f32(10, 481111932, 10, f32);
f32(v47, 4096, 481111932, 4096);
v47.g;
try {
    let v51;
    try { v51 = v47.isSealed(); } catch (e) {}
    v47 = v51;
    v51 = v51;
} catch(e52) {
    e52[0] = e52;
    try { e52(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
