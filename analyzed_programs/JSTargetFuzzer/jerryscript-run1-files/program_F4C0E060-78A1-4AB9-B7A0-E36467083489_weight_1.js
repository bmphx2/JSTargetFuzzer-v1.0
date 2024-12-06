function f0() {
}
function f1() {
    const o2 = {
        "h": f0,
        "g": f0,
        "e": f0,
        [f0]: f0,
        "g": f0,
        "b": f0,
        __proto__: f0,
        "f": f0,
        ...f0,
        ...f0,
        "a": f0,
        0: f0,
        "d": f0,
    };
    return o2;
}
const v3 = f1();
f1();
const v5 = f1(f1, v3, f0);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.POSITIVE_INFINITY = f1;
}
new F9(v5, 542975893, f0);
const v15 = new F9(v5, 542975893, f1);
new F9(v3, 1024, v15);
let v21 = 9223372036854775807n;
v21 &= -1201172143n;
