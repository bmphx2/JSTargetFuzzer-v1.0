function f3() {
    return 2147483649;
}
class C4 {
    #e;
    static [6] = 127;
    static n(a6) {
        Object.defineProperty(this, "e", { configurable: true, get: f3 });
        for (let i8 = 0; i8 < 8; i8++) {
        }
        return 6;
    }
}
const v17 = new C4();
const v18 = new C4();
const v19 = new C4();
[v17,v19,6,f3,127];
[v17,v18,v19,C4,f3];
[127];
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v19;
    this.c = 2147483649;
}
new F23(2147483649, C4);
new F23(6, v18);
new F23(2147483649, v19);
const o31 = {
    "apply": f3,
    "construct": f3,
    "defineProperty": f3,
    "has": f3,
    "isExtensible": f3,
    "ownKeys": f3,
    "preventExtensions": f3,
    "set": f3,
    "setPrototypeOf": f3,
};
new Proxy(v19, o31);
