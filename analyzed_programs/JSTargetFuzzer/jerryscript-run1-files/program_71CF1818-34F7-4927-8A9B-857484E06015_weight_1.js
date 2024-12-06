function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    class C10 extends (5).constructor {
    }
    for (const v11 in C10) {
    }
    const o17 = {
        set a(a13) {
            this[Symbol.isConcatSpreadable];
        },
        ...v4,
        __proto__: a7,
        "a": v4,
        "b": v4,
        "f": a7,
    };
    return o17;
}
f6(v5);
f6(v4);
f6(v3);
"-16" == 5n;
