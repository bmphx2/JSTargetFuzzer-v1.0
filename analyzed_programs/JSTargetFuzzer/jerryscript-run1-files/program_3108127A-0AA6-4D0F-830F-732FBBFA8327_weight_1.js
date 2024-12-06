function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65535;
    this.d = -65535;
    this.c = -65535;
}
new F0();
const v4 = new F0();
const v5 = new F0();
-Infinity;
const v13 = `
    v5.d ||= 4.0;
    try { v5.throw(3.0, 52504, v5); } catch (e) {}
`;
eval(v13);
v5.__proto__ = v4;
