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
        const o22 = {
            n(a16, a17, a18) {
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
        new Proxy(this, o22);
    }
    toString(a26, a27, a28, a29) {
        a26["matchAll"](this, "b", ...a26, a28, this);
        return "constructor";
    }
    /*
    constructor(a33, a34) {
        super("constructor");
        for (const v35 in a33) {
            const v38 = v35 + v35;
            ~v8;
            const v40 = -2147483647 & v35;
            v38 >>> v40;
            Math.random();
            Math.sqrt(v40);
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
class C52 {
    static set h(a54) {
    }
    valueOf(a56, a57) {
        a57(a56, a57, a56, a57, C52);
    }
    constructor(a60, a61, a62, a63) {
        const v66 = [a60,Reflect];
        Reflect.apply(("g").padEnd, "g", v66);
    }
}
const o69 = {
};
const v71 = ("-1604200484").__proto__;
delete v71[v71];
const v74 = new Uint8Array(C52, Uint8Array, Uint8Array);
const v77 = new Uint16Array(7);
delete v74[v77];
