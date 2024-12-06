function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
}
const v7 = new F3(256, -256);
new F3(v7, 256);
new F3(v7, 256);
const v21 = new BigInt64Array(256);
v21.sort();
