function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9223372036854775808;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8, a9) {
        super();
        v5.valueOf = a9;
    }
    static 3;
    static n(a11, a12) {
        v5.toString = a11;
        delete a12[this];
        return v5;
    }
}
const v17 = new C6(v3, v5);
const v18 = new C6(v4, v17);
const v19 = new C6(v5, v17);
function f23(a24, a25) {
    const o33 = {
        0: v18,
        "g": C6,
        o(a27, a28) {
            class C29 {
                [C29];
            }
            const v30 = new a24();
            new v30();
            const v32 = new v18();
            return v32;
        },
        "h": -7.486536104360592e+307,
        "d": 0.4270162192600899,
    };
    return v4;
}
f23(0.7307375366629039, F0);
f23(-7.486536104360592e+307, v19);
f23(0.4270162192600899, v17);
const v39 = new Uint32Array(181);
let v41 = BigUint64Array;
let v42 = new v41(1);
let v43 = 253;
[v43,,v41,v42] = v39;
try { v41["abs"](181, v43, v41); } catch (e) {}
new Uint16Array(v43);
for (let i56 = 0; i56 < 2; i56++) {
    const v62 = new Function("x");
    v62.name;
}
Function();
