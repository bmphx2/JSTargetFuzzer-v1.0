function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9;
}
new F0();
new F0();
new F0();
new Float64Array(725);
new Float32Array(128);
new BigUint64Array(2, 725);
Math.sign(0);
