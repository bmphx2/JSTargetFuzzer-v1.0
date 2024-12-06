function f6() {
    return -4096;
}
function f7(a8, a9) {
    const o21 = {
        [16]: -2,
        "a": -2,
        "e": -4096,
        ...f6,
        __proto__: -2,
        set c(a11) {
            let v14 = 1062091626;
            ~-534180484;
            (-2.2250738585072014e-308) ** 0;
            a9 * v14;
            v14--;
            -2.2250738585072014e-308 | -534180484;
        },
    };
    return o21;
}
f7(-534180484, 16);
const v23 = f7(-659720044, -2);
const v24 = f7(2671, -659720044);
v23.e = v24;
v23[0];
const o32 = {
    "apply": f6,
    "call": f7,
    "defineProperty": f6,
    "getOwnPropertyDescriptor": f6,
    "ownKeys": f6,
};
new Proxy(v24, o32);
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a38;
}
new F35(257n, 1073741825n);
const v40 = new F35(1073741825n, 257n);
let v41 = new F35(1073741825n, 255n);
const v46 = "length" | v40;
const o50 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t45 = "fAll7";
        t45.__proto__ = "length";
        return v46;
    },
};
let v52 = 2;
Math.trunc(v41);
v41--;
v52--;
v52 << v41;
Math.floor(v41);
