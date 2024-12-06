const v0 = [6937,127,103593367,-44426176,2040165915,-2147483648,9007199254740991,-4294967295,4294967295];
const v1 = [-9007199254740991,268435456,26636,10000,-841951130,2147483649,-44808];
const v2 = [-30947,1594609998,4294967296,-91197850,10,14532,128,44737,-3,8];
const v3 = [v0];
const v4 = [v3,v0];
const v5 = [v4];
delete v5[257];
var d = v1;
const v8 = [];
const v10 = Reflect.apply(v5.shift, v5, v8);
let v13 = 65537;
function f14(a15, a16, a17, a18) {
    const o38 = {
        "a": v1,
        "g": v13,
        "b": a16,
        "c": v4,
        "e": a16,
        "f": a15,
        "h": a18,
        "d": v5,
        o(a20, a21, a22) {
            super.b;
            let v25 = (a16 ** a16) ** v0;
            a15[10];
            const v31 = -a16;
            v25--;
            const v33 = !v25;
            let v34 = v31 << v25;
            v33 - -9223372036854775807;
            v31 || v33;
            ++v34;
            return a18;
        },
    };
    const o39 = {
    };
    new Proxy(f14, o39);
    return a18 = v10;
}
const v42 = f14(-1, 1723158178, 1723158178, v0);
f14(-1, v13, v1, v4);
f14(f14, v13, -1, v2);
const o46 = {
    get g() {
        return this;
    },
};
let v47 = [o46,o46,o46,o46];
--v47;
let v49 = ++v13;
Object.defineProperty(o46, "g", { value: --v49 });
function F51(a53, a54, a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a55;
}
new F51(v3, v10, v3, v8);
new F51(v8, v13, v42, v8);
new F51(v8, v49, v8, v5);
