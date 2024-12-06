function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    a6.f = 9;
}
new F3(9, 9);
new F3(9, 4294967297);
new F3(4294967295, 4294967297);
new Uint32Array(1000);
new Int32Array(4);
new BigUint64Array(7);
const v21 = new Uint8Array();
delete v21[-2];
