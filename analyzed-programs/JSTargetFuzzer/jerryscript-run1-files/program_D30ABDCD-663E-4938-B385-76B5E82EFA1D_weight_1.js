new BigUint64Array(16);
new BigUint64Array(127);
new BigInt64Array(5);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 16;
}
new F9(16, 5, 5);
new F9(5, 5, 127);
new F9(16, 5, 127);
const v19 = new Uint8ClampedArray(2634);
const v22 = new Uint32Array(16);
function f23(a24, a25, a26, a27) {
    const o28 = {
        ...v22,
        ...a24,
    };
    return o28;
}
const v29 = f23(Uint32Array, 2634, 3769, v22);
f23(v29, v19, v29, Uint8ClampedArray);
f23();
