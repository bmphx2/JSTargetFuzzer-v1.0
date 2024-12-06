function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 4;
    this.h = 4;
    this.f = 4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = /h(ab)uN/ugsi;
const v7 = /aO[F(?: foo )]+/usd;
const v8 = /ONVR/uyi;
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.h = a14;
}
const v15 = new F9(v8, v6, v3, v5);
const v16 = new F9(v8, v15, v4, v15);
new F9(v7, v16, v3, v4);
let v18 = 12;
let v21;
try { v21 = v6(); } catch (e) {}
v18 ||= 12;
for (const v25 of v21) {
    if (v25 === v25) {
    } else {
    }
}
