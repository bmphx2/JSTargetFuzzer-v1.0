function f0() {
}
function f4(a5) {
    const v6 = a5 < "valueOf";
    const v8 = new Set();
    const t5 = "valueOf";
    t5.__proto__ = "o";
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v8;
    }
    const v15 = new F9("o", "object", v8, f4);
    const v16 = new F9("o", F9, "o", F9);
    new F9(v8, v8, v16, f0);
    const o21 = {
        ["valueOf"]: a5,
        "e": "object",
        ["valueOf"]: "o",
        "g": a5,
        [v15]: a5,
        "a": f0,
        7: v6,
        [v8]: F9,
        127: a5,
        [f0](a19) {
            a5[this] = a19;
            this.e >>>= this;
            Object.defineProperty(a19, "h", { enumerable: true, value: "o" });
            return "valueOf" % a19;
        },
    };
    return o21;
}
f4("o");
f4("o");
let {"b":v29,"e":v30,"g":v31,} = f4("o");
try { v29.m(f4, -8, -45983n, -8, f4); } catch (e) {}
const v35 = [-1];
const o36 = {
    __proto__: v35,
};
new Date(0, o36);
