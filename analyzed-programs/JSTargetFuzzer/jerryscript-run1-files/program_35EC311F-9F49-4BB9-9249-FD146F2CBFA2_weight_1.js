let v1 = Float32Array;
const v2 = new v1(9);
const v5 = new Int16Array(361);
const v8 = new Float32Array(13);
function f9(a10, a11, a12, a13) {
    const o20 = {
        "g": v8,
        get c() {
            const v15 = new Float32Array(this, a11);
            try { v15(v15, v5, v15); } catch (e) {}
            [329243063,-1,-782638712,4294967295,268435456,-11,22017];
            [255,16,-1024,7,2147483648,-493662995];
            [48173,-16,3];
            return v15;
        },
        "d": a12,
        "c": Float32Array,
        __proto__: v2,
        "h": a10,
        "e": v1,
    };
    return o20;
}
const v21 = f9(9, 9, 13, 361);
const v22 = f9(9, 361, 9, 9);
const v23 = f9(361, 361, 9, 13);
v1 = Float32Array;
const o37 = {
    "apply": f9,
    "construct": f9,
    "defineProperty": f9,
    "deleteProperty": f9,
    "getOwnPropertyDescriptor": f9,
    p(a28, a29) {
        let v30;
        try {
        const t0 = 361;
        v30 = t0(this, a29, a28, a29, v22);
        } catch (e) {}
        Reflect.apply(("object").charCodeAt, a29);
        v22[0] in v30;
        return 9;
    },
    "set": f9,
};
new Proxy(v23, o37);
for (let i42 = 0;
    (() => {
        eval();
        let v46 = -13;
        v46 = 9;
        v21.length = 65536;
        return undefined < 9;
    })();
    ) {
}
