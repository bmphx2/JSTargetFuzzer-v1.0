function f0() {
}
function f1() {
    const o11 = {
        7: f0,
        [f0]: f0,
        n() {
            this[956] *= this;
            return "-2";
        },
        "f": f0,
        set g(a7) {
            a7 = this;
            f0[8] = this;
            for (let v8 = 0; v8 < 32; v8++) {
                a7["p" + v8] = v8;
            }
        },
    };
    return o11;
}
const v12 = f1();
const v13 = f1();
const v14 = f1();
class C21 extends f1 {
    static {
        v12[7] = v12;
        10 || this;
    }
    constructor(a25, a26, a27, a28) {
        super();
        const o29 = {
            "call": f1,
            "getOwnPropertyDescriptor": f0,
            "has": f0,
            "isExtensible": f1,
            "ownKeys": f1,
            "preventExtensions": f0,
            "setPrototypeOf": f1,
        };
        new Proxy(v13, o29);
    }
}
const v32 = new C21(v14, v12, v12, -256);
const v33 = new C21(v32, C21, v32, 10);
new C21(v32, v33, v14, 2);
C21 = v33;
class C35 extends f1 {
    static set c(a37) {
        C21["n"](v14, 820483779, "n");
    }
    static #g;
}
new C35();
new C35();
new C35();
