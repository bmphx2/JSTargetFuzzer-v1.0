function f3(a4, a5) {
    const o9 = {
        1000: a4,
        [268435456]: 268435456,
        ...a5,
        get g() {
            let v7;
            try { v7 = this.fround(this, this); } catch (e) {}
            this | v7;
            return a5;
        },
        "e": -37259,
        "f": -37259,
        "b": 268435440,
        __proto__: -37259,
    };
    return o9;
}
const v10 = f3(268435440, -37259);
const v11 = f3(268435456, 268435456);
const v12 = f3(-37259, -37259);
function f13(a14, a15, a16, a17) {
    const o27 = {
        toString(a19, a20, a21, a22) {
            v11 instanceof a16;
            const o24 = {
                "apply": f3,
                "call": f3,
                "construct": f3,
                "deleteProperty": f3,
                "get": f3,
                "getOwnPropertyDescriptor": f3,
                "getPrototypeOf": a15,
                "isExtensible": f3,
                "ownKeys": f3,
                "set": f3,
                "setPrototypeOf": f3,
            };
            new Proxy(a15, o24);
            return a14;
        },
    };
    return o27;
}
const v28 = f13(-37259, v12, 268435440, 268435456);
f13(268435440, v28, f13, -37259);
f13(268435456, v10, v28, 268435440);
class C31 extends f13 {
    o(a33, a34, a35, a36) {
        new Float32Array(8);
        new Float64Array(8);
        new Int8Array(1514);
        return Float64Array;
    }
}
new C31();
new C31();
new C31();
print();
