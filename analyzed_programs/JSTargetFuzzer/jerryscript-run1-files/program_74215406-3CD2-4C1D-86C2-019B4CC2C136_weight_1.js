new Float64Array(788);
const v5 = new Int32Array(20);
const v8 = new Uint16Array(255);
function f9(a10, a11) {
    const o18 = {
        "g": v5,
        15: v8,
        [a11](a13, a14, a15) {
            this[a15] = a10;
            this.valueOf = a13;
            v5[Symbol.unscopables] = a14;
            return a10;
        },
    };
    return a11;
}
f9(255, 255);
f9(788, 20);
f9(255, 20);
const v24 = new Uint32Array([6,17590]);
new Uint8Array(v24);
