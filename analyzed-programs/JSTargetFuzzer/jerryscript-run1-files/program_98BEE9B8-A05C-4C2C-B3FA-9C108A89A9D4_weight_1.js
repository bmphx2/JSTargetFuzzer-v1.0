new WeakSet();
new Uint16Array(94);
new Int16Array(128);
new Uint8ClampedArray(7);
const v16 = new Array(10);
let v18 = 4096;
function f20(a21, a22, a23, a24) {
    const o34 = {
        "g": v18,
        ...a24,
        "e": a22,
        set b(a26) {
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a29;
            }
            new F27(a24, 129);
            new F27(a23, a23);
            new F27(F27, 481111932);
        },
    };
    return o34;
}
let v35 = f20(v18, 481111932, 129, v16);
f20(10, 481111932, 10, f20);
f20(v35, v18, 7, v18);
v35.g;
try {
    let v39;
    try { v39 = v35.isSealed(); } catch (e) {}
    v35 = v39;
    v18 = Int16Array;
} catch(e40) {
    e40[0] = e40;
    try { e40(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(Int32Array);
new Int16Array(213);
