new Uint32Array(3163);
new Int8Array(472);
const v8 = new Int8Array(10);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v8;
}
new F9(3163, 472);
new F9(10, 10);
new F9(472, 3163);
const v18 = new Array(268435439);
let v20 = 4096;
function f22(a23, a24, a25, a26) {
    const o39 = {
        "g": v20,
        ...a26,
        "e": a24,
        set b(a28) {
            function F29(a31, a32) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a31;
            }
            const v33 = new F29(a26, 129);
            for (let v34 = 0; v34 < 32; v34++) {
                v33["p" + v34] = v34;
            }
            new F29(a25, a25);
            new F29(F29, 481111932);
        },
    };
    return o39;
}
let v40 = f22(v20, 481111932, 129, v18);
f22(268435439, 481111932, 268435439, f22);
f22(v40, v20, 481111932, v20);
v40.g;
try {
    let v44;
    try { v44 = v40.isSealed(); } catch (e) {}
    v40 = v44;
    v20 = v44;
} catch(e45) {
    e45[257] = e45;
    try { e45(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
