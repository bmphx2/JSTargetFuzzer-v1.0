function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
    this.f = 16;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o16 = {
        ...a7,
        "a": v3,
        268435439: v3,
        1774: a8,
        "f": a8,
        "e": a8,
        valueOf(a10, a11, a12) {
            for (let v13 = 0; v13 < 32; v13++) {
                v3["p" + v13] = v13;
            }
            return a11;
        },
    };
    return o16;
}
f6(v5, f6);
f6(f6(v5, F0), v3);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    const t29 = 1459462216;
    t29.e = -4096;
    this.d = -4096;
}
const v29 = new F26();
const v30 = new F26();
const v31 = new F26();
const o32 = {
    ...v30,
    __proto__: v29,
    [v29]: v29,
    [-1]: v31,
    [v29]: v30,
    [v30]: v29,
};
let v34 = 255;
const v35 = ++v34;
const v36 = ~v35;
Math.clz32();
v35 - v36;
