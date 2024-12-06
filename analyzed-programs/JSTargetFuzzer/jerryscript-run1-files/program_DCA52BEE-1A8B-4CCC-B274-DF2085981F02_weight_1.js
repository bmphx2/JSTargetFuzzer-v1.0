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
const v37 = new Date();
class C38 extends Date {
}
new C38(v37);
const v40 = f28();
f28();
let v44 = Int32Array;
let v45 = new v44(4096);
new Uint32Array(129);
let v51 = new Int16Array(512);
[,v44,v51,v45] = v51;
v40.g += 4096;
const v53 = Symbol.iterator;
const o62 = {
    [v53]() {
        let v55 = 10;
        const o61 = {
            next() {
                v55--;
                const v59 = v55 == 0;
                const o60 = {
                    "done": v59,
                    "value": v55,
                };
                return o60;
            },
        };
        return o61;
    },
};
