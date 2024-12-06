function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.h = -2147483647;
}
const v11 = new F6(-55290, -45047, F6);
const v12 = new F6(v11, -128, -45047);
new F6(v12, -55290, -45047);
const v18 = new BigInt64Array(v11);
v18.toLocaleString();
