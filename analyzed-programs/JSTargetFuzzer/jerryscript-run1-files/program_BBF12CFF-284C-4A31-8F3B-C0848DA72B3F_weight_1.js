function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -128;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o10 = {
        "c": v4,
        1073741825: f6,
        "f": F0,
        get d() {
            const v9 = delete v3[f6];
            this.valueOf = v9;
            return v9;
        },
        __proto__: v5,
        10: a7,
        "e": v3,
    };
    return o10;
}
const v11 = f6(v4);
const v12 = f6(v11);
const v13 = f6(v11);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a16;
}
new F14(v11, v12, v12, v5);
new F14(v12, v11, v13, v4);
new F14(v11, v12, v13, v5);
const v23 = [1000,2];
const v24 = [536870887,512];
v23.copyWithin(-729392091, v24[2], v24[3]);
