const v2 = new Uint8Array(255);
const v5 = new Int16Array(16);
v2.c = v5;
v2[16] = 255;
const v6 = v5[1];
(v2 ** v2) & v5;
v6[1] = 3;
new BigUint64Array(111);
new BigInt64Array(4);
new Int32Array(13);
new Int32Array(0);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a28;
    this.e = v2;
    this.a = 16;
}
new F24(255, Int32Array, 16, 0);
new F24(0, 16, 255, 0);
new F24(0, Int16Array, 255, 0);
let v33 = 41365n;
-(v33--);
