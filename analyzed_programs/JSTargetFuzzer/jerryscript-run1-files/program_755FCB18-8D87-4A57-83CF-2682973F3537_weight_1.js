function f0() {
    const o4 = {
        "f": "symbol",
        "c": "9223372036854775807",
        "b": "symbol",
        "g": "9223372036854775807",
        "d": 2.342570995514676e+307,
        ["9223372036854775807"]: "9223372036854775807",
        "e": "symbol",
        "h": "symbol",
        "a": "symbol",
        1: "9223372036854775807",
        __proto__: "9223372036854775807",
        [2.342570995514676e+307]: "9223372036854775807",
    };
    return o4;
}
f0();
f0();
const v7 = f0();
const v8 = [-2147483648,7,-536870912];
const v9 = [10,62436,-1073741824];
const v10 = [-65536,3];
class C15 extends f0 {
    toString(a17, a18) {
        a17 >> v10;
        for (let v20 of a18) {
            v20 &&= v20;
            super.g = true;
        }
        v10 - -61702;
        return v10;
    }
    h = 1024;
    [v7];
    static g = -61702;
}
const v22 = new C15();
new C15();
new C15();
const o26 = {
    __proto__: v8,
    "h": v22,
    10: v22,
    ...v9,
};
C15.g;
try { o26.entries(); } catch (e) {}
