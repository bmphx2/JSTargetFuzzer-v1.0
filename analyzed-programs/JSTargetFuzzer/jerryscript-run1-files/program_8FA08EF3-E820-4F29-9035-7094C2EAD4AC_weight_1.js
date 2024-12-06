const v2 = new Uint8ClampedArray(3150);
const v5 = new Float64Array(512);
const v8 = new BigInt64Array(44);
const v10 = new WeakSet();
function f11(a12, a13) {
    const o23 = {
        [BigInt64Array](a15, a16, a17) {
            v5[3150];
            class C19 extends BigInt64Array {
                h = v5;
                static [BigInt64Array];
            }
            new C19();
            new C19();
            new C19();
            return a12;
        },
        [v10]: v8,
        "g": v2,
        "a": WeakSet,
        "f": v10,
    };
    return o23;
}
f11(44, 3150);
f11(3150, 3150);
f11(3150, 512);
function f33(a34, a35) {
    const o43 = {
        ...a35,
        "c": a35,
        "b": 1073741824,
        "d": v2,
        "h": BigInt64Array,
        "g": a35,
        ...v5,
        [a34]: 3,
        "e": a35,
        __proto__: a35,
        [3](a37, a38, a39) {
            try {
                super.m(a35, a37, a39, a37);
            } catch(e41) {
            }
            const v42 = this[8];
            a34 **= -33749;
            return v42;
        },
    };
    return o43;
}
f33(10000, 512);
f33(-33749, f33);
f33(3, f33);
function F47(a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a50;
}
const v51 = new F47(10000, 3);
const o52 = {
    "apply": f11,
    "call": f11,
    "construct": f11,
    "defineProperty": f33,
    "deleteProperty": f33,
    "getOwnPropertyDescriptor": f33,
    "has": f11,
    "isExtensible": f33,
    "setPrototypeOf": f33,
};
new Proxy(v51, o52);
const v55 = new F47(512, 22165);
new F47(1073741824, 3);
delete v55[1509295508];
Math.sinh(F47);
Math.sinh(10000);
const v67 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v67);
