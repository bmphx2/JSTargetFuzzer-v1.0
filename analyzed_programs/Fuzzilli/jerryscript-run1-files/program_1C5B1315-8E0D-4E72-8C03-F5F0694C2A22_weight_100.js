class C3 {
    m(a5) {
        ("string").__proto__;
        const t2 = "string";
        t2[Symbol.match] = this;
        return this;
    }
    c = "string";
    ["string"] = "string";
}
const v10 = new C3();
const v11 = new C3();
new C3();
const v16 = new C3();
C3.h >>= 42836;
let v17;
try { v17 = C3.setUTCMinutes(4294967297, NaN, 4294967297, 42836, v16); } catch (e) {}
v16[9] ^= 4294967297;
v11[2147483648n] = NaN;
v10[v17];
v10[Symbol.iterator];
