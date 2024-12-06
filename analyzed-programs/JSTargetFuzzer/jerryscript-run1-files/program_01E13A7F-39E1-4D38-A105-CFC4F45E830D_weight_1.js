function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 268435456;
}
new F0();
new F0();
new F0();
let v13 = 58354n;
v13 <<= v13;
v13 | 268435439n;
