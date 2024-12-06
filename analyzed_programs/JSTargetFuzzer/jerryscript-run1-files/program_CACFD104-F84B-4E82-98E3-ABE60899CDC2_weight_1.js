function f0() {
    const o8 = {
        p(a5, a6) {
            this.e /= a5;
            try { new a6(a5, this, this); } catch (e) {}
            return 3;
        },
        "g": -3.0,
        "h": -795.3773326954716,
        10: -795.3773326954716,
        76: -795.3773326954716,
        "a": -795.3773326954716,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a15;
    this.a = a14;
    try { Float64Array(); } catch (e) {}
    a15 < 2;
    this.e = v9;
}
new F12(v11, v9);
new F12(v10, v9);
new F12(v9, v10);
Array()["fill"]();
