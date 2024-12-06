try {
} finally {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
const v14 = new Uint8ClampedArray(128);
new BigInt64Array(1784);
for (const v20 in v14) {
    function F21(a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a24;
    }
    const v25 = new F21(65535, 512);
    new F21(255, v25);
    new F21(-48690, F21);
}
new BigInt64Array(255);
const v31 = new Array(10);
let v33 = 4096;
function f35(a36, a37, a38, a39) {
    const o49 = {
        "g": v33,
        ...a39,
        "e": a37,
        set b(a41) {
            function F42(a44, a45) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a44;
            }
            new F42(a39, 129);
            new F42(a38, a38);
            new F42(F42, 481111932);
        },
    };
    return o49;
}
let v50 = f35(v33, 481111932, 129, v31);
f35(10, 481111932, 10, f35);
f35(v50, v33, 481111932, v33);
v50.g;
try {
    let v54;
    try { v54 = v50.isSealed(); } catch (e) {}
    v50 = v54;
    v33 = v54;
} catch(e55) {
    e55[0] = e55;
    try { e55(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
