function f0() {
}
const v5 = [0.0,0.0,0.0];
const v6 = [0.0,0.0];
const v7 = [v6,v6];
const v8 = /j(?:ab)|cdeC(?:foo)/vygmsi;
const v9 = /foo(?<!bar)baz+/ug;
const v10 = /\w|\d/uygmd;
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
}
const v15 = new F11(v9, f0);
const v16 = new F11(v10, v10);
const v17 = new F11(v8, 0.0);
const v18 = F11 * v7;
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a22;
    this.h = v17;
    this.g = a23;
}
new F19(4.0, v5, v15);
new F19(v18, v5, v15);
const v26 = new F19(0.0, v7, v16);
try { new F11(...v26, false, v26, ...v5, v26); } catch (e) {}
