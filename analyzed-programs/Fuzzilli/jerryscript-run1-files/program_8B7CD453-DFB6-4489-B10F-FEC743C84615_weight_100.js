class C6 {
    static [1.6900095077272574e+308] = "p";
    static ["boolean"] = "symbol";
    static ["symbol"] = -2.0;
    valueOf(a8, a9, a10, a11) {
        try { new a10(a8, a8, a8, a9, a10); } catch (e) {}
        return 1.6900095077272574e+308;
        const v14 = [];
        Reflect.apply(a11.trimLeft, a10, v14);
        return "boolean";
    }
}
new C6();
const v18 = new C6();
new C6();
new WeakSet();
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a38;
    this.a = a37;
    this.d = a36;
}
const v39 = new F34(10749n, -1499224921n, "toPrimitive");
const v40 = new F34(8n, 718485249n, "53417");
const v41 = new F34(-1499224921n, 10749n, "toPrimitive");
const v42 = v40.__proto__;
let v43;
try { v43 = v41.p(-1499224921n, 718485249n, v42, 4096, 718485249n); } catch (e) {}
const o51 = {
    [-1499224921n]: "53417",
    [10749n](a45, a46, a47) {
        for (let v48 = 0; v48 < 32; v48++) {
            a45["p" + v48] = v48;
        }
        return C6;
    },
    367443060: v43,
    "d": 536870889,
};
new BigInt64Array(3975);
new Int32Array(1024);
let v59 = 0;
do {
    v18.c = WeakSet;
    try { v18.valueOf(v39, "toPrimitive", 536870889, BigInt64Array, v59); } catch (e) {}
    v59++;
} while (v59 < 7)
new Uint8Array(2);
