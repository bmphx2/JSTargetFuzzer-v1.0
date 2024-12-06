const v1 = new WeakSet();
new Uint8ClampedArray(8);
new Uint32Array(8);
new Uint8ClampedArray(1);
let v14 = 44256;
const v17 = new Uint32Array(858, v1, 858);
const v19 = new Uint16Array();
function f20(a21, a22, a23, a24) {
    const o29 = {
        m(a26, a27, a28) {
            v14 ^= a28;
            return 858;
        },
    };
    return o29;
}
const v30 = f20();
for (const v31 in v17) {
    const v33 = [v31,f20,Reflect];
    Reflect.apply(v30.m, v19, v33);
}
