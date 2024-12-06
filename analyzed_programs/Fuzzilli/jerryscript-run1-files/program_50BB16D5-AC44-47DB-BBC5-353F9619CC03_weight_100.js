const v3 = /[\1111]/gmid;
const v4 = /(?:ab|cde)A\u0034C*/ugmd;
const v5 = /ofoo[z]*/gs;
class C6 {
    f = 40791;
    constructor(a8, a9) {
        let v7 = this;
        v7 %= v7;
        for (let v10 = 0; v10 < 32; v10++) {
            a9["p" + v10] = v10;
        }
    }
    static e = 40791;
    #h;
    #f;
}
const v13 = new C6(43634, v3);
const v14 = new C6(8, v13);
new C6(43634, 43634);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = C6;
}
const v22 = new F16(8, v3, v14, v5);
new F16(8, v5, 40791, v5);
const v24 = new F16(40791, v4, v3, v5);
function f25(a26, a27) {
    const o28 = {
        "a": 40791,
    };
    return o28;
}
f25(v24, 8);
const v30 = f25(v24, F16);
f25(v22, v5);
v22[8] = v30;
