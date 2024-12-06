function f0() {
}
function f7(a8, a9, a10) {
    const o20 = {
        "f": 1n,
        "g": 65536,
        "a": -18987,
        ...a8,
        toString(a12, a13, a14) {
            delete this[3];
            const t9 = 12n;
            t9.valueOf = a8;
            return a10;
        },
    };
    return o20;
}
const v21 = f7(f7, 65536, 1n);
let v22 = f7(v21, -18987, 12n);
const v23 = f7(65536, 65536, 1n);
function f24(a25, a26, a27) {
    const o36 = {
        ...a27,
        8: 65536,
        "b": a25,
        "g": 1n,
        ...a27,
        ...a27,
        [a25](a29, a30, a31, a32) {
            const o33 = {
                "apply": f0,
                "call": f0,
                "construct": f7,
                "get": f0,
                "isExtensible": f0,
                "set": f24,
                "setPrototypeOf": f7,
            };
            new Proxy(v23, o33);
            return 12n;
        },
    };
    return o36;
}
f24(65536, v22, v21);
f24(65536, v23, v23);
f24(f0, v21, v22);
const v42 = new Uint32Array(181);
let v44 = BigUint64Array;
let v45 = new v44(1);
let v46 = 253;
[v46,,v44,v45] = v42;
try { v44["abs"](181, v46, v44); } catch (e) {}
-128 / -128;
new f24(65536, v22++, v44);
v46 = f7;
-28135 < -65536n ? -28135 : -65536n;
new Uint16Array(v46);
for (let i64 = 0;
    i64 < 2;
    (() => {
        [2147483647,1073741824,2147483648,61834,8,127,-268435456,-65535,4294967297,129];
        [-9007199254740990];
        [268435456];
        for (let v71 = 0; v71 < 32; v71++) {
            v21["p" + v71] = v71;
        }
        i64++;
    })()) {
    const v76 = new Function("x");
    v76.name;
}
Function();
