function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -1874058493;
    this.b = -1874058493;
    this.d = -1874058493;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
function f6(a7) {
    const o12 = {
        "c": a7,
        "b": v5,
        __proto__: v3,
        4: v4,
        n(a9) {
            ({"b":a7,"h":v5,} = a9);
            const v10 = a9 % a9;
            v4.toString = v5;
            let v11;
            try { v11 = new v5(v5, a7, v4, this, v10); } catch (e) {}
            return v11;
        },
    };
    return o12;
}
const v13 = f6(v4);
f6(v4);
f6(v4);
new Uint16Array(1820);
new Int8Array(4096);
new Int32Array(64);
const o25 = {
    ...v5,
    ...v13,
};
[f6];
function f27(a28, a29, a30) {
    v13.length = 2147483648;
    return v3;
}
f27(64, 64, 4096);
