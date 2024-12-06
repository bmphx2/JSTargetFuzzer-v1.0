const v1 = new WeakMap();
function f2() {
    return WeakMap;
}
class C3 {
    static a = WeakMap;
    b;
    set f(a5) {
        const o6 = {
            "apply": f2,
            "construct": f2,
            "defineProperty": f2,
            "deleteProperty": f2,
            "get": f2,
            "getOwnPropertyDescriptor": f2,
            "getPrototypeOf": f2,
            "has": f2,
            "isExtensible": f2,
            "ownKeys": f2,
            "preventExtensions": f2,
            "set": f2,
            "setPrototypeOf": f2,
        };
        new Proxy(this, o6);
    }
}
const v9 = new C3();
const v10 = new C3();
new C3();
new WeakSet();
new Float64Array(6);
const v19 = new Float64Array(2740);
new Int16Array(112);
c = 6;
v10[844] = v19;
function f23(a24) {
    return v9;
}
class C25 extends f23 {
    c = v1;
    static 4;
    #f;
}
