function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483649;
    this.f = 2147483649;
    this.c = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8) {
        super();
        try {
            super.filter(this);
        } catch(e10) {
        }
    }
    get b() {
        let v11 = this;
        v4.b = v11;
        try {
            super.clear(v3, F0, v11);
        } catch(e13) {
        }
        v11[141];
        v11 = v5;
        return v3;
    }
}
const v15 = new C6(v4);
const v16 = new C6(C6);
const v17 = new C6(v4);
function f18(a19, a20, a21, a22) {
    const o36 = {
        [v3](a24, a25, a26) {
            super.f = a24;
            new Float64Array(127);
            new Uint8Array(7);
            const v35 = new Uint16Array(2491);
            return v35;
        },
        "e": a20,
        "h": a20,
        __proto__: v17,
        [a20]: f18,
        [-2]: a21,
    };
    return o36;
}
f18(v16, f18(v5, v3, v4, v3), v17, v3);
f18(v3, v15, v16, F0);
new Int32Array(129);
new Uint32Array(64);
new Uint16Array(16);
const v49 = [6,9,-1089835214,268435441,-25858,-454143031,-1];
const v50 = [4,1038512201,65537,4096,8,1073741823,-1073741824];
const o51 = {
};
const v53 = Math.log10(Math);
v50[0] = v49;
o51[0] %= v53;
