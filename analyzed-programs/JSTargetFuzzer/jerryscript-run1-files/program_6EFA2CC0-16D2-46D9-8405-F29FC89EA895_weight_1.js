function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o21 = {
        [a7]: a7,
        "d": v3,
        39: v5,
        [v4](a10, a11, a12) {
            this.d <<= 59849;
            a7 = delete v5[2];
            ++a8;
            this[f6];
            a7[4];
            try { v5.toString(v3, a8); } catch (e) {}
            return 268435456;
        },
    };
    return o21;
}
f6(v4, v3);
f6(v4, v5);
f6(v5, v5);
new Uint16Array(3828);
new Uint16Array(3612);
new Uint32Array(255);
const v34 = [];
Object.defineProperty(v34, "length", { writable: true, value: v34 });
