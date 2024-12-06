function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 8;
    this.stack = 8;
}
new F0();
const v4 = new F0();
new F0();
new Int8Array(13, Int8Array);
const v14 = new Float64Array(7, Float64Array, v4, Float64Array);
new Uint32Array(2299, v14, Int8Array);
const v20 = new Uint32Array(2, 2);
const v21 = [v20,2,2];
for (let v22 = 0; v22 < 5; v22++) {
    v21.lastIndexOf(v22);
}
