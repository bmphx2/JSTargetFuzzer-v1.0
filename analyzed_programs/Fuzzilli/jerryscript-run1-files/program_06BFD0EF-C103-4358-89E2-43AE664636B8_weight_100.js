new Float32Array(1613);
new Float64Array(188);
new Int8Array(8);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a20;
    this.h = -4294967295n;
}
const v22 = new F18(52106n, -288480851n);
const v23 = new F18(52106n, -288480851n);
const v24 = new F18(v22, -2147483648n);
function f25(a26, a27, a28, a29) {
    const o40 = {
        "d": v24,
        "h": a29,
        512: -1232742435n,
        "c": a27,
        9: a26,
        get b() {
            new Uint8ClampedArray(90);
            new Int16Array(2);
            const v39 = new BigUint64Array(a26);
            return v39;
        },
    };
    return v23;
}
f25(v24, -2147483648n, -2147483648n, v23);
const v43 = f25(f25(v23, -54195n, -2147483648n, v24), -2147483648n, 52106n, F18);
new Date();
const v46 = `
    const v47 = Date[-1];
    function F48(a50, a51, a52, a53) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = F48;
        this.b = a52;
    }
    new F48(v43, v47, v43, v47);
    new F48(v47, 52106n, v47, v24);
    new F48(v43, 52106n, v43, v24);
`;
eval(v46);
