const v0 = [];
const v1 = [v0,v0,v0,v0];
const v2 = [v1,v1,v1,v1];
const v3 = [v0,v1];
function f4(a5, a6) {
    const o7 = {
        [a6]: a6,
        "b": a6,
        "a": v1,
        "h": v2,
        "d": a5,
        __proto__: f4,
        ...a6,
        "g": v0,
        ...v1,
        ...a5,
        8: v3,
    };
    return o7;
}
const o14 = {
    o(a9, a10, a11, a12) {
        `a`;
        return a12;
    },
};
const v15 = f4(v0, v2);
const v16 = f4(v3, v3);
f4(v2, v3);
function f18(a19, a20) {
    -Infinity != -65537n;
    const o31 = {
        [a20]: v1,
        [a19]: v15,
        n(a25, a26, a27) {
            const o28 = {
                "apply": f4,
                "construct": f4,
                "defineProperty": f4,
                "deleteProperty": f4,
                "get": f4,
                "isExtensible": f4,
                "set": f4,
                "setPrototypeOf": f4,
            };
            new Proxy(v16, o28);
            return a27;
        },
    };
    return f4;
}
f18(v3, v1);
f18(v3, f18(v0, f18));
/a\q?/gsm;
/\11a?/m;
