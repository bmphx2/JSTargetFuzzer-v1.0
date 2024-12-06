function f0() {
    const o22 = {
        set stack(a5) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a10;
                this.e = a11;
            }
            new F8(-2147483648, 2, -2147483648);
            new F8(F8, a5, -2147483648);
            new F8("s", -2147483648, -2147483648);
        },
        "f": "s",
        p(a18) {
            return -165355181;
        },
    };
    return o22;
}
const v23 = f0();
const v24 = f0();
const v25 = f0();
class C26 extends f0 {
    toString(a28) {
        try {
            return this;
        } catch(e29) {
            const o30 = {
                "apply": f0,
                "call": f0,
                "defineProperty": f0,
                "getOwnPropertyDescriptor": f0,
                "getPrototypeOf": f0,
                "has": f0,
                "isExtensible": f0,
                "setPrototypeOf": f0,
            };
            new Proxy(v24, o30);
        } finally {
            v24[f0];
        }
        return this;
    }
}
let v34 = v23[v24];
const v35 = v25[6];
v34 = C26;
v24.h = v35;
f0();
new C26();
new C26();
new C26();
new WeakMap();
const v49 = new Uint32Array();
125563.20783278253 - v49;
