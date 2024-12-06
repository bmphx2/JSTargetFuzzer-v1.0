const v4 = new Set();
function f8(a9, a10, a11) {
    const o17 = {
        "g": a10,
        "b": 536870889,
        __proto__: v4,
        "f": 3,
        set h(a13) {
            for (let v14 = 0; v14 < 32; v14++) {
                v4["p" + v14] = v14;
            }
        },
        "e": a9,
    };
    return o17;
}
f8(524192484, -12, -641669556);
const v19 = f8(f8, 3, 3);
f8(v19, 839842683, v19);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
}
const v23 = new F21();
with (v23) {
    const o26 = {
        valueOf() {
            this();
            return 839842683;
        },
    };
}
