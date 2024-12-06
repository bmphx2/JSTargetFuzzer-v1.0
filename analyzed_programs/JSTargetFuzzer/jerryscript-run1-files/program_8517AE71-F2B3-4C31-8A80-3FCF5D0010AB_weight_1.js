function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3;
    F0.d = 3;
    F0.g = 3;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = F0;
    this.b = a12;
    this.c = 16;
}
new F9(-128, v4);
new F9(F0, v3);
new F9(-128, v4);
const v18 = new Int8Array(231);
for (let v19 = 0; v19 < 5; v19++) {
    v18["subarray"]("subarray", v19);
}
