function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o26 = {
        "b": v3,
        1073741824: a12,
        p(a14, a15, a16, a17) {
            let v19 = -2147483649;
            v19 >> v3;
            127 % v5;
            1000.0 ^ 127;
            v19--;
            Math.asin(a11);
            return v3;
        },
        "f": a11,
        "c": -7,
    };
    return o26;
}
f9(v4, -7, v4);
f9(v4, 65537, f9(v4, 65537, v5));
const v35 = new Date();
v35.setSeconds();
