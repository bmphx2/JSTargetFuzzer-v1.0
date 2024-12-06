function f3(a4) {
    const o13 = {
        __proto__: a4,
        "f": 318625187,
        set b(a6) {
            -Infinity;
        },
        7: 318625187,
    };
    return o13;
}
f3(-2);
const v15 = f3(f3, -2, 318625187);
const v16 = f3(-2);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v15;
    this.h = 318625187;
    this.c = -2;
}
new F17(F17, 63990);
const v22 = new F17(v15, -2, 63990);
new F17(v16, -2, v22, v22);
Promise.all();
