function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "b";
    this.c = a5;
}
new F3("toString");
const v7 = new F3("b");
const v8 = new F3("constructor");
class C9 extends F3 {
    static 0 = C9;
    constructor(a11, a12, a13, a14) {
        super();
        const o25 = {
            n(a16, a17, a18) {
                const o20 = {
                };
                new Uint8Array(a18);
                return a12;
                return v7;
            },
            "call": C9,
            "construct": C9,
            "defineProperty": C9,
            "get": C9,
            "getOwnPropertyDescriptor": C9,
            "has": C9,
            "isExtensible": C9,
            "set": C9,
            "setPrototypeOf": C9,
        };
        new Proxy(this, o25);
    }
    toString(a29, a30, a31, a32) {
        a29["matchAll"](this, "b", ...a29, a31, this);
        return "constructor";
    }
    /*
    constructor(a36, a37) {
        super("constructor");
        for (const v38 in a36) {
            const v41 = v38 + v38;
            ~v8;
            const v43 = -2147483647 & v38;
            v41 >>> v43;
            Math.random();
            Math.sqrt(v43);
        }
        for (let i = 0; i < 5; i++) {
            continue;
            break;
        }
        (16).__proto__;
    }
    */
}
new C9(C9, "constructor");
new C9(F3, "b");
new C9(C9, "constructor");
class C55 {
    static set h(a57) {
    }
    valueOf(a59, a60) {
        a60(a59, a60, a59, a60, C55);
    }
    constructor(a63, a64, a65, a66) {
        const v69 = [a63,Reflect];
        Reflect.apply(("g").padEnd, "g", v69);
    }
}
const o72 = {
};
const v74 = ("-1604200484").__proto__;
delete v74[v74];
const v77 = new Uint8Array(C55, Uint8Array, Uint8Array);
const v80 = new Uint16Array(7);
delete v77[v80];
