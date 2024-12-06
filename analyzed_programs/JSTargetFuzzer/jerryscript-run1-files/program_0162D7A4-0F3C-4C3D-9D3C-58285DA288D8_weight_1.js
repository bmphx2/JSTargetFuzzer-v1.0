function f3() {
    return 361240582;
}
new Uint32Array(82);
const v9 = new Uint8ClampedArray(207);
new Int32Array(1495);
class C13 {
    constructor(a15, a16, a17) {
        const o21 = {
            "call": f3,
            "construct": f3,
            "defineProperty": f3,
            "deleteProperty": f3,
            "getOwnPropertyDescriptor": f3,
            "getPrototypeOf": f3,
            "isExtensible": f3,
            "ownKeys": f3,
            p(a19, a20) {
                return Uint32Array;
            },
            "isExtensible": a15,
            3681: a15,
            "set": f3,
        };
        new Proxy(v9, o21);
    }
}
new C13(1495, 207, v9);
const v25 = new C13(361240582, 25431, Int32Array);
new C13(1495, 4, v25);
function f27() {
}
function f28() {
    const o34 = {
        get g() {
            new f27();
            return f27;
        },
        "h": f27,
        ...f27,
        "g": f27,
        "a": f27,
        ...f27,
    };
    return o34;
}
f28();
const v36 = f28();
f28();
let v40 = Int32Array;
let v41 = new v40(4096);
new Uint32Array(129);
let v47 = new Int16Array(512);
[,v40,v47,v41] = v47;
v36.g += 4096;
const v49 = Symbol.iterator;
const o58 = {
    [v49]() {
        let v51 = 10;
        const o57 = {
            next() {
                v51--;
                const v55 = v51 == 0;
                const o56 = {
                    "done": v55,
                    "value": v51,
                };
                return o56;
            },
        };
        return o57;
    },
};
