function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 10;
    this.f = 10;
    this.e = 10;
}
new F0(F0);
new F0();
new F0();
new Map();
let v14 = -513909666n;
v14 ^= 6n;
