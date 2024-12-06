function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740991;
    this.g = -9007199254740991;
    this.d = -9007199254740991;
}
new F0();
new F0();
new F0();
const v14 = new BigInt64Array(129);
v14["reduceRight"](print);
