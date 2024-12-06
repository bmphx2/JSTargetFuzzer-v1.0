function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    ([a8]).shift();
}
new F5(Uint8Array, Uint8Array);
new Int8Array(257);
new Uint32Array(7);
new Uint8ClampedArray(10);
function f20() {
    const o21 = {
    };
    return o21;
}
([10000]).find(f20);
