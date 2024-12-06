function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 35487;
    this.c = 35487;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Date();
function f9(a10, a11) {
    const o17 = {
        [a10]: v3,
        43601187: a11,
        set f(a13) {
            var g = a10;
            this[0] = a10;
            false < null ? false : null;
        },
        "e": v4,
    };
    new BigUint64Array(255);
    new Float32Array(17);
    new Float64Array(0);
    return o17;
}
const v27 = f9(v5, v3);
const o28 = {
    __proto__: v27,
    ...v27,
    "e": v27,
    ...Date,
};
const v30 = new Map();
for (let v31 = 0; v31 < 5; v31++) {
    v30["set"](v31);
}
v30.get(Map);
f9(v3, v3);
f9(v4, v4);
function f37(a38, a39) {
    a39();
    return f37;
}
new Promise(f37);
