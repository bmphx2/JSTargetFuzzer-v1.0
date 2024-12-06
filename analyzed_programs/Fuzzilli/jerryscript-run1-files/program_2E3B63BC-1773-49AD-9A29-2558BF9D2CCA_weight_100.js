function f0() {
    const o16 = {
        "f": -2.2250738585072014e-308,
        [-2.2250738585072014e-308]: -1.7976931348623157e+308,
        o(a5) {
            this[16] = -2.2250738585072014e-308;
            function f6() {
                return -10;
            }
            return -10;
        },
        set d(a8) {
            let v7 = this;
            v7 = a8;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a8;
            }
            const v13 = new F9(-2.2250738585072014e-308, a8);
            const v14 = new F9(v7, v13);
            new F9(v14, v14);
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
function f20(a21) {
    const o32 = {
        [v19]: v19,
        get f() {
            a21.valueOf = f0;
            return a21;
        },
        "e": v18,
        "c": v19,
        ...v18,
        o(a24, a25) {
            const v26 = delete a24?.[this];
            delete this[2];
            a21.f >>>= v26;
            return -65536;
        },
    };
    return o32;
}
const v33 = f20(v17);
let v34 = f20(v18);
let v35 = f20(v17);
[Infinity,-2.220446049250313e-16,NaN];
[531861.2975070053,0.09673250049199078];
[-1.5346403966923444e+308,Infinity,2.2250738585072014e-308];
let v40 = Array;
const v42 = new v40(4096);
Object.defineProperty(v42, 5, { configurable: true, get: f0, set: f0 });
({"length":v40,} = v42);
delete v35[8];
v35 ^= v33;
function f45(a46, a47, a48, a49) {
    a47[Symbol.iterator];
    v34 = v33;
    a47[Symbol.replace] = a49;
    return f20;
}
f45(4096, f20, b, v35);
