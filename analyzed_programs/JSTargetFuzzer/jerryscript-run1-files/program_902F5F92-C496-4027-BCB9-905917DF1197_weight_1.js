function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870912;
    this.a = 536870912;
}
new F0();
new F0();
new F0();
new Uint16Array(4078);
new Int8Array(64);
new BigUint64Array(8);
let v17 = -268435456;
for (let i19 = 0; 3 < 3; v17++) {
    typeof i19;
}
