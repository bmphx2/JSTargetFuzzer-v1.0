function f3() {
    return 1024;
}
class C4 extends f3 {
    set h(a6) {
        const o7 = {
            "apply": f3,
            "call": f3,
            "construct": f3,
            "defineProperty": f3,
            "deleteProperty": f3,
            "get": f3,
            "getOwnPropertyDescriptor": f3,
            "getPrototypeOf": f3,
            "has": f3,
            "isExtensible": f3,
            "ownKeys": f3,
            "preventExtensions": f3,
            "setPrototypeOf": f3,
        };
        new Proxy(this, o7);
    }
}
const v10 = new C4();
let v11 = new C4();
const v12 = new C4();
class C13 {
    set e(a15) {
        v11[this] = a15;
    }
    static #a = f3;
    [C4];
    static set d(a17) {
        v11 &&= this;
    }
    g;
    static [v12];
    #f;
}
new C13();
new C13();
const v20 = new C13();
let v22 = new WeakMap();
v22 = v20;
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v10;
    this.f = f3;
    this.e = a28;
}
const v29 = new F23(v20, 1024, 1024, -764402362);
new F23(v29, 1637872727, 1024, 1024);
new F23(-764402362, -764402362, 1024, -764402362);
