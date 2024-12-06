function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.h = -47379;
}
const v7 = new F3(-4, -47379);
const v8 = new F3(-4, -4);
const v9 = new F3(536870912, -4);
function f16(a17, a18, a19, a20) {
    const o21 = {
        "f": -1073741824,
        "a": v8,
    };
    return o21;
}
f16(v8, -4, -2147483648, v7);
f16(v8, -12862, f16(v7, 536870912, 268435440, v8), v9);
