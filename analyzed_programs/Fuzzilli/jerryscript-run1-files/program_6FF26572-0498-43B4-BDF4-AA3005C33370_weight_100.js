function f0() {
    const o7 = {
        ..."6",
        "f": "Oh",
        "h": "6",
        ["6"](a5) {
            try { this.n(10000, this, "Oh"); } catch (e) {}
            return 10000;
        },
        ["Oh"]: 10000,
        "c": "Oh",
        0: 10000,
        [-2]: "Oh",
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
const v10 = f0();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.a = v8;
    this.c = v8;
}
new F11(v8, v8);
new F11(v8, v10);
new F11(v9, v8);
const v21 = [182.6554548534018,1e-15,0.45524480994671856];
const v23 = new WeakMap();
v23["set"](v21);
