class C3 {
    static {
        let v5;
        try { v5 = new this(this, this, "t"); } catch (e) {}
        let v6;
        try { v6 = v5.p(3, "t", "t"); } catch (e) {}
        v6[256] = v6?.[8];
    }
    #a = "t";
    static #p(a9, a10) {
        try {
            a9.#p(this, a10, 3, a9, a9);
        } catch(e12) {
        }
        a9 >>= a10;
        return "t";
    }
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v13;
    this.g = v14;
}
const v20 = new F16(C3, v14);
new F16(v13, v20);
new F16(v14, v15);
new BigInt64Array(7);
new Uint8Array(255);
new Int16Array(2124);
v13[v15];
!v14;
Math.sinh(1.0);
Math.sinh(v14 && v14);
Math.log10(v14);
~-9223372036854775807;
