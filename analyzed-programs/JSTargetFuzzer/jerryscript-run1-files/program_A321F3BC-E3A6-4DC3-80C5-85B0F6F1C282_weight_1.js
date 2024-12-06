function f0() {
}
class C7 extends f0 {
    static valueOf(a9, a10, a11, a12) {
        const o18 = {
            "apply": f0,
            "call": f0,
            "deleteProperty": f0,
            "get": f0,
            m(a14, a15, a16, a17) {
                return a14;
            },
            "getOwnPropertyDescriptor": f0,
            "byteOffset": f0,
            "has": f0,
            "isExtensible": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(a11, o18);
        return -65536;
    }
}
const v21 = new C7(-2);
const v22 = new C7();
const v23 = new C7();
function f24(a25, a26, a27, a28) {
    const o48 = {
        "c": "preventExtensions",
        2147483649: v23,
        "e": a26,
        "b": a28,
        [a26](a30, a31) {
            let v32;
            try { v32 = a30.assign(a25, this, a31, C7, C7); } catch (e) {}
            try { v32.toString(a26); } catch (e) {}
            ++f0;
            const v36 = super.a;
            v36.c = v36;
            let {"e":v37,"f":v38,} = v21;
            try { v22.register(-2); } catch (e) {}
            new BigUint64Array(3632);
            new Int32Array(7);
            const v47 = new Uint8ClampedArray(3407);
            return v47;
        },
    };
    return o48;
}
f24(f24(-1303163031, -65536, "tanh", v22), -2, "tanh", v22);
f24(-2, -65536, "preventExtensions", v21);
class C52 {
    valueOf(a54, a55) {
        a55();
    }
}
const v57 = new C52();
async function f58(a59, a60) {
    this | a59;
    function F63() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F63();
    class C66 {
        constructor(a68) {
            const v70 = new Uint32Array(C66, C66, a68);
            const v72 = 125563.20783278253 - v70;
            try { new C66(v72, v72, 125563.20783278253); } catch (e) {}
        }
    }
    return a60;
}
f58(v57);
