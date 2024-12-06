function f0() {
    const o10 = {
        m(a5) {
            function f6() {
                return this;
            }
            for (let v7 = 0; v7 < 32; v7++) {
                const t7 = "valueOf";
                t7["p" + v7] = v7;
            }
            return "Rz";
        },
        "f": "valueOf",
        "h": "Rz",
        __proto__: "valueOf",
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
f0();
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a16;
}
const v17 = new F14(v12);
const v18 = new F14(v12);
const v19 = new F14(v11);
const v20 = [127];
let v21 = [-1629538145,-1925069630,4294967296,512,16,-8,2147483648,9007199254740990];
const v22 = [1551297001,-268435456,-65536,1073741824,-1679871656,-20648];
class C23 {
    constructor(a25, a26, a27) {
        const t33 = a27 || v20;
        t33[a25] = -1451183840;
        new F14(v12);
        f0(...v22, -1451183840, F14, v12);
    }
    static b = v21;
    static [f0] = v12;
    static #c;
    static e;
    static c;
}
new C23(v18, v21, v21);
const v35 = new C23(v17, v20, v21);
const v36 = new C23(v18, v22, v21);
v19.c = v35;
v36.valueOf = f0;
let v37 = 0;
do {
    ({"a":v21,} = v35);
    for (let v38 = 0; v38 < 32; v38++) {
        v36["p" + v38] = v38;
    }
    v37++;
} while (v37 < 8)
