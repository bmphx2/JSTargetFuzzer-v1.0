function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 6;
    this.d = 6;
    this.f = 6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
for (const v12 in "10000") {
    v5.f /= -48849;
}
const v13 = v4[3071012752];
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -48849;
}
new F14(-11, v13, "10000", v4);
new F14(-11, "1794586794", "1794586794", v4);
new F14(-11, "GIi", "10000", v3);
function f23(a24, a25, a26) {
    const o33 = {
        [v3]: a26,
        get b() {
            const v28 = ("1794586794").__proto__;
            let v29;
            try { v29 = v28(); } catch (e) {}
            super.c = v29;
            return "10000";
        },
        "d": a24,
        150: -48849,
        ...v3,
        "f": a26,
        "e": -48849,
    };
    return o33;
}
const v34 = f23(-48849, v4, -48849);
const v35 = f23(-48849, F0, -11);
const v36 = f23(-48849, v4, -11);
function f37(a38, a39, a40, a41) {
    const o60 = {
        "d": f23,
        ["GIi"](a43, a44, a45, a46) {
            a43 ** this;
            let v48 = this.d;
            const v50 = super.d;
            this.c;
            [f23,a40,v48] = v50;
            -11 / v50;
            for (let v53 = 0; v53 < 32; v53++) {
                let v54 = 3640;
                v13.length = v54;
                [v54,,v48,v48] = a44;
                this["p" + v53] = v53;
            }
            return a46;
        },
    };
    return o60;
}
f37(v35, "10000", v4, v34);
const v62 = f37(v36, f23, v3, v35);
f37(v35, f23, v62, v62);
for (let v65 = 0; v65 < 5; v65++) {
    Object.keys(Object);
    Object[835951012] = Map;
}
