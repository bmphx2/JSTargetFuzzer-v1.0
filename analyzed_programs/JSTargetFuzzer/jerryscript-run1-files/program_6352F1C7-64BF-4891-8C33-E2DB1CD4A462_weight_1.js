function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.name = 257;
    this.NaN = 257;
    this.g = 257;
}
const v3 = new F0();
const v4 = new F0(v3, v3);
const v5 = new F0();
new print(-1, v5, v4);
new BigUint64Array(7);
new Uint8ClampedArray(512);
("number").replace(v5, Uint8ClampedArray, "number");
