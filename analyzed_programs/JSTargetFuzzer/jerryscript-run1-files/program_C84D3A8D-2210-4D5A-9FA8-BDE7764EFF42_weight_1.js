function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.b = a13;
}
new F9(-1.3776861953086572e+308, 4294967296, 536870889);
new F9(-1.3776861953086572e+308, 536870889, 4294967296);
new F9(4294967296, 45630, -1165392777);
let v17 = 409683548n;
v17 *= -(v17--);
