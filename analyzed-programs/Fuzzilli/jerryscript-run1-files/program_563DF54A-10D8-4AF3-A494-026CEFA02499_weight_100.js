function f4(a5, a6) {
    const o7 = {
        "f": -65537,
        "h": a5,
        __proto__: a6,
        "g": -65537,
        "e": a6,
        0: a6,
        "a": a5,
        "c": -1347108624,
        "b": null,
        "d": -1347108624,
        ...-1347108624,
        [null]: -1347108624,
    };
    return o7;
}
const v8 = f4(-2147483649, -2147483649);
const v9 = f4(-2147483649, -65537);
const v10 = f4(-1347108624, -65537);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
    this.f = a20;
}
new F17(v9, v10, -4, v8);
const v24 = new F17(v8, v8, -4294967297, v8);
const v25 = new F17(v8, v10, -1347108624, v9);
new F17(v8, v24, -65537, v10);
try { v25.n(); } catch (e) {}
-5.189175960481678 != f4;
