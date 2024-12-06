function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 50019;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F0;
}
const v9 = new F6(v4);
const v10 = new F6(v4);
let v11 = new F6(v4);
function f12(a13, a14) {
    const o21 = {
        __proto__: v3,
        "h": v5,
        p(a16, a17, a18, a19) {
            new F0(v4, v3, v3, v10);
            return F6;
        },
        [v9]: v10,
        [v4]: v11,
        "b": F6,
        "g": a13,
        "a": v5,
    };
    return o21;
}
f12(v9, v11);
f12(v9, v10);
v11 = f12(v9, v10);
const o27 = {
    "maxByteLength": 11,
};
const v29 = new ArrayBuffer(11, o27);
new Float64Array(v29);
