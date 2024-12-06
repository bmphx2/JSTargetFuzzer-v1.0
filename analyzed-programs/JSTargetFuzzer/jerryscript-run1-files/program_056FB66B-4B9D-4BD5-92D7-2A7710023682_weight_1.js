function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "Im9m";
    this.g = "Im9m";
}
const v7 = new F3("Im9m", "Im9m");
const v8 = new F3("Im9m", "slice");
const v9 = new F3("bigint", "Im9m");
function f10(a11, a12, a13) {
    const o22 = {
        ["slice"]: "bigint",
        "g": v7,
        536870887: a12,
        set e(a15) {
            a12.h;
        },
        "a": "slice",
        536870912: "bigint",
        ...a13,
        "c": "slice",
        p() {
            this[a11] = this;
            return a11;
        },
        m(a19, a20, a21) {
            return a13;
        },
        "f": a13,
    };
    return o22;
}
f10("slice", v9, v9);
f10("Im9m", v8, v8);
f10("slice", v7, v9);
const v27 = [268435441n,268435441n,268435441n];
try { v27.copyWithin(21610, -549482487, 268435441n); } catch (e) {}
