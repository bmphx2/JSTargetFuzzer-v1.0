try {
} finally {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
new Uint8ClampedArray(128);
new BigInt64Array(1784);
new BigInt64Array(255);
const v23 = new Array(10);
let v25 = 4096;
function f27(a28, a29, a30, a31) {
    const o41 = {
        "g": v25,
        ...a31,
        "e": a29,
        set b(a33) {
            function F34(a36, a37) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a36;
            }
            new F34(a31, 129);
            new F34(a30, a30);
            new F34(F34, 481111932);
        },
    };
    return o41;
}
let v42 = f27(v25, 481111932, 129, v23);
f27(10, 481111932, 10, f27);
f27(v42, v25, 481111932, v25);
v42.g;
try {
    let v46;
    try { v46 = v42.isSealed(); } catch (e) {}
    v42 = v46;
    v25 = v46;
} catch(e47) {
    e47[0] = e47;
    try { e47(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
