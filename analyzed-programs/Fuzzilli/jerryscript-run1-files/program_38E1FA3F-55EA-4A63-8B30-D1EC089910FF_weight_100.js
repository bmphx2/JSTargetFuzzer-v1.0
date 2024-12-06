function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 257;
    this.c = 257;
}
const v7 = new F3(256, -268435456);
new F3(257, -268435456);
new F3(-268435456, 256);
for (let i20 = 0; i20 < 8; i20++) {
    v7.__proto__;
    const o29 = {
        "maxByteLength": 14,
    };
    const v31 = new ArrayBuffer(14, o29);
    new Uint8ClampedArray(v31);
}
