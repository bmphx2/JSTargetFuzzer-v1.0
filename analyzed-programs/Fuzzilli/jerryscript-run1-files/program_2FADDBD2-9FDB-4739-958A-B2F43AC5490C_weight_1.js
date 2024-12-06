function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 20276;
}
const v3 = new F0();
new F0();
new F0();
new Int8Array(15);
new Uint8ClampedArray(4);
const v20 = new BigInt64Array(68);
const o21 = {
};
const v23 = new Proxy(v3, o21);
with (v20) {
    byteOffset = v3;
    v23 && o21;
    function f25() {
        return 68;
    }
    new Uint8Array(7);
    new Int8Array(858);
    new Uint16Array(16);
}
