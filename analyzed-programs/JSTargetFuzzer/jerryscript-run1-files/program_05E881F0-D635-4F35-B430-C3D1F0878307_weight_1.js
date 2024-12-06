function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 5711;
}
const v3 = new F0();
let v4 = new F0();
new F0();
const v6 = v4--;
const o8 = {
    "call": Array,
    "construct": Array,
    "defineProperty": Array,
    "deleteProperty": Array,
    "get": Array,
    "getOwnPropertyDescriptor": Array,
    "getPrototypeOf": Array,
    "has": Array,
    "isExtensible": Array,
    "ownKeys": Array,
    "preventExtensions": Array,
    "set": Array,
    "setPrototypeOf": Array,
};
new Proxy(v3, o8);
new Array(256);
function f16() {
    return v3;
}
function f26() {
    const o30 = {
        4096: 24473,
        __proto__: "sticky",
        "g": "sticky",
        ..."sticky",
        ["sticky"]: -2.220446049250313e-16,
        [24473]: "sticky",
        ..."sticky",
        13: "sticky",
        "f": 24473,
        "a": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o30;
}
const v31 = f26();
const v32 = f26();
const v33 = f26();
function f34() {
    return v32;
}
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v31;
}
new F38(v31, 4294967296, v32);
const v44 = new F38(4294967296, -53536, v32);
new F38(v44, -1956692059, v32);
new Int16Array(7);
new Int16Array(9);
let v54 = new Uint32Array(2);
let v55 = -0.872616750695661;
v54 |= v54[8];
try {
} catch(e62) {
    v55 *= v6;
    b = e62;
    v31[268435456];
    o8[5];
    for (let v65 = 0; v65 < 32; v65++) {
        e62["p" + v65] = v65;
    }
    const v68 = Array(e62);
    function F69(a71, a72, a73, a74) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = a74;
    }
    const v75 = new F69(v31, v33, e62, F69);
    new F69(v31, v32, v75, v75);
    new F69(e62, v31, v68, v68);
    v44.g = e62;
}
