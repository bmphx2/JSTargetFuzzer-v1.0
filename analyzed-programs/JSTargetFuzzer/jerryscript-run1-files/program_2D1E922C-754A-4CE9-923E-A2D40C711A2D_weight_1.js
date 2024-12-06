function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -13;
    this.isConcatSpreadable = -13;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v15 = new Int8Array(128, 9);
new Float64Array(175);
const v21 = new Uint16Array(11);
const v22 = [5.0];
v5[-1];
new Uint16Array(v5, 175, 128);
const v29 = new Set(v22);
for (let v30 = 0; v30 < 39; v30++) {
    v5 in v29;
}
v5[0] = 11;
v21.byteOffset;
v29.clear(v4, v15);
new F0();
delete v29[6];
for (let v37 = 0; v37 < 32; v37++) {
    v21["p" + v37] = v37;
}
new BigInt64Array(3886);
