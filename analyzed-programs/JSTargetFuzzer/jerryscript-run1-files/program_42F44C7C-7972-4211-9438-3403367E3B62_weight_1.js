function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -16;
}
new F0();
new F0();
new F0();
new Int16Array(1024);
new Float32Array(4);
new BigUint64Array(127);
const v25 = new Float64Array();
v25.reduceRight(Array, undefined);
