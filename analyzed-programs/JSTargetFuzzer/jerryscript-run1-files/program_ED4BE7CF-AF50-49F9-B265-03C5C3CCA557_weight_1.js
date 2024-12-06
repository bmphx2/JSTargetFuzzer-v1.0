function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9007199254740990;
}
new F0();
new F0();
new F0();
new Uint32Array(906);
const v11 = new Uint32Array(128);
new Uint16Array(4);
let v16 = Int8Array;
const v17 = new v16(107);
let v18 = 0;
do {
    v11.buffer <<= 128;
    v18++;
} while (v18 < 2)
for (let v22 = 0; v22 < 5; v22++) {
    v17.indexOf(v22);
}
v16 = v11[1];
