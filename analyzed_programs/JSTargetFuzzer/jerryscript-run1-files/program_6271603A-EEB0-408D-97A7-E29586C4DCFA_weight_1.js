function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 64345;
    this.f = 64345;
    F0.d = 64345;
}
const v3 = new F0();
const v4 = new F0(F0, F0);
const v5 = new F0();
const v6 = -Infinity;
function f9(a10, a11, a12, a13) {
    const o20 = {
        ...a12,
        get c() {
            try { a10(a12, v3, v6, v6, this); } catch (e) {}
            v5.d;
            return 9007199254740991;
        },
        "c": 1.0,
        ...v4,
    };
    return o20;
}
f9(F0, v4, f9, v5);
f9(1.0, v5, 1.0, v4);
f9(-2.220446049250313e-16, v5, v4, v3);
let v24 = -12n;
v24 >>= v24;
