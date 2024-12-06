let v1 = -37259;
function f3(a4, a5) {
    const o11 = {
        3: a4,
        [-2147483647]: -2147483647,
        ...a5,
        get g() {
            let v7;
            try { v7 = this.fround(this, this); } catch (e) {}
            this | v7;
            return a5;
        },
        "e": v1,
        "length": v1,
        "b": -4294967296,
        get d() {
            v1--;
            a4[3989] = v1;
            return a4;
        },
        __proto__: v1,
    };
    return o11;
}
const v12 = f3(-4294967296, v1);
const v13 = f3(-2147483647, -2147483647);
const v14 = f3(v1, v1);
function f15(a16, a17, a18, a19) {
    const o29 = {
        toString(a21, a22, a23, a24) {
            v13 instanceof a18;
            const o26 = {
                "apply": f3,
                "call": f3,
                "construct": f3,
                "deleteProperty": f3,
                "get": f3,
                "getOwnPropertyDescriptor": f3,
                "getPrototypeOf": a17,
                "isExtensible": f3,
                "ownKeys": f3,
                "set": f3,
                "setPrototypeOf": f3,
            };
            new Proxy(a17, o26);
            return a16;
        },
    };
    return o29;
}
const v30 = f15(v1, v14, -4294967296, -2147483647);
f15(-4294967296, v30, f15, v1);
f15(-2147483647, v12, v30, -4294967296);
class C33 extends f15 {
    o(a35, a36, a37, a38) {
        new Float32Array(8);
        new Float64Array(8);
        new Int8Array(1514);
        return Float64Array;
    }
}
new C33();
new C33();
new C33();
print();
