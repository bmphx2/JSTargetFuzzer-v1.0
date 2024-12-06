const v5 = new Uint32Array(3683);
const v8 = new BigUint64Array(129);
const v11 = new Int16Array(1752);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
}
new F12(1752, 3683, v11);
new F12(-65536, 1752, v5);
const v19 = new F12(-65536, v8, BigUint64Array);
v5[129];
for (let v21 = 0; v21 < 32; v21++) {
    v19["p" + v21] = v21;
}
