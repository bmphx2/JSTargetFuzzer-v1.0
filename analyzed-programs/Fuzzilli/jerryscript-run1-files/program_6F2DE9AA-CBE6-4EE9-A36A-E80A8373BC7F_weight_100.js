function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 0;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
const v6 = [-11,-15,536870912,-1207241947,353773,-1379659882,14,65535,-41839,4096];
const v7 = [-9223372036854775807,207298782,4,38917];
const v8 = [561838130,395605014,268435456,268435456,4294967296,-12648];
class C9 extends F0 {
    static [v3];
    static p(a11, a12, a13) {
        super.c ||= this;
        v7 && v8;
        v5 != a11;
        /Ttue?/gmsid;
        /xyz?/vyid;
        return /x(?!\1(a\1)\1)\1/vygmi;
    }
    constructor(a20, a21) {
        super();
        a21.length >>= a20;
        const o22 = {
        };
        new Proxy(v7, o22);
    }
}
const v25 = new C9(v4, v8);
let v26 = new C9(v25, v7);
const v27 = new C9(v26, v7);
function f28(a29, a30, a31) {
    const o40 = {
        [v7]: a31,
        m(a33, a34, a35) {
            function f36() {
                return C9;
            }
            v26[1073741824];
            [f36,a33,v26] = v6;
            F0 ** C9;
            return delete a35?.c;
        },
        "h": F0,
        "b": v7,
        "d": v27,
        "a": a29,
    };
    return o40;
}
f28(v25, v3, v26);
f28(v25, v3, C9);
f28(v5, v4, v7);
for (let v44 = 0; v44 < 32; v44++) {
    v25["p" + v44] = v44;
}
v4 = v5;
v5.toString = f28;
v27 - v5;
try { v4["atan2"](); } catch (e) {}
