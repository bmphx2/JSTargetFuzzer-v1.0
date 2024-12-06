const v4 = [11,-4096,-128,-4294967296,-8089,7,-128];
const v5 = [65537];
const v6 = [4294967297,-536870912,128,1073741825,536870888,4294967297,9007199254740991,256,-669192691];
const v7 = [v5,11,11];
const v8 = [268435441,,v6,v6,268435441];
[65536,v7,v7,v8];
function f10(a11, a12) {
    const o17 = {
        get h() {
            function f14() {
                return this;
            }
            let {"d":v15,"g":v16,} = this;
            Object.defineProperty(v8, 3, { writable: true, configurable: true, get: f14 });
            return 268435441;
        },
        "b": v5,
        "h": a11,
        ...v5,
        [11]: v6,
    };
    return o17;
}
const v18 = f10(268435441, 11);
f10(268435441, v8);
const v20 = f10(11, v18);
const v22 = [f10,v20];
const v23 = v4.flatMap;
Reflect.apply(v23, v8, v22);
let v25 = 10;
for (; v25--;) {
    v20.__proto__ = v7;
    const v28 = [];
    Reflect.apply(v22.values, v23, v28);
}
