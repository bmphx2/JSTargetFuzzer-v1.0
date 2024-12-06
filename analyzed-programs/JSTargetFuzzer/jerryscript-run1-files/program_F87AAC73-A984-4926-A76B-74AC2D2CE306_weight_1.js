const v0 = [];
function f1() {
    const o2 = {
        "f": v0,
        65537: v0,
        ...v0,
        6: v0,
        [v0]: v0,
        ...v0,
        "c": v0,
        [-1]: v0,
        "e": v0,
        __proto__: v0,
        0: v0,
        "g": v0,
        536870888: v0,
    };
    return o2;
}
const v3 = f1();
f1();
const v5 = f1();
const v8 = new Uint32Array(4);
const o9 = {
    "apply": f1,
    "call": f1,
    "get": f1,
    "preventExtensions": f1,
    "set": f1,
};
const v11 = new Proxy(v3, o9);
let v14 = new Int8Array(3119);
new BigUint64Array(127);
function f18() {
    const o19 = {
        __proto__: f18,
        "c": 4,
        "f": v3,
        "g": BigUint64Array,
        "h": v14,
        2752916194: o9,
    };
    v11.b ^= 3119;
    const v20 = new Int8Array(3119, o19, 3119, o19, v3, o19);
    v20 === v5;
    v14 /= v20;
    Object.defineProperty(v11, v8, { get: f18 });
    return o19;
}
const v23 = [f18()];
try { v23.toString(); } catch (e) {}
