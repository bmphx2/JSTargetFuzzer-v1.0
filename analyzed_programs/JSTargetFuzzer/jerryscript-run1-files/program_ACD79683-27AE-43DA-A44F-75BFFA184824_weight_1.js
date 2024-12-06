function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    o(a8, a9) {
        a8[a8];
        v3[7] = a8;
        return "BVME";
    }
    #m(a15, a16) {
        this[1];
        return v5;
    }
}
const v21 = new C6();
const v22 = new C6();
const v23 = new C6();
class C24 extends C6 {
    static g;
    static [v3] = v3;
    p(a26, a27) {
        let v25 = this;
        super.g = F0;
        super.g = v23;
        v25 = a27;
        function F28(a30, a31, a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a30;
        }
        const v34 = new F28(a27, v3, v4, a26);
        const v35 = new F28(v23, a27, v22, a27);
        new F28(F0, v35, v21, a27);
        return v34;
    }
}
new C24();
const v38 = new C24();
new C24();
class C40 {
    536870887 = v23;
    static set c(a42) {
        for (let v43 = 0; v43 < 32; v43++) {
            v3["p" + v43] = v43;
        }
    }
    #h;
    static [v21] = v5;
    1073741825;
    [v5] = C24;
    #g;
}
const v46 = new C40();
const v47 = new C40();
const v48 = new C40();
function f49(a50, a51, a52) {
    const o53 = {
        6: v38,
        [C24]: v46,
        "a": a50,
        "b": a51,
        [v47]: F0,
    };
    return o53;
}
f49(v47, v21, v21);
f49(v22, v48, v38);
f49(v48, v21, v38);
