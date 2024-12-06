function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 64;
}
new F0();
new F0();
new F0();
new Float64Array(95);
new Float32Array(95);
new BigInt64Array(4);
const v17 = new Uint16Array();
([256,v17]).reduceRight(parseInt, "number");
