function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a14;
    this.c = -394655842;
}
const v15 = new F9(-1264217678n, 1026737191, 64n, 1026737191);
const v16 = new F9(-1264217678n, 1026737191, 512, 64n);
const v17 = new F9(64n, 36286, v16, 48480);
new Uint8Array(64);
const v23 = new Int8Array(1103);
const v26 = new Float64Array(1945);
v23.valueOf = 512;
let v27 = 10;
for (; v27--;) {
    delete v15?.c;
    let v30;
    try { v30 = v17.valueOf(v23); } catch (e) {}
    v26.__proto__ = v30;
    try { v26.sort(v30); } catch (e) {}
}
