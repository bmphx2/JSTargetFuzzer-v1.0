function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
new F3(-65535, 1060600971);
new F3(512, -65535);
new F3(512, 512);
new Int32Array(1);
new BigUint64Array(256);
new Uint8ClampedArray(127);
let v22 = 0n;
v22 **= 1000n;
