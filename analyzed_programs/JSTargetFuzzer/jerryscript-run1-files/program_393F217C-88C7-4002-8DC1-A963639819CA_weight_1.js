function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -48227587;
    this.e = -48227587;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v5;
}
const v10 = new F6(F6, v5);
const v11 = new F6(v10, v10);
const v12 = new F6(v5, v4);
const v13 = [v12];
const v14 = [v13,v12];
[v12,F0,v14,v14];
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a20;
    this.f = a19;
    this.c = a18;
}
new F16(v14, v5, F0);
new F16(v14, v5, v4);
const v23 = new F16(v13, v5, v3);
v14[v13] >>= v23;
v14[v4] = v11;
