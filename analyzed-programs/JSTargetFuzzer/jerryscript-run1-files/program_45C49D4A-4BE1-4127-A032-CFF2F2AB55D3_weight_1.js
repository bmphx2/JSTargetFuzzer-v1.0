new Int8Array(2731);
const v5 = new Int32Array(Int8Array);
const v8 = new Int16Array(7);
function f9(a10, a11, a12, a13) {
    const o20 = {
        64: a13,
        "g": v8,
        [v8]: a13,
        get b() {
            a12 = 2731;
            7 ** super.d;
            return this;
        },
        [a10]: a11,
        __proto__: v5,
    };
    return o20;
}
f9(f9, 7, 7, 1328);
f9(2731, 1328, 1328, 7);
f9(7, 7, 7, 7);
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a41;
    this.f = -4294967296;
}
new F36(-4294967296, 5n, -1, "-16");
new F36(-4294967296, -7n, "-16", "global");
const v44 = new F36(-4294967296, 5n, "global", "global");
if ("function" == v44) {
} else {
    function F49(a51, a52, a53) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a53;
    }
    const v54 = new F49(F49, "global", "function");
    const v55 = new F49(v54, "global", "function");
    new F49(v55, "global", "function");
}
