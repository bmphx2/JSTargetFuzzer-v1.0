function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    this.g = 4;
    this.h = 4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12() {
    const o16 = {
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
    return o16;
}
const v17 = f12();
let v18 = 7327893n;
v18 ^= v18;
const v19 = f12();
f12();
function f21() {
    return v19;
}
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v17;
}
new F25(v17, 4294967296, v19);
const v31 = new F25(4294967296, -53536, v19);
new F25(v31, -1956692059, v19);
const v35 = new Int16Array(7);
new Int16Array(9);
let v39 = 2;
let v41 = new Uint32Array(v39);
v4[-53536] = v4;
v3.b = 9007199254740991;
v4.g;
v39 = 7;
const o46 = {
    "apply": f12,
    "construct": f21,
    "get": f21,
    "getOwnPropertyDescriptor": f12,
    "has": f21,
    "isExtensible": f12,
    "ownKeys": f21,
    "set": f21,
    "setPrototypeOf": f12,
};
new Proxy(v5, o46);
const v49 = v41[8];
v41 |= v49;
try {
} catch(e53) {
    v31.g = e53;
    v35[1073741824];
    function f56() {
        return 7;
    }
    [v49,-8,Uint32Array,v19];
}
