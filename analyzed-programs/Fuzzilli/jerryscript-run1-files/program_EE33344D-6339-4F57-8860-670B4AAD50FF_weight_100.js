function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 627;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    c = v3;
    d = v3;
    constructor(a8, a9) {
    }
    static get f() {
        return 536870889n;
    }
    [v3];
    1;
}
const v17 = new C6(v3, v4);
const v18 = new C6(v5, v4);
new C6(v18, v5);
[v18,C6,v5];
[[v3,v17,v17],F0];
const v25 = new Uint8ClampedArray(249);
const v28 = new Float64Array(2479);
const v31 = new Float32Array(2561);
const v32 = new C6(v31, v4);
C6[v32] *= 249;
const o33 = {
    "g": v17,
    5: v25,
    "d": Uint8ClampedArray,
    [v5]: Float64Array,
    "b": v28,
};
