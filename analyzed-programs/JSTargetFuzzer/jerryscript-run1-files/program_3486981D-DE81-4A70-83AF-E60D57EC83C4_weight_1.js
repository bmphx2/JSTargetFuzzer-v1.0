function f0() {
}
const v9 = new Uint32Array(858);
const v11 = new Uint16Array(v9, 858, 858);
const o16 = {
    m(a13, a14, a15) {
        return a13;
    },
};
for (const v17 in v9) {
    const v19 = [858];
    Reflect.defineProperty(o16.m, v11, v19);
}
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 4.0;
    this.a = f0;
}
new F22(NaN, 4.0, -65535n, -2147483647n);
const v29 = new F22(600176.9580853817, NaN, -2147483647n, -6n);
new F22(NaN, NaN, -2147483647n, v29);
class C34 {
    constructor(a36) {
        for (let [i41, i42] = (() => {
                new Uint8Array(this, a36, a36);
                return [0, 10];
            })();
            i41 < i42;
            i41++) {
        }
        try { new C34(); } catch (e) {}
    }
}
new C34();
