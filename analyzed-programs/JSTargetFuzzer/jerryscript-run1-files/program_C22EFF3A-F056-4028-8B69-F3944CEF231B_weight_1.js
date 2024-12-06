function f0() {
    const o9 = {
        1151: 128,
        ["POSITIVE_INFINITY"]: -2.0,
        "c": "POSITIVE_INFINITY",
        m(a5) {
            this.d = a5;
            ("POSITIVE_INFINITY")[Symbol.isConcatSpreadable];
            return "POSITIVE_INFINITY";
        },
        "g": 128,
        "h": 128,
        "b": "POSITIVE_INFINITY",
        "a": 128,
        "f": 128,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
class C16 {
    static {
        class C19 extends this.constructor {
            static d;
        }
        new C19();
    }
    [v11] = v12;
    constructor(a22, a23) {
        v10[a23] = f0;
        v12.b &= a23;
        super.d;
        delete v10[536870889];
    }
    static #g = -226.21551762665933;
}
const v26 = new C16(v11, -173.8268057006136);
new C16(v12, -226.21551762665933);
new C16(v12, -226.21551762665933);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 8;
    this.d = v26;
    this.e = a34;
}
new F32(C16, v10);
const v37 = new F32(7.280120293210881e+307, C16);
new F32(v10, v12);
function* f42(a43, a44, a45, a46) {
    const o47 = {
        "call": f0,
        "construct": f0,
        "defineProperty": f0,
        "deleteProperty": f0,
        "get": f0,
        "getOwnPropertyDescriptor": f0,
        "getPrototypeOf": f0,
        "has": f0,
        "isExtensible": f0,
        "ownKeys": f0,
        "preventExtensions": f0,
        "set": f0,
        "setPrototypeOf": f0,
    };
    new Proxy(a46, o47);
    yield* 8;
    return a43;
}
f42(268435440n, -226.21551762665933, v37, v10);
