function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -16;
    this.d = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v5;
}
new F6(v5, v3);
new F6(v3, v3);
new F6(v4, v4);
new Date();
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = [-1e-15,0.7580694445049295,-1e-15,2.0,711.7202283902409,9.441124899722187,810727.0420977925,0.11091303658528506];
    try { v21.find(a20); } catch (e) {}
}
new F18(F18);
