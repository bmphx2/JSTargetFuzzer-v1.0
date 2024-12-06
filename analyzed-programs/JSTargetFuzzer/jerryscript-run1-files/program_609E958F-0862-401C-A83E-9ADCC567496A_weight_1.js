function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 257;
}
const v3 = new F0();
new F0();
new F0();
with (v3) {
    f = -37066;
}
const v19 = new Int16Array();
v19.toString;
try {
const t0 = 0;
t0();
} catch (e) {}
for (let v22 = 0; v22 < 32; v22++) {
    const t17 = "boolean";
    t17["p" + v22] = v22;
}
