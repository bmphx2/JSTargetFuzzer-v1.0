function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
new F3(7n, 7n);
new F3(2147483647n, 7n);
new F3(5n, 7n);
new Array(129);
new Int16Array(73);
new BigInt64Array(64);
const v22 = new BigUint64Array();
v22.fill(2147483648);
new Uint16Array(7);
const v27 = [4,4,4,4,4];
const v29 = 4 / 0;
v29 < v27[903];
