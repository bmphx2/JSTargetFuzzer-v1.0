function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = false;
    this.b = false;
    this.g = false;
}
new F1();
const v4 = new F1();
new F1();
new Uint16Array(2);
new Int8Array(128);
new Float32Array(317);
let v17 = 0;
do {
    v4[128] = 0;
    v17++;
} while (v17 < 7)
const v23 = new BigInt64Array();
switch (0) {
    case v23:
        break;
}
