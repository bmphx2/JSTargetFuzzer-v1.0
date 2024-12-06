const v0 = [-1,9];
const v1 = [5,536870889,-65535,2055595492,11];
const v2 = [268435456,4096,-65537,5,1073741824,1000];
const v8 = -Infinity;
function f9() {
    return v8;
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a13;
    this.d = a13;
    this.h = a12;
    const o15 = {
        get g() {
            return this;
        },
    };
    let v16 = [o15,o15,o15,o15];
    let v17 = --v16;
    let v18 = ++v17;
    Object.defineProperty(o15, "g", { value: --v18 });
}
const v20 = new F10(-1000000.0, v1);
const v21 = new F10(3.747575286298016, v1);
const v22 = new f9(3.747575286298016, v0);
function f23(a24, a25, a26) {
    const o27 = {
        1644: v21,
        "c": v2,
        2635266835: v1,
        "e": a24,
        "d": f9,
        "g": v8,
        [a26]: -1000000.0,
        "a": a26,
        "h": v21,
        ...v22,
        ...v20,
        202411798: v8,
        "f": a24,
        1426: 3.747575286298016,
        ["message"]: v1,
        "b": -1000000.0,
        "f": a26,
        __proto__: v2,
        84: v1,
        212: -1000000.0,
    };
    return o27;
}
f23("number", "flat", v0);
f23("number", "flat", v0);
f23("number", -1000000.0, v1);
function f31() {
    const o33 = {
        [f31]() {
        },
    };
    return o33;
}
for (const v35 in f31()) {
    v35.search(v35);
}
const o38 = {
    ...this,
};
