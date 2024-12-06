function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -16;
}
new F0();
new F0();
new F0();
const v11 = new Array(129);
new Set();
let v17 = 0;
while (v17 < 5) {
    const v20 = v11.__proto__;
    v11.valueOf = Array;
    v11[13] = v20;
    v20?.c;
    v17++;
}
