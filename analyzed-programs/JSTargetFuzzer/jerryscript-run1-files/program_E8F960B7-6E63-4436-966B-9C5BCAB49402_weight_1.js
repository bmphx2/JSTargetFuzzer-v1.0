function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -47360;
    this.b = -47360;
    this.match = -47360;
}
const v3 = new F0();
const v4 = new F0(v3);
new F0(v4, v3, v4);
new Uint16Array(12);
const v11 = new Uint8ClampedArray(1375);
new BigInt64Array(256, v11, 1375, 12);
async function f15(a16, a17, a18) {
    const v21 = new ArrayBuffer(8);
    new Int32Array(v21);
    return a18;
}
f15();
