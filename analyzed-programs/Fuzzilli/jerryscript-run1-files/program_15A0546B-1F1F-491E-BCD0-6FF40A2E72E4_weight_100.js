function f0() {
    const o8 = {
        p(a5) {
            this ** a5;
            return a5?.[5];
        },
        ...-4294967296,
        "c": -4294967296,
        "g": -4294967296,
        "a": -8.118704725259697e+307,
        "b": -4294967296,
        "f": -1.5386326313566562e+308,
        "e": -1.5386326313566562e+308,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
const v13 = [[v11]];
const v14 = [v11,v9];
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v9;
    this.b = v10;
}
const v21 = new F15(v11, v10, v14, v9);
const v22 = new F15(v11, v10, v13, v21);
new F15(v9, v22, v14, v9);
new Uint32Array(4096);
new Uint8Array(129);
const v32 = new Int16Array(1725);
const t32 = [...v32];
t32[-2] = 4096;
v13[Symbol.isConcatSpreadable] = f0;
v14[v13];
for (let v40 = 0; v40 < 32; v40++) {
    v21["p" + v40] = v40;
}
