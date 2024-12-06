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
const v8 = f4(v0, v2);
const v9 = f4(v3, v3);
f4(v2, v3);
function f11(a12, a13) {
    -Infinity != -65537n;
    const o24 = {
        [a13]: v1,
        [a12]: v8,
        n(a18, a19, a20) {
            const o21 = {
                "apply": f4,
                "construct": f4,
                "defineProperty": f4,
                "deleteProperty": f4,
                "get": f4,
                "isExtensible": f4,
                "set": f4,
                "setPrototypeOf": f4,
            };
            new Proxy(v9, o21);
            return a20;
        },
    };
    return f4;
}
f11(v3, v1);
f11(v3, f11(v0, f11));
/a\q?/gsm;
/\11a?/m;
