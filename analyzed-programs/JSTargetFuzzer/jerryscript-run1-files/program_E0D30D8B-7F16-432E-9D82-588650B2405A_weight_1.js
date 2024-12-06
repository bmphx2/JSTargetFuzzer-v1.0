function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 45181;
    this.b = 45181;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,F0,v5,F0];
const v7 = [v5,v6];
const v8 = [v5,v7,v5];
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
    this.f = F0;
}
new F9(v8, v4);
const v14 = new F9(v4, v4);
new F9(v14, v5);
const v17 = +(v7 ** v4);
v17[0] = v6;
v14.b >>= v17;
class C18 {
    [v6];
    e = F0;
}
new C18();
new C18();
new C18();
