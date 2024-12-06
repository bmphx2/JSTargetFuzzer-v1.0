function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -65536;
    this.b = -65536;
    this.h = this;
}
new F0();
new F0();
new F0();
const v14 = new Int32Array(512);
for (const v15 of v14) {
    const v18 = new ArrayBuffer(10);
    new Int8Array(v18);
}
