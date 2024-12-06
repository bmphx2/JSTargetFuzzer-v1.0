function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = "ql";
t3[91] = F1;
new Int32Array(6);
new BigInt64Array(2370);
new BigUint64Array(129);
new Uint16Array(256);
new BigInt64Array(10);
new Uint8ClampedArray(64);
const v22 = new WeakSet();
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = WeakSet;
}
new F24(6, 6, 64, v22);
new F24(64, 2370, 64, v22);
new F24(64, 2370, 64, 2370);
const v33 = [];
v33[252] = v33;
v33.shift();
