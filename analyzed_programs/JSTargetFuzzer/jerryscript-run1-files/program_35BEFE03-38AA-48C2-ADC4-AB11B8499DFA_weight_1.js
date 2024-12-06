function f3(a4, a5) {
    const o11 = {
        "e": -9223372036854775807,
        valueOf(a7) {
            return 9007199254740990;
        },
        9: -35161,
        "c": a5,
        "b": -35161,
        ...268435456,
        "d": a5,
        [a4]: a5,
        [-35161]: -35161,
    };
    return o11;
}
const v12 = f3(268435456, -9223372036854775807);
f3(-9223372036854775807, 268435456);
const v14 = f3(268435456, -35161);
const v15 = [1672601099,10,9007199254740992,1073741825,320795435,11,-1];
const v16 = [-20879,-4294967296];
const v17 = [-9007199254740991,-2,4294967297,536870889];
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a23;
    this.g = -9223372036854775807;
    this.f = v17;
}
const v26 = new F21(v17, v14, v15);
new F21(v16, v17, v15);
const v28 = new F21(v16, f3, v15);
v15["some"](f3, v17);
try {
    const v31 = [v14,v12,F21,-35161,-1063460685];
    [[v31,v31,v26],v28,v28];
} finally {
    v17[-1063460685];
}
Object.defineProperty("some", "h", { configurable: true, enumerable: true, get: f3, set: f3 });
