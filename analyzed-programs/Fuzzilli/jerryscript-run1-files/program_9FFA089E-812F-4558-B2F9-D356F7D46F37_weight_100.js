function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9007199254740992;
    this.g = 9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14, a15, a16) {
    const o24 = {
        "f": "Q6fn",
        "h": a15,
        "b": 536870912n,
        [a15](a18, a19, a20, a21) {
            this in a21;
            536870912n in a15;
            return "-16099";
        },
        [536870912n]: "-16099",
        "g": "Q6fn",
        __proto__: v4,
        "e": 536870912n,
        "d": "Q6fn",
    };
    return o24;
}
const v25 = f12(536870912n, 536870912n, v4, "v");
f12(536870912n, 65537n, v5, F0);
f12(65537n, 536870912n, v25, v3);
typeof f12 === "object";
new Float32Array(2129);
new Float32Array(256);
new BigUint64Array(16);
