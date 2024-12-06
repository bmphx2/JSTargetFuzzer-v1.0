function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2;
    let v3 = 0;
    while (v3 < 7) {
        let v8 = 6.986076006734219e+307;
        F0 ** v8;
        const v10 = v8 | F0;
        -v8;
        v8++;
        Math.fround(v10);
        v8 || v8;
        !v8;
        v3++;
    }
    this.g = -2;
    this.b = -2;
}
const v17 = new F0();
const v18 = new F0();
const v19 = new F0();
function f20(a21, a22) {
    const o33 = {
        n(a24, a25) {
            this.length = 268435456;
            return a25;
        },
        valueOf(a28, a29) {
            let v30;
            try { v30 = a21(a29, a22); } catch (e) {}
            const v31 = v30 % v19;
            try { v19.endsWith(v30, v30, v31, v19, F0); } catch (e) {}
            return F0;
        },
        "c": v19,
        268435439: a22,
    };
    return o33;
}
f20(v17, v18);
f20(v18, v17);
f20(v17, v18);
new Set();
let v42 = -1073741824;
class C43 {
}
let v44 = new C43();
const v46 = new Uint8Array(C43, v42, v42);
[v42,,v44] = v46;
