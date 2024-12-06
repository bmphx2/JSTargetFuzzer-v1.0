function f0() {
}
class C7 extends f0 {
    static valueOf(a9, a10, a11, a12) {
        const o13 = {
            "apply": f0,
            "call": f0,
            "deleteProperty": f0,
            "get": f0,
            "getOwnPropertyDescriptor": f0,
            "byteOffset": f0,
            "has": f0,
            "isExtensible": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(a11, o13);
        return -65536;
    }
}
const v16 = new C7(-2);
const v17 = new C7();
const v18 = new C7();
function f19(a20, a21, a22, a23) {
    const o38 = {
        "c": "preventExtensions",
        2147483649: v18,
        "e": a21,
        "b": a23,
        [a21](a25, a26) {
            let v27;
            try { v27 = a25.assign(a20, this, a26, C7, C7); } catch (e) {}
            try { v27.toString(a21); } catch (e) {}
            new BigUint64Array(3632);
            new Int32Array(7);
            const v37 = new Uint8ClampedArray(3407);
            return v37;
        },
    };
    return o38;
}
f19(f19(-1303163031, -65536, "tanh", v17), -2, "tanh", v17);
f19(-2, -65536, "preventExtensions", v16);
class C42 {
    valueOf(a44, a45) {
        a45();
    }
}
const v47 = new C42();
async function f48(a49, a50) {
    this | a49;
    return a50;
}
f48(v47);
