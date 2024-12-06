new Float64Array(788);
const v5 = new Int32Array(20);
new Uint16Array(255);
function f9(a10, a11) {
    const o18 = {
        "g": v5,
        15: a10,
        [a11](a13, a14, a15) {
            a13[a15] = a10;
            this.valueOf = a13;
            v5[a11.unscopables] = a14;
            return a10;
        },
    };
    return f9;
}
f9(f9(255, 255), 20);
f9(255, 20);
const v24 = new Uint32Array([6,17590]);
new Uint8Array(v24);
