function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 824598340;
    this.c = 824598340;
    this.b = 824598340;
}
let v3 = new F0();
const v4 = new F0();
new F0();
for (const v12 in v4) {
    try { v4.m(); } catch (e) {}
}
v3 >>= v3;
v4[4];
delete v4[43];
function f19() {
    return F0;
}
