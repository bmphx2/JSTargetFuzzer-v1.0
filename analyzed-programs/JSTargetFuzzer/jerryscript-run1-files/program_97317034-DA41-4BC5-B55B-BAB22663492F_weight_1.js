function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a7;
    this.e = 6;
    this.c = f0;
}
new F4(9, 6);
new F4(9, 6);
new F4(24221, 6);
function f11(a12, a13) {
    const o21 = {
        4: f0,
        "c": a13,
        set a(a15) {
            const v17 = Symbol.search;
            a15[v17] = v17;
        },
    };
    return o21;
}
f11(24221, 9);
f11(6, 6);
f11(6, 6);
const o26 = {
    ...undefined,
};
[,];
