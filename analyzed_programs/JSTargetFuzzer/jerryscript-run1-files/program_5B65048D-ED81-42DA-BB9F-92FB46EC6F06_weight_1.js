function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9007199254740990;
    this.f = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    this.a = a9;
}
new F6(v3, v4);
new F6(v5, v4);
new F6(v5, v4);
new BigInt64Array(1024);
new Int32Array(142);
new Int8Array(15);
`bigint`;
("split")["split"]("split", 65535);
