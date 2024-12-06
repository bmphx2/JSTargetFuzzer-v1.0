function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -6;
    this.h = -6;
}
new F0();
new F0();
new F0();
new Int32Array(127);
new Float32Array(231);
new Uint8Array(127);
new Set();
new Int16Array(1);
new Uint8Array(1);
new Int8Array(257);
1 >= 1000;
