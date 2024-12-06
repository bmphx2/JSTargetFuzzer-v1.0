let v1 = 1073741824;
function f3(a4, a5) {
    const o13 = {
        "f": v1,
        "b": v1,
        ...a4,
        [v1](a7) {
            a5 << a7;
            v1 = -10;
            return arguments;
        },
        65536: v1,
        "g": -12,
        [a5]: v1,
    };
    return a4;
}
f3(-10, -10);
f3(v1, v1);
const v16 = f3(v1, -12);
-Infinity;
function f26() {
}
const v30 = [-1000000.0,f26,-807.6596022618603,-1000000.0];
const v31 = [v30,-1000000.0,0.014069366437978514,v30];
for (let v32 = 0; v32 < 32; v32++) {
    v16["p" + v32] = v32;
}
const v35 = [v31,f26,-807.6596022618603];
let v39 = 0;
do {
    v30[-1371882255];
    v39++;
} while ((() => {
        const v45 = v39 < 1;
        const v47 = new Uint32Array();
        125563.20783278253 - v47;
        return v45;
    })())
function* f50(a51, a52, a53, a54) {
    try { a53.padStart(a51, "object"); } catch (e) {}
    const o56 = {
        "construct": f26,
        "ownKeys": f26,
        "preventExtensions": f26,
        "c": a51,
        ...a51,
        "d": a51,
        "f": a54,
        __proto__: a54,
    };
    new Proxy(v35, o56);
    yield* "object";
    return a51;
}
f50(-807.6596022618603, "U7O", "U7O", v31);
