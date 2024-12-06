class C4 {
    constructor(a6) {
        return arguments;
    }
}
const v8 = new C4(C4);
const v9 = new C4(C4);
v9.d = v8;
const v11 = new Set();
function f12(a13, a14, a15) {
    const o20 = {
        set b(a17) {
            `object${v11}global${this}function${this}object`;
            super.g;
        },
        ...a13,
        __proto__: v11,
        ...a14,
        ...v11,
        "d": Set,
        "h": a14,
        "g": a14,
        "f": a13,
        /*
        __proto__: v11,
        */
        [a13]: -10,
        [0]: -10,
    };
    return o20;
}
f12(-10, -128, -10);
f12(v11, -128, 0);
f12(0, -10, -10);
const v24 = [-5.0,1000000000000.0];
function f25() {
    return f25;
}
const v29 = new Float32Array(8);
v24 <= v29;
const v31 = [f25,"NaN"];
const v33 = [f25,8];
Reflect.apply(v31.reduceRight, v31, v33);
