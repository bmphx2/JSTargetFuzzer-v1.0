function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o13 = {
        set a(a9) {
            this[Symbol.isConcatSpreadable];
        },
        ...v4,
        __proto__: a7,
        "a": v4,
        "b": v4,
        "f": a7,
    };
    return o13;
}
f6(v5);
f6(v4);
f6(v3);
"-16" == 5n;
