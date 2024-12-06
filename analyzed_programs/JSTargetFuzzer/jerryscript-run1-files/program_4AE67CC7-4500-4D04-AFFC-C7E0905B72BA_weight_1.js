function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 257;
    t2.f = 257;
}
const v3 = new F0();
const v4 = new F0();
new F0();
with (v3) {
    f = -37066;
}
new Int16Array();
const v20 = (31559).toString;
try { v20(); } catch (e) {}
for (let v22 = 0; v22 < 32; v22++) {
    const t15 = "boolean";
    t15[v4 + v22] = v22;
}
