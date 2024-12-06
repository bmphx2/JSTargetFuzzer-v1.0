function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -16;
    this.f = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v10 = -14;
function f12(a13, a14, a15) {
    const o19 = {
        [a14]: a13,
        valueOf(a17, a18) {
            super.b = a18;
            return 4728n;
        },
        "a": a15,
        "h": -65536n,
        "g": v10,
        ...a13,
        "b": F0,
        "c": F0,
        [-65536n]: 620,
        "e": v10,
        ...a13,
        ...v5,
    };
    return o19;
}
f12(v3, v10, v10);
f12(v3, v10, 26000);
f12(v5, 620, v10);
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 620;
    this.b = a29;
    this.h = 7n;
}
new F26(v4, 7n);
new F26(v5, -46293n);
new F26(v5, 2147483649n);
v10 >>>= 26000;
let {"f":v33,"h":v34,...v35} = v3;
