function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
    this.h = -2147483648n;
}
const v7 = new F3(52106n, -288480851n);
const v8 = new F3(52106n, -288480851n);
const v9 = new F3(v7, -2147483648n);
function f10(a11, a12, a13, a14) {
    const o25 = {
        "d": v9,
        "h": a11,
        512: -2147483648n,
        "c": a12,
        9: a11,
        get b() {
            new Uint8ClampedArray(90);
            new Int16Array(2);
            const v24 = new BigUint64Array(3);
            return v24;
        },
    };
    return o25;
}
f10(v9, -2147483648n, -2147483648n, v8);
const v28 = f10(f10(v8, 52106n, -2147483648n, v9), -2147483648n, -2147483648n, F3);
new Date();
const v31 = `
    const v32 = Date[-1];
    function F33(a35, a36, a37, a38) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = a38;
        this.b = a37;
    }
    new F33(v28, v32, v28, v32);
    new F33(v32, 52106n, v32, v9);
    new F33(v28, 52106n, v28, v9);
`;
eval(v31);
