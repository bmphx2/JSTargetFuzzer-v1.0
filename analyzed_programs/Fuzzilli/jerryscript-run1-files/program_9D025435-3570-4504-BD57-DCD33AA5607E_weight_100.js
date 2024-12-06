class C3 {
    constructor(a5, a6) {
        this[3449] = a6;
        new Int32Array(64);
        new Float32Array(256);
        new Float64Array(64);
    }
    static #g = 2176;
}
const v16 = new C3(2176, 128);
new C3(2176, 128);
const v18 = new C3(2176, -4096);
function f19(a20, a21) {
    const o35 = {
        ...v18,
        __proto__: a20,
        set c(a23) {
            const v25 = C3[a23];
            let v27 = -268435456;
            const v28 = -v27;
            v16 ^ v27;
            Math.cosh(v28);
            Math.abs(v28);
            const v32 = ++v27;
            v25 - v28;
            !v32;
        },
    };
    return o35;
}
f19(f19(v16, 2176), -4096);
f19(v18, -4096);
function f42(a43) {
    return C3;
}
class C44 extends f42 {
    #h;
    [v18] = "42475";
}
new f19(C44, 2176);
f19(C44, 128);
