function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = false;
    this.b = false;
    this.g = false;
    this[this] *= false;
    const v5 = this[Symbol.toPrimitive];
    try { v5(); } catch (e) {}
}
new F1();
const v8 = new F1();
new F1();
new Uint16Array(2);
new Int8Array(128);
new Float32Array(317);
let v21 = 0;
do {
    v8[128] = 0;
    v21++;
} while (v21 < 7)
const v27 = new BigInt64Array();
switch (0) {
    case v27:
        break;
}
