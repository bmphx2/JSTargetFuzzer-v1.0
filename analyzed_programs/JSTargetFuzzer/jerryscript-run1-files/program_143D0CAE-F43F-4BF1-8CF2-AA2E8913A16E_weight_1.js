function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2064769139;
    this.b = -2064769139;
}
new F0();
new F0();
let v5 = new F0();
class C9 extends F0 {
    constructor(a11, a12, a13, a14) {
        super();
        const o15 = {
            "call": F0,
            "construct": F0,
            "defineProperty": F0,
            "get": F0,
            "getOwnPropertyDescriptor": F0,
            "has": F0,
            "isExtensible": F0,
            "set": F0,
            "setPrototypeOf": F0,
        };
        new Proxy(this, o15);
    }
    static [0.475706146282143];
    static get e() {
        let v19 = 0;
        while (v19 < 6) {
            v5 = this;
            super.b = 6.461599041860726e+307;
            try { F0(); } catch (e) {}
            v19++;
        }
        return 0.475706146282143;
    }
}
new C9();
new C9();
new C9();
("p").lastIndexOf();
