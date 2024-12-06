class C3 {
    valueOf(a5) {
        return "64";
    }
    static m(a10) {
        Object.defineProperty(a10, "b", { configurable: true, value: a10 });
        const v11 = this[215];
        function f12() {
            return this;
        }
        return v11;
    }
    e;
}
let v13 = new C3();
const v14 = new C3();
const v15 = new C3();
class C19 extends C3 {
    static ["bigint"] = v15;
    #p(a21, a22) {
        v14.__proto__;
        new Map();
        return this;
    }
    static o(a27, a28, a29, a30) {
        a28.__proto__;
        ~a27;
        v13 = v14;
        ("64").__proto__;
        return this;
    }
    #b;
}
new C19();
const v35 = new C19();
new C19();
function F37(a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a39;
    this.c = a41;
    this.a = 53601;
}
const v42 = new F37(v35, "64", "bigint");
new F37(v15, "number", "bigint");
new F37(v13, "64", "-649750463");
v42.__proto__ = v42;
const t46 = "-649750463";
t46[C19] &&= 32110;
const o51 = {
};
new Proxy(v14, o51);
