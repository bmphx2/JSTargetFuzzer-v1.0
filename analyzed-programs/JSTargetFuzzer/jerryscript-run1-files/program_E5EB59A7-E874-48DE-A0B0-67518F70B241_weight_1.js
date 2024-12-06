function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this >>> 1000;
    for (let v4 = 0; v4 < 32; v4++) {
        this["p" + v4] = v4;
    }
    this.c = 1000;
    this.d = 1000;
    this.g = 1000;
    let v7 = "1073741823";
    "toPrimitive" - F0;
    -v7;
    v7++;
    ~v7;
}
const v18 = new F0();
new F0();
new F0();
let v22 = Float32Array;
const v23 = new v22(227);
let v24 = 256;
[v24,v22,v24] = v23;
v22 >>= 227;
!F0;
+-407826956;
227 & v18;
new BigUint64Array(v24);
new Uint8Array(16);
([8.048710887091932,-2.2250738585072014e-308,2.220446049250313e-16,-1000.0,6.828082790414911,-Infinity,Infinity,1.6880399539526805e+308,Infinity]).copyWithin();
