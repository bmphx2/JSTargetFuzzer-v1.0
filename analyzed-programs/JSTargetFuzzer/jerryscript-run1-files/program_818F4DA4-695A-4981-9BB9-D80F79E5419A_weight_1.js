function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,F0];
const v7 = [v3,v6,F0,v4];
async function f9(a10, a11, a12) {
    new ArrayBuffer(-4294967296);
    return ArrayBuffer;
}
const v15 = [v7];
const v16 = [v7,v15,v15,v5];
const v17 = [v6];
const v18 = [v5];
function f19(a20, a21, a22, a23) {
    const o28 = {
        m(a25, a26, a27) {
            v5.d = a26;
            a27[-2] /= a20;
            a23.__proto__ = a23;
            return a25;
        },
        "h": a23,
        "d": v15,
        "e": v7,
        ...a22,
        1119203754: v15,
        "b": a22,
    };
    return o28;
}
for (const v29 of v16) {
    f19(v29, v4, F0, v18);
}
f19(v17, v6, v4, v17);
const v35 = f19(v15, v15, v4, v17);
f19(v35, v6, v35, v15);
for (let [v38,v39] of "resizable") {
}
