function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1073741824;
    this.e = 1073741824;
    this.a = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f9(a10, a11, a12) {
    const o22 = {
        ["257"]: "isFinite",
        __proto__: a11,
        ["257"](a14, a15) {
            for (let v19 = 0; v19 < 32; v19++) {
                a10["p" + v19] = v19;
            }
            return "valueOf";
        },
        "g": "b",
    };
    return o22;
}
const v23 = f9("isFinite", v3, "b");
const v24 = f9(v23, v3, "isFinite");
const v25 = f9("isFinite", v3, "isFinite");
v24.g = v24;
v4.b = f9;
if ("b") {
    "substring" & v23;
} else {
    ("257").__proto__;
}
try { v24.m("b", v25, "substring", "bigint", v25); } catch (e) {}
const t34 = "BLiAx";
t34.__proto__ = "b";
