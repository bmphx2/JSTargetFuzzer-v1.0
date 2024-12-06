const v1 = new Set();
function f2() {
    return v1;
}
const v5 = new Float64Array(4);
const v6 = f2 * v5;
const o7 = {
    "apply": f2,
    "call": f2,
    "deleteProperty": f2,
    "get": f2,
    "getOwnPropertyDescriptor": f2,
    "getPrototypeOf": f2,
    "has": f2,
    "isExtensible": f2,
    "preventExtensions": f2,
    "setPrototypeOf": f2,
};
let v9 = new Proxy(v5, o7);
new Int16Array(122);
const o14 = {
    valueOf() {
        this.f &= 4;
        v9 -= this;
        return v6;
    },
};
new Uint16Array(313);
const v20 = new Int32Array(2083);
new Uint8Array(255);
const v26 = new Int16Array(7);
function f27(a28, a29, a30) {
    const o37 = {
        "h": Int32Array,
        set e(a32) {
            e = a29;
            [a30,a29];
            [v20];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v26,
        "b": Uint8Array,
        "c": 255,
        ...a28,
        1053877365: a29,
    };
    return o37;
}
const v38 = f27(2083, 255, 7);
const v39 = f27(v38, 7, 2083);
f27(f27, 255, 7);
v38[-2] &= 2083;
v26[-1] -= 7;
let v41 = 10;
for (; v41--;) {
    v39.h;
    v39[Symbol.toPrimitive] = 7;
}
