function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -128;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    Number(5n);
    const o13 = {
        "c": v4,
        1073741825: f6,
        "f": F0,
        get d() {
            const v12 = delete v3[f6];
            this.valueOf = v12;
            return v12;
        },
        __proto__: v5,
        10: a7,
        "e": v3,
    };
    return o13;
}
const v14 = f6(v4);
const v15 = f6(v14);
const v16 = f6(v14);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a19;
}
new F17(v14, v15, v15, v5);
new F17(v15, v14, v16, v4);
new F17(v14, v15, v16, v5);
const v26 = [1000,2];
const v27 = [536870887,512];
v26.copyWithin(-729392091, v27[2], v27[3]);
