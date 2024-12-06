function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9007199254740990;
}
new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
new Float64Array(11);
new Uint16Array(9);
new Float32Array(1024);
new Uint32Array(4);
new BigInt64Array(6);
new Int8Array(257);
new Float32Array(11, 1024, 2);
