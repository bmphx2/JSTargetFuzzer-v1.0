function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 32660;
    this.e = 32660;
    this.c = 32660;
}
new F0();
new F0();
new F0();
new Float32Array(1024);
new BigInt64Array(8);
new Uint32Array(64);
const v17 = new Array(10);
let v19 = 4096;
function f21(a22, a23, a24, a25) {
    const o35 = {
        "g": v19,
        ...a25,
        "e": a23,
        set b(a27) {
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a30;
            }
            new a24(a25, 129);
            new F28(a24, a24);
            new F28(F28, 481111932);
        },
    };
    return o35;
}
let v36 = f21(v19, 481111932, 129, v17);
f21(10, 481111932, 10, f21);
f21(v36, v19, 481111932, v19);
v36.g;
try {
    let v40;
    try { v40 = v36.isSealed(); } catch (e) {}
    v36 = v40;
    v19 = v40;
} catch(e41) {
    e41[0] = e41;
    try { e41(e41); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
