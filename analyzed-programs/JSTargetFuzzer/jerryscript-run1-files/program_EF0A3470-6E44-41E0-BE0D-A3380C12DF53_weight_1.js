[];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -10760.117000259575;
    this.d = 2.0;
    this.b = -10760.117000259575;
}
const v8 = new F4(-10760.117000259575, -1000000000000.0);
const v9 = new F4(-10760.117000259575, 2.0);
const v10 = new F4(2.0, 2.0);
function f11(a12, a13, a14) {
    const o24 = {
        5: a12,
        [-1000000000000.0]: -10760.117000259575,
        "h": a12,
        "f": F4,
        "g": a14,
        "a": a14,
        __proto__: v8,
        /*
        __proto__: v10,
        */
        valueOf(a16, a17, a18, a19) {
            a16.d = a16;
            try { a12.valueOf(2.0, F4); } catch (e) {}
            return a17;
        },
        [v8]: a12,
    };
    return o24;
}
f11(v10, v9, 2.0);
f11(f11(v8, v9, -1000000000000.0), v8, -1000000000000.0);
const v28 = [-Infinity];
function f31(a32, a33, a34, a35) {
    'use strict';
    delete a34[96111267];
    return a34;
}
f31(257, 7, v28);
