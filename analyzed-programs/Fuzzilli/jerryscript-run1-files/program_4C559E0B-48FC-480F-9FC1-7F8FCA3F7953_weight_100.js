function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 4294967297;
    this.e = 4294967297;
    this.c = 4294967297;
}
new F0();
new F0();
new F0();
new Int16Array(512);
new BigInt64Array(9);
new Float32Array(129);
const v17 = new Uint16Array(2120);
const v20 = ([268435439,1000,129,4294967297]).fill;
v20.apply(v20, v17);
