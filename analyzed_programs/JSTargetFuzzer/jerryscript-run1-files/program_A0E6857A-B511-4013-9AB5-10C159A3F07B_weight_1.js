function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.b = a5;
}
new F3(7);
new F3(4);
new F3(7);
new Uint32Array(3527);
new BigInt64Array(7);
new Int8Array(1000);
("number").replace();
