function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 129;
    this.g = 129;
}
new F0();
new F0();
new F0();
Date.UTC(536870887);
let v15 = 6 ** 255;
~(++v15);
new Float32Array(6);
new Uint8ClampedArray(1);
new BigUint64Array(1559);
function f25(a26, a27) {
    return a26();
}
new Promise(f25);
