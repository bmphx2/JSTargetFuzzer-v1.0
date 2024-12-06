function f0() {
    let v2 = "42845";
    const o14 = {
        __proto__: "o",
        "g": "o",
        "c": v2,
        [-2]: "o",
        [1000.0](a5, a6) {
            let v4 = this;
            [v2,,a6,v4] = super.c;
            return f0;
        },
        "f": v2,
        set h(a9) {
            v2 ^ this;
            [3,2147483648,-1202762551,1,-10,426845834,38378];
            [536870887,-299197859,10];
            [849460171,65536,-1811949992,65535,716332311,65536,1073741824,-65537];
        },
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
function f18(a19) {
    const o21 = {
        get g() {
            this[9] >>= f0;
            return v16;
        },
        "h": v17,
        [v16]: f0,
        [f0]: v17,
        ...a19,
        "g": f0,
        "c": v16,
    };
    return o21;
}
const o22 = {
    "apply": f18,
    "call": f0,
    "construct": f0,
    "defineProperty": f18,
    "h": f0,
    "get": f18,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f0,
    "has": f18,
    "ownKeys": f0,
    "set": f18,
    "setPrototypeOf": f18,
};
const v24 = new Proxy(v17, o22);
const v25 = f18(v16);
try { f0(...o22, v25, v17, v15, v25); } catch (e) {}
v24.length = 0;
f18(v16);
f18(v25);
const o37 = {
    ..."1131340342",
};
