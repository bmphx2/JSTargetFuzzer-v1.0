function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = true;
    this.h = true;
    this.b = true;
}
const v3 = new F1();
new F1();
const v5 = new F1();
const v7 = [F1,[v3],v5];
[v7,true,F1,v7,v5];
new WeakSet();
let v14 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v15 = [6,17590];
[-658853788,-256];
const v22 = new BigUint64Array(12);
const v25 = new Uint32Array(v15);
v7["indexOf"]("indexOf", 12);
new Uint8Array(16);
let v36;
try { v36 = v14(-4294967295); } catch (e) {}
({"buffer":v14,"d":v36,"g":v36,...v36} = v22);
const o37 = {
};
new Proxy(v25, o37);
const v43 = o37.toPrimitive;
const o57 = {
    [v43]() {
        try {
            super.getUint16();
            "indexOf" > "reverse";
            new Uint8Array(9);
            new Int32Array(129);
            new Uint8Array(1);
        } catch(e56) {
        }
        return this;
    },
};
function F64(a66, a67, a68, a69) {
    if (!new.target) { throw 'must be called with new'; }
    a68.d = a69;
    this.f = a66;
}
const v70 = new F64(-4294967296, 5n, "-16", "-16");
new F64(-1, -7n, "-16", "global");
const v72 = new F64(-4294967296, 5n, "global", "global");
"-16" == v72;
if (-1) {
} else {
    function F77(a79, a80, a81) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a81;
    }
    const v82 = new F77(F77, v70, "function");
    const t55 = -1;
    new t55(v82, "global", "function");
    new F77(v82, "global", "-16");
}
