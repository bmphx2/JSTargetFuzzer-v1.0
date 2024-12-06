function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -16;
    this.f = -16;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
let v9 = new Int32Array(1777);
const v12 = new Int8Array(18);
let v14 = Int32Array;
const v15 = new v14(256);
v4[1073741824] = v9;
new f6();
let v20 = 0;
do {
    v12[v14] = v15;
    v14 %= v14;
    delete v5[-128n];
    v9 *= v9;
    v20++;
} while (v20 < 5)
