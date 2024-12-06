function f3(a4) {
    const o9 = {
        __proto__: a4,
        "f": 1.798937160180433,
        m(a6) {
            this.f = a6;
            try {
                super.o(this, -2.220446049250313e-16, a6);
            } catch(e8) {
            }
            return 1.798937160180433;
        },
    };
    return o9;
}
const v10 = f3(442580.00398417027);
const v11 = f3(v10);
const v12 = f3(1.798937160180433);
function f19(a20, a21, a22, a23) {
    const o24 = {
        "h": a22,
        "a": v11,
        "g": a23,
        __proto__: v11,
    };
    return o24;
}
f19(1073741824n, 536870887n, v10, v12);
f19(5n, 1073741824n, v10, v10);
f19(536870887n, 5n, v12, v12);
