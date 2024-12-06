function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
    this.e = a5;
}
const v6 = new F3(7n);
const v7 = new F3(v6);
new F3(7n);
function f15(a16, a17, a18, a19) {
    const o37 = {
        "c": -15,
        1746118493: a16,
        "d": 0,
        valueOf(a21, a22, a23) {
            try { a21(51441n, v6, 0, a16); } catch (e) {}
            [-2.803402762245913e+307,-1e-15,0.7772561716498756,179935.55616862117,-5.685081609644805e+307,NaN,420193.54465713026];
            [-1.6058999281478461e+308,57252.74015042721,2.586698709175309];
            [2.2250738585072014e-308,-5.0,5.0,-2.220446049250313e-16,1.0,334.5911796880396,-125119.48804460431];
            v7[Symbol.isConcatSpreadable] = -7;
            const o32 = {
                "maxByteLength": 4096,
            };
            const v34 = new ArrayBuffer(208, o32);
            const v36 = new Uint8Array(v34);
            return v36;
        },
    };
    return o37;
}
f15(-9007199254740990, 51441n, -9007199254740990, -15);
f15(4294967297, 7n, 0, 4294967297);
f15(-15, -9223372036854775807n, 2145306047, -15);
Number(f15);
