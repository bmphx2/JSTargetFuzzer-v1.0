function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    F1.e = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function f6(a7, a8) {
    const o9 = {
        "b": F1,
        5851064: a7,
        4075666686: a8,
        "f": f0,
        "h": a8,
        10: f0,
        ...v4,
        "c": a7,
        __proto__: v4,
        "a": v4,
        8: a8,
        ...a7,
        "g": f0,
        "e": F1,
        ...a8,
    };
    return o9;
}
const v11 = f6(f6(v3, f0), v4);
f6(v11, v11);
new Float32Array(1489);
new BigInt64Array(5);
new Int16Array(7);
const v23 = new Float32Array();
v23[v23] = v23;
