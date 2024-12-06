function f0() {
    let v1 = "lalZG";
    const o9 = {
        set e(a5) {
            v1 += (a5 = this);
            this.c = a5;
            const v6 = a5[236];
            try {
                super.p(v6, v1, a5, 1.6079618627256653e+308, -344228.2889490491);
            } catch(e8) {
            }
        },
        "a": -344228.2889490491,
        "e": 1.6079618627256653e+308,
        "h": 1.6079618627256653e+308,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v10;
    this.c = a15;
}
const v17 = new F13(v11, v12);
const v18 = new F13(v10, v10);
/[z-\d]/gys;
/R4lRM(?: foo )Tq\u{12345}\u{23456}+/isu;
const v21 = new F13(v12, v12);
function f22() {
    return v12;
}
function f23(a24, a25) {
    const o37 = {
        [a24]: a24,
        ...v18,
        [v17](a27, a28) {
            new f22();
            const v30 = a28[-1];
            Math.clz32(v30);
            const v34 = -v21;
            v34 && v21;
            v34 >> v30;
            return v30;
        },
    };
    return o37;
}
f23(v12, v10);
f23(v11, v11);
f23(v12, v11);
async function f41(a42, a43) {
    return 2131433545 instanceof 2131433545;
}
f41();
