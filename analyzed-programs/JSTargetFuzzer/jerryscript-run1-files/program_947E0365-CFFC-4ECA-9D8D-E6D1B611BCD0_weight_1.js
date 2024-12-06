function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65535;
    this.d = 14423;
    this.f = a6;
}
const v7 = new F3(14423, -65535);
const v8 = new F3(-65535, v7);
const v9 = new F3(-546665426, v7);
function f10(a11, a12, a13, a14) {
    const o34 = {
        "e": a14,
        [v8](a16, a17, a18, a19) {
            try {
                super.fround();
            } catch(e21) {
            }
            return 14423;
        },
        [v9](a23, a24, a25) {
            let v27 = 0;
            while (v27 < 8) {
                let v31;
                try { v31 = this["m"](a13); } catch (e) {}
                this[v31];
                v27++;
            }
            return arguments;
        },
    };
    return o34;
}
const v35 = f10(v9, v7, 14423, -546665426);
const v36 = f10(v9, v9, -546665426, 14423);
f10(v9, v36, -546665426, 14423);
new Int8Array(10);
new Float64Array(128);
v35[2449] = -65535;
function F48(a50, a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a51;
    this.c = 128;
    this.a = a51;
}
const v54 = new F48(Int8Array, v36, 14423, 128);
const v55 = new F48(v54, v35, 128, -546665426);
new F48(v55, v35, 2449, 10);
new Uint8ClampedArray(2449);
-Infinity < -65537n;
