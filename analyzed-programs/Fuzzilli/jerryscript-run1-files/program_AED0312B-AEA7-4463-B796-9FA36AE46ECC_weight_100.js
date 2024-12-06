const v0 = [];
class C4 {
    toString(a6, a7) {
        super.d = a7;
        let v8;
        try { v8 = this(-174689.6248645517, a6, 5.0); } catch (e) {}
        return v8;
        super.b = a7;
        try { this["getUTCHours"](0.0, 0.0); } catch (e) {}
        return v8;
    }
    3;
}
const v11 = new C4();
const v12 = new C4();
const v13 = new C4();
function f14(a15, a16) {
    const o26 = {
        [a15]: 0.0,
        ...a16,
        ...a16,
        toString(a18, a19) {
            return v13;
        },
    };
    return o26;
}
f14(v11, v0);
const v28 = f14(v11, v12);
f14(v28, v11);
function f30() {
    return v13;
}
Object.defineProperty(C4, 8, { writable: true, configurable: true, get: f14 });
const o31 = {
    "defineProperty": f14,
    "getOwnPropertyDescriptor": f14,
    "preventExtensions": f30,
    "setPrototypeOf": f14,
};
new Proxy(v28, o31);
