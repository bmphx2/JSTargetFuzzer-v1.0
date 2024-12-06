function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 255;
}
new F0();
new F0();
new F0();
new Int32Array(10);
new Uint8Array(1504);
new Int8Array(4);
const v16 = [-1604425008,2147483649,16];
v16[65535n] = -2.0;
v16.slice();
