function f0() {
}
new BigUint64Array(3);
new Uint8Array(2306, BigUint64Array, Uint8Array);
new Uint16Array(0);
const v15 = new Array(9);
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
            new F26(F26, 10);
        },
    };
    return o33;
}
let v34 = f19(v17, 10, 129, v15);
f19(9, 10, 9, f19);
f19(v34, v17, 10, v17);
v34.g;
try {
    let v38;
    try { v38 = v34.isSealed(); } catch (e) {}
    const v41 = new Int16Array(1);
    v41.fill();
    v34 = v38;
    v17 = v38;
} catch(e43) {
    e43[0] = e43;
    try { e43(Array); } catch (e) {}
}
const v47 = new Int32Array(1959);
new Int32Array(512);
new Int16Array(213, 0, v47);
