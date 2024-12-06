if (2147483648) {
    const t1 = 9007199254740991;
    t1.__proto__ = -1024;
} else {
    try {
    const t0 = -8;
    t0(2147483648, 9007199254740991, -8, ...-1024, -1024);
    } catch (e) {}
}
const v8 = new Date();
function f9() {
    return -8;
}
class C10 {
    valueOf(a12, a13, a14, a15) {
        let v16;
        try { v16 = new a14(this, v8, this, a12); } catch (e) {}
        const o33 = {
            "call": Date,
            "construct": -8,
            "deleteProperty": f9,
            "c": 45143004,
            ...v8,
            8: Date,
            4: a14,
            "d": Date,
            get a() {
                return 2;
            },
            "get": a12,
            "getOwnPropertyDescriptor": 9007199254740991,
            "getPrototypeOf": f9,
            "isExtensible": Date,
            "ownKeys": Date,
            toString(a22, a23, a24, a25) {
                a13[a14] = a25;
                function f26() {
                    return v16;
                }
                typeof a24 === "boolean";
                return a22;
            },
            "set": f9,
            "setPrototypeOf": Date,
        };
        new Proxy(this, o33);
        return f9;
    }
}
const v36 = new C10();
const v37 = new C10();
new C10();
class C41 extends v37.constructor {
    f;
    static [v36] = -1024;
}
new C41();
new Float32Array(775);
new Float32Array(793);
new Uint8Array(2);
const v53 = new Int16Array();
Reflect.getPrototypeOf(v53.toString);
