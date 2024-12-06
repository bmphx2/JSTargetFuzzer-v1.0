function f3(a4) {
    const o12 = {
        __proto__: a4,
        [1073741825]: a4,
        164: -1164734404,
        ...1073741825,
        [2147483648](a6, a7) {
            a6++;
            return a4;
        },
    };
    return o12;
}
const v13 = f3(2147483648);
const v14 = f3(2147483648);
const v15 = f3(1073741825);
function f16(a17, a18, a19, a20) {
    const o25 = {
        "b": f3,
        [a18]: a19,
        [-1164734404]: v14,
        n(a22, a23, a24) {
            a22.__proto__ = v15;
            return v14;
        },
        __proto__: v15,
        ...a19,
        "f": v13,
        "a": 1073741825,
    };
    return o25;
}
const v27 = f16(v13, v13, v13, f16(v13, v14, v15, v14));
f16(v14, v27, v27, v15);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
}
const v34 = new F30();
const v36 = new Uint32Array();
try { v36.set(v34, -9007199254740991); } catch (e) {}
