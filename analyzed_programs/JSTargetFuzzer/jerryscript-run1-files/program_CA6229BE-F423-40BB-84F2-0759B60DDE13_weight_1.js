const v5 = -Infinity;
const v15 = new Array(10);
let v17 = 4096;
function f19(a20, a21, a22, a23) {
    const o33 = {
        "g": v17,
        ...a23,
        "e": a21,
        set b(a25) {
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a28;
            }
            new F26(a23, 129);
            new F26(a22, a22);
            new F26(F26, 481111932);
        },
    };
    return o33;
}
let v34 = f19(v17, 481111932, 129, v15);
f19(10, 481111932, 10, f19);
const v36 = f19(v34, v17, 481111932, v17);
v34.g;
try {
    let v38;
    try { v38 = v34.isSealed(); } catch (e) {}
    v34 = v38;
    v17 = v38;
} catch(e39) {
    e39[0] = e39;
    let v40;
    try { v40 = e39(Array); } catch (e) {}
    const t33 = v36.e;
    t33[2] -= v5;
    Array.valueOf = e39;
    Math.asin(v40);
    Math.sqrt(v40);
    --v40;
    Math.cosh(-4);
}
new Int32Array(1959, 0.0);
new Int32Array(512);
new Int16Array(213);
