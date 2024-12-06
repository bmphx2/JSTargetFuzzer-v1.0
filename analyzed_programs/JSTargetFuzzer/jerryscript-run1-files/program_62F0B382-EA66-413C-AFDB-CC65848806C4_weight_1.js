function f0() {
}
const v1 = [f0,f0,f0,f0];
const v2 = [f0,v1,f0,f0];
[f0,v2,v1,v2,f0];
function f4() {
    return f0;
}
class C5 {
    f;
    d;
    static [v1];
    h;
    constructor(a7) {
        this[1073741824] = a7 &= this;
        const o8 = {
            "apply": f4,
            "call": f0,
            "construct": f0,
            "defineProperty": f0,
            "deleteProperty": f4,
            "getOwnPropertyDescriptor": f0,
            "getPrototypeOf": f4,
            "has": f4,
            "isExtensible": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(this, o8);
    }
}
new C5(C5);
new C5(C5);
const v13 = new C5(C5);
if (v13 !== 8) {
} else {
}
