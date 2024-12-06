function f0() {
    let v2 = "OxV";
    const o10 = {
        __proto__: "b",
        "c": "b",
        m(a5) {
            v2 = "b";
            !this;
            return -9223372036854775808;
        },
    };
    return o10;
}
const v11 = f0();
const v12 = f0(f0);
f0(v12, f0, f0);
const v14 = [1000000.0,-0.0,9.646091734211194e+307,-Infinity,-1.0];
const v15 = [NaN,4.251757334590243,-Infinity,2.2250738585072014e-308,-1.1051582609814894e+307,-6.674619478916838e+307,992132.9268217571,2.220446049250313e-16,3.0];
let v16 = 0;
while (v16 < 2) {
    try { v11.m(v11, v14); } catch (e) {}
    v16++;
}
const v24 = [2.2250738585072014e-308,1e-15,NaN,Infinity,-0.7421686905009199,-2.220446049250313e-16,8.676262719040388,2.220446049250313e-16,897.2807035745054,0.0];
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
new F25(v15, v11, v15, v11);
const v32 = new F25(v24, v12, v24, f0);
new F25(v14, v32, v14, v32);
class C34 {
}
const v35 = new C34();
Symbol.match = v35[v32.match];
