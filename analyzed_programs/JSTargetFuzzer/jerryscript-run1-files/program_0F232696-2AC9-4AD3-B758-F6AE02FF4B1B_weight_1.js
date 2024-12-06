function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
    this.c = a5;
    this.b = a5;
}
new F3(-2);
new F3(-2);
new F3(-2);
new Int32Array(0);
new BigUint64Array(87);
new BigInt64Array(257);
new ArrayBuffer();
const v21 = new Float32Array();
const v24 = new RegExp(87);
v21[v24];
