function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -9007199254740990;
}
const v3 = new F0();
new F0();
new F0();
new BigInt64Array(1545);
new Int8Array(178);
new Int16Array(10);
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    if (v3) {
        function F29(a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
            a32(F29);
        }
    }
}
new F25(0.1725881460737685);
