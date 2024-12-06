class C6 {
    static #b;
    #p(a8, a9, a10) {
        try { a8(16, a10); } catch (e) {}
        [[[2n,a10,-5n,a8,2n],2n,16]];
        return a9;
    }
    128 = -10389;
    static [16] = 16;
    b;
}
const v18 = new C6();
new C6();
const v20 = new C6();
function f21(a22, a23, a24, a25) {
    const o26 = {
        ...a22,
        [2n]: -1,
        ...a22,
        "f": a23,
        "b": a25,
        "h": -1,
        ...v20,
        "a": a25,
        ...a22,
        65535: -5n,
        4: a25,
        9: 2n,
        ...v20,
        ...a22,
    };
    return o26;
}
const v27 = f21(v20, -31444n, -10389, -31444n);
f21(v18, -5n, 16, -31444n);
f21(v27, 2n, -10389, -31444n);
const o31 = {
    "construct": SyntaxError,
    "defineProperty": f21,
    "deleteProperty": SyntaxError,
    "get": f21,
    "getPrototypeOf": SyntaxError,
    "has": f21,
    "isExtensible": f21,
    "ownKeys": f21,
    "preventExtensions": f21,
    "set": SyntaxError,
    "setPrototypeOf": f21,
};
new Proxy(v27, o31);
