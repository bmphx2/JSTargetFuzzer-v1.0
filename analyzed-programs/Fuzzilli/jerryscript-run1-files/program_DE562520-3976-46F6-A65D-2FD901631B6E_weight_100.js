function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
    this.c = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.a = -9223372036854775808;
    this.e = a13;
}
const v14 = new F9(14, v4, v4);
const v15 = new F9(9, v3, v4);
const v16 = new F9(14, v5, v4);
class C17 {
    constructor(a19, a20, a21) {
        v4[13] = a20;
    }
    o(a26, a27, a28) {
        super.d = v15;
        14 * v5;
        a27 = F9;
        return 9;
    }
    static f = F0;
    set c(a31) {
        let v30 = this;
        ({"d":v30,} = v30);
        try {
            super.valueOf(v30);
        } catch(e33) {
        }
    }
}
new C17(v14, v14, v5);
const v35 = new C17(v16, v16, v3);
new C17(v14, v15, v4);
let v38 = 56621;
typeof v35 === "string";
new WeakSet();
let v48 = -1000000000000.0;
let v49 = 0.0;
const v51 = [-1.5462188148790736e+308,v48,-866.8557403717873,v38];
const v52 = [-57944,v51,-8,-1.5462188148790736e+308];
let v53 = [v51,v52];
const v55 = Symbol.isConcatSpreadable;
v53[v55] = 1000.0;
v52[8] <<= -1.5462188148790736e+308;
({"b":v48,"h":v49,"length":v53,} = v53);
v53 * -8;
({"description":v38,...v48} = v55);
try { v49(v51, v55, v53, v51, -57944); } catch (e) {}
new BigInt64Array(129);
new Float64Array(175);
new Int8Array(7);
