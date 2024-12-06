const v1 = new WeakSet();
function f2() {
    return v1;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
new F3(WeakSet);
new F3(F3);
new F3(v1);
function f9() {
    return v1;
}
class C10 {
    static get h() {
        const o12 = {
            "call": f2,
            "construct": f9,
            "deleteProperty": f9,
            "get": f2,
            "getOwnPropertyDescriptor": f9,
            "has": f2,
            "preventExtensions": f9,
            "set": f2,
            "setPrototypeOf": f2,
        };
        2.220446049250313e-16 - 11;
        const v17 = new Proxy(this, o12);
        return v17;
    }
}
new C10();
new C10();
new C10();
Promise.race();
