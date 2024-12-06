const v7 = new Date();
function f8() {
    return -8;
}
class C9 {
    valueOf(a11, a12, a13, a14) {
        try { new a13(this, v7, this, a11); } catch (e) {}
        const o16 = {
            "call": Date,
            "construct": f8,
            "deleteProperty": f8,
            "get": f8,
            "getOwnPropertyDescriptor": f8,
            "getPrototypeOf": f8,
            "isExtensible": Date,
            "ownKeys": Date,
            "set": f8,
            "setPrototypeOf": Date,
        };
        new Proxy(this, o16);
        return f8;
    }
}
new C9();
new C9();
new C9();
new Float32Array(775);
new Float32Array(793);
new Uint8Array(2);
const v33 = new Int16Array();
Reflect.getPrototypeOf(v33.toString);
