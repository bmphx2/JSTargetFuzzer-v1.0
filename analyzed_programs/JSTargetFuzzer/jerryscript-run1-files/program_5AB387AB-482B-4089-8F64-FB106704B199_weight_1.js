function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2147483648;
    this.c = -2147483648;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(5);
new Int32Array(2878);
new BigUint64Array(7);
Promise.reject(Promise)["then"]();
