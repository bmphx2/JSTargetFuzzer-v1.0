function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870912;
    this.h = 536870912;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const o10 = {
    set a(a9) {
    },
};
for (let v11 = 0; v11 < 5; v11++) {
    o10.a;
}
[-15n,v4,v5,-15n];
[257n,F0,F0,v5,-15n];
[F0];
const v18 = Uint32Array.__proto__;
const v19 = [2.0,-Infinity,-54545.83767271729,-3.0,266795.13323978847,-1.7976931348623157e+308,125522.99740415509,0.27235185992394717,-6.421621912778832];
try { v19.every(v18); } catch (e) {}
