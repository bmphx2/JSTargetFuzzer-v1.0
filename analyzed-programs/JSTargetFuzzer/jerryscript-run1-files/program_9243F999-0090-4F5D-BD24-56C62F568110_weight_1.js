const v7 = new WeakSet();
function f11(a12, a13) {
    const o24 = {
        "g": WeakSet,
        "f": 64031,
        [WeakSet](a15, a16, a17) {
            a13 = a16;
            a16 = 5;
            try { v7.delete(a17); } catch (e) {}
            Math.acos(-a13);
            return Math.sinh(a13);
        },
        "e": 0.7408756423119298,
        [0.8397733830546444]: 64031,
    };
    return o24;
}
const v25 = f11(0.8397733830546444, -12);
f11(0.8397733830546444, -33240);
const v27 = f11(0.8397733830546444, 64031);
const v31 = new Float32Array(1000);
const v32 = v31[116];
v25[3] |= v32;
const o33 = {
    "apply": f11,
    "construct": f11,
    "deleteProperty": f11,
    "isExtensible": f11,
    "ownKeys": f11,
    "set": f11,
    "setPrototypeOf": f11,
};
new Proxy(v27, o33);
v31[-2] ^= 2;
v32.__proto__;
