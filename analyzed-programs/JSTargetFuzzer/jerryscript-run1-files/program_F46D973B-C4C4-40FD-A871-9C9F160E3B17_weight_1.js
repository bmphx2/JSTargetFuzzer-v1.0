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
    ([1000000000.0,-1.7976931348623157e+308,1e-15,0.21503275591467574,1000.0,-839.873350010779,0.0,922596.8392166074,-Infinity]).splice([-Infinity]);
    return o24;
}
const v28 = f11(0.8397733830546444, -12);
f11(0.8397733830546444, -33240);
const v30 = f11(0.8397733830546444, 64031);
const v34 = new Float32Array(1000);
const v35 = v34[116];
v28[3] |= v35;
const o36 = {
    "apply": f11,
    "construct": f11,
    "deleteProperty": f11,
    "isExtensible": f11,
    "ownKeys": f11,
    "set": f11,
    "setPrototypeOf": f11,
};
new Proxy(v30, o36);
v34[-2] ^= 2;
v35.__proto__;
