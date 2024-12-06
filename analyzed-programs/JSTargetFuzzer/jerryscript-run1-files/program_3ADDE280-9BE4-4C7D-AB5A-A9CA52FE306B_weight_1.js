function f0() {
    let v2 = 0.0;
    const o14 = {
        ..."boolean",
        9: "boolean",
        "e": "boolean",
        "a": v2,
        [v2]: "boolean",
        p(a5, a6) {
            const v7 = "boolean" < a5;
            if (v7) {
                v2 += a5;
                try { a5(43980, v7); } catch (e) {}
            } else {
                const t14 = "boolean";
                t14.length -= v2;
                let v9 = 0;
                do {
                    v9++;
                } while (v9 < 2)
            }
            return this;
        },
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
new Date();
function f20() {
    return v15;
}
const v21 = [f0,v15,Date,Date];
const v22 = [f0,v21,v21,v21,v17];
const v23 = [v16,v22,f20,f0,v15];
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v15;
}
new F24(v16, v23);
new F24(v16, v22);
new F24(v16, v22);
print();
f0();
v16.e;
const v38 = 1.7976931348623157e+308 & v23;
Math.sin(v38);
Math.exp(v38);
v38 + 1073741825;
1073741825 || 1.7976931348623157e+308;
