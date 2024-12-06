function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try { null.set(); } catch (e) {}
    this.g = 10000;
    this.c = 10000;
}
new F0();
new F0();
new F0();
new Int8Array(2339);
new BigUint64Array(4015);
new Uint8Array(129);
("description")["repeat"](4096);
