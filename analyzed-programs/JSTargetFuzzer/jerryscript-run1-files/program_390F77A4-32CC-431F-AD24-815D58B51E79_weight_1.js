function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 16;
}
new F0(F0, F0, F0);
const v4 = new F0();
new F0(F0, v4);
let v12 = 65537n;
v12 |= v12;
