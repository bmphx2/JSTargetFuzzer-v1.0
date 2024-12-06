const v0 = [-41720.527910613455,2.220446049250313e-16];
const v1 = [-975828.1243771834,1000000000.0,-Infinity,2.0,559907.0981279078,-3.0];
const v2 = [-1000.0,-2.0,-3.0];
class C6 {
    valueOf(a8, a9) {
        try { a8(a9, 7, a9, v0, this); } catch (e) {}
        return this;
    }
    [512];
    static #valueOf(a12, a13, a14) {
        v1 ^ a12;
        return this;
    }
    m(a17, a18, a19, a20) {
        let v21 = 0;
        while (v21 < 10) {
            new BigInt64Array(0);
            new Uint8Array(1000);
            new BigInt64Array(157);
            v21++;
        }
        return a18;
    }
}
const v34 = new C6();
const v35 = new C6();
const v36 = new C6();
function f37() {
    return v0;
}
function f41(a42, a43) {
    const o52 = {
        set h(a45) {
            Object.defineProperty(v34, 7, { configurable: true, enumerable: true, get: f37, set: f37 });
            v35.__proto__ = v36;
        },
        "a": 512,
        [-1]: a43,
        __proto__: v35,
        "g": a43,
        6: 13,
    };
    return o52;
}
f41(v0, C6);
f41(v0, v35);
const v55 = f41(v2, v36);
const o56 = {
    "apply": f37,
    "call": f41,
    "construct": f41,
    "get": f41,
    "getOwnPropertyDescriptor": f41,
    "has": f37,
    "isExtensible": f41,
    "ownKeys": f41,
    "set": f37,
    "setPrototypeOf": f37,
};
new Proxy(v55, o56);
