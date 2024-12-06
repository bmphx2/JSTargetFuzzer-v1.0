function f0() {
}
let v1 = "-37499";
class C4 {
    o(a6) {
        ({"length":v1,} = "fz");
        function F7(a9, a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = a12;
            const t9 = "iterator";
            t9[2147483647] = "iterator";
            this[a12] >>>= a6;
            function f14() {
                return C4;
            }
        }
        new F7("iterator", "fz", "fz", f0);
        new F7("fz", this, a6, F7);
        const v17 = new F7(a6, a6, a6, f0);
        return v17;
    }
}
let v18 = new C4();
const v19 = new C4();
let v20 = new C4();
f0(v1, 9, 9, v1, C4);
v18 = v19;
v18.a = "fz";
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
let v35 = Uint16Array;
new v35(9);
-1219928860n <= [9,-1,5];
new Int8Array(129);
({"h":v35,...v20} = v1);
C4[512] = Int8Array;
new Int16Array(1795);
function F58(a60, a61, a62, a63) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a63;
    this.f = -4294967296;
}
new F58(-4294967296, 5n, "global", "-16");
new F58(-4294967296, -7n, "-16", "global");
const v66 = new F58(-4294967296, 5n, "global", "global");
if ("function" == v66) {
} else {
    function F71(a73, a74, a75) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a75;
    }
    const v76 = new F71(F71, "global", "function");
    new F71(v76, "global", "function");
    new F71(v76, "global", "function");
}
