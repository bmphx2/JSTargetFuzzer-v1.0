function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = false;
}
new F1();
new F1();
new F1();
new BigUint64Array(16);
new Uint8ClampedArray(140);
const v15 = new Int8Array(1000);
v15.byteLength = 16;
for (let v16 in v15) {
    const v19 = v16 * v16;
    let v20 = -7 & v19;
    let v21 = ++v16;
    v19 * v20;
    --v20;
    v21++;
}
