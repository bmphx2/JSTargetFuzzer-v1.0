function f0() {
    const o17 = {
        "h": "ja",
        "e": "e",
        ["e"]: "e",
        "c": 2147483647,
        "d": "e",
        "g": 2147483647,
        o(a5) {
            function F9(a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = 5.0364589672558004;
                this.b = Infinity;
            }
            const v14 = new F9(F9, Infinity, 1.5258998850200234e+308);
            new F9(v14, Infinity, Infinity);
            const v16 = new F9("ja", 5.0364589672558004, Infinity);
            return v16;
        },
    };
    return o17;
}
const v18 = f0();
const v19 = f0();
let v20 = f0();
class C21 {
    static m(a23) {
        const v24 = new f0();
        try {
            super.o(v19, v24);
        } catch(e26) {
        }
        v20 &&= a23;
        return a23;
    }
    [v19] = v20;
    f = f0;
}
const v27 = new C21();
const v28 = new C21();
const v29 = new C21();
[-725518690,4,1523,-128];
const v31 = [4294967297,8,6,268435440,44300,536870887];
[-913117505,11,-4,-5549,4294967297,-9007199254740990];
function* f33(a34, a35) {
    a34[5];
    v28 % v27;
    yield* v31;
    return a35;
}
f33(v18, v29);
