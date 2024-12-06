function F0() {
    if (!new.target) { throw 'must be called with new'; }
    ReferenceError();
    this.d = -2147483649;
    this.c = -2147483649;
}
new F0();
new F0();
new F0();
new Uint16Array(8);
new Uint32Array(2137);
new BigInt64Array(9);
("description")["repeat"]();
