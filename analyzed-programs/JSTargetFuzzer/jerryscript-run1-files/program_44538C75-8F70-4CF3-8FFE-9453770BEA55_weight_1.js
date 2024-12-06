function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2;
    this.b = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3];
[F0,[v3,v4,F0,v6,v4],v5];
function f9() {
    return v6;
}
const v18 = new Date();
v18.setUTCMilliseconds();
let v20;
try {
const t0 = 1;
v20 = t0(1, 1);
} catch (e) {}
(1000n).toString(v20);
