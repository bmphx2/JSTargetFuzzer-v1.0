function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 129;
    this.g = 129;
}
new F0();
new F0();
new F0();
let v8 = 9007199254740990;
Date.UTC(536870887);
6 ** 255;
URIError();
~(++v8);
new Float32Array(6);
new Uint8ClampedArray(1);
new BigUint64Array(1559);
function f27(a28, a29) {
    return a28();
}
new Promise(f27);
