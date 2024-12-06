function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Math.sign();
    this.a = 10000;
}
const v5 = new F0();
const v6 = new F0();
const v7 = new F0();
function f8(a9, a10) {
    const o23 = {
        [a9]: a9,
        "d": v5,
        39: v7,
        [v6](a12, a13, a14) {
            this.d <<= 59849;
            a9 = delete v7[2];
            ++a10;
            this[f8];
            a9[4];
            try { v7.toString(v5, a10); } catch (e) {}
            return 268435456;
        },
    };
    return o23;
}
f8(v6, v5);
f8(v6, v7);
f8(v7, v7);
new Uint16Array(3828);
new Uint16Array(3612);
new Uint32Array(255);
const v36 = [];
Object.defineProperty(v36, "length", { writable: true, value: v36 });
