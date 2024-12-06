function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 6;
    this.h = 6;
    this.e = 6;
}
new F0();
new F0();
new F0();
new Float64Array(64);
new BigInt64Array(5);
new Uint8ClampedArray(512);
([5]).reverse();
Promise.resolve(BigInt64Array);
async function* f22(a23, a24) {
    return a24;
}
f22();
new Uint16Array(3560);
