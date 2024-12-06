function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = this;
    this.c = v4;
}
const v9 = new F6(v4);
new F6(v3);
const v11 = new F6(v5);
const v12 = [F6,v11,F0,v9,v3];
const v13 = [v3,v11,v3,v11];
[F0];
[v5,v11];
[v13,v3,[v12,v5,v4,v11]];
Math.round(-2.220446049250313e-16);
