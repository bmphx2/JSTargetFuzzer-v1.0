function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 536870912;
    this.g = 536870912;
}
const v3 = new F0();
const v4 = new F0(v3);
const v5 = new F0();
function f6() {
    return v5;
}
function f7(a8, a9) {
    const o15 = {
        o(a11, a12) {
            a11[10] = this;
            super.b = a12;
            const v13 = a9.dotAll;
            try { v4.m(v13); } catch (e) {}
            return a9;
        },
        "e": v4,
        "b": a8,
        "c": v3,
        13: f6,
        [v3]: a8,
        14: a9,
        "g": f7,
        ...v3,
        ...v5,
        [a9]: a9,
        "e": f6,
        "e": v5,
        [F0]: a9,
        "f": a9,
    };
    return o15;
}
f7(v4, v5);
f7(v5, v4);
f7(v3, v4);
try { Uint8Array(); } catch (e) {}
