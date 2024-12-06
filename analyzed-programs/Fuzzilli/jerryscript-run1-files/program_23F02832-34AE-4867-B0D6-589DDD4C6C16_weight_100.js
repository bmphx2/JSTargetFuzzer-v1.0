function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 65535;
    t2.c = a5;
    const t4 = 65535;
    t4.b = 65535;
}
const v6 = new F3(2147483647);
const v7 = new F3(1);
const v8 = new F3(65535);
const v16 = [65535,v8];
const v17 = [2147483647,30600];
const v18 = [v17,v16,v8,1];
try { v7.apply(); } catch (e) {}
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F3;
    this.g = v7;
    this.f = v18;
}
const v24 = new F20(v17, v17);
new F20(v17, v7);
new F20(v16, v18);
const v30 = [30600];
const o32 = {
    "b": 30600,
    9: F20,
    ...v6,
    "f": -2147483649,
    ...v24,
    [v30]: 4294967296,
};
