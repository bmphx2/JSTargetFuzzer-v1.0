function f6(a7, a8, a9) {
    const o10 = {
        "g": 257n,
        "h": a8,
        769: -9223372036854775808n,
        __proto__: "number",
        "c": a9,
        "f": a8,
        ...a9,
        "e": -9223372036854775808n,
        "a": a8,
        ["f"]: a8,
        "d": -4096n,
    };
    return o10;
}
const v11 = f6(-9223372036854775808n, "number", "undefined");
f6(257n, "number", f6);
const v13 = f6(-4096n, "undefined", v11);
const v15 = new WeakMap();
let v16 = this;
let v17 = 0;
do {
    v13.__proto__ = v11;
    v16 += v15;
    function F18(a20, a21, a22, a23) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = a20;
    }
    new F18(-9223372036854775808n, "f", "undefined", "f");
    new F18(257n, "f", "f", "undefined");
    new F18(257n, "number", "number", v16);
    v17++;
} while (v17 < 1)
