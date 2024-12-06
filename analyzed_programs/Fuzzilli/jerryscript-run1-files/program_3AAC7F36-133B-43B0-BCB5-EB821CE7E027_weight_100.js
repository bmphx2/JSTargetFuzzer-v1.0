function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.d = -65537;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Int8Array(483);
new BigUint64Array(16);
new Uint8Array(877);
let v16 = -256;
v16 = 1576115523;
function f18(a19, a20) {
    let v21 = +v5;
    v21 ^= a19;
    try { a20.fill(877, 4, v21, a20); } catch (e) {}
    v3 * a20;
    a20[257] >>>= 877;
    return a20;
}
f18(483, v16);
