function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740991;
}
new F0(F0);
new F0();
new F0();
new F0();
const v13 = new Uint8Array();
const v15 = v13.__proto__;
try { Math.imul(v15); } catch (e) {}
const v17 = new Int8Array(255);
const v20 = new Int8Array(128);
new Int32Array(65536, v17, v17, v20);
class C24 {
}
async function f25(a26, a27) {
    f25(a26);
    a26 <<= C24;
    return C24;
}
const v30 = new ArrayBuffer();
new gc(v30);
