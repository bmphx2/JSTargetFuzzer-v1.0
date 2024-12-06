function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 129;
    this.a = 129;
    this.d = 129;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o15 = {
        "a": v4,
        "g": a7,
        "d": v5,
        "e": F0,
        get f() {
            const v13 = new a8();
            a8 && a7;
            this[9] = v3;
            v13.f = 536870912;
            return v5;
        },
    };
    return o15;
}
const v16 = f6(v5, v3);
f6(v3, v4);
f6(v5, v5);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9007199254740991;
}
const v28 = new F22(v3, 268435440, v3, v5);
v5.c = v5;
v4.c;
const v33 = new F22(v16, -9007199254740991, v28, v3);
new F22(F22, -9007199254740991, v33, v33);
function f35(a36, a37) {
    a36();
    return v16;
}
new Promise(f35);
