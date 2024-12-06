class C3 {
    static m(a5, a6, a7) {
    }
}
let v8 = new C3();
let v9;
try { v9 = C3(); } catch (e) {}
let v10;
try { v10 = v9(); } catch (e) {}
v8 -= v10;
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const t12 = "o2";
    t12.f = a17;
    this.e = a18;
    this.g = a16;
}
new F14(3.070433511055319e+307, 3.070433511055319e+307, 3.0);
const v20 = new F14(3.070433511055319e+307, 3.0, F14);
new F14(3.070433511055319e+307, v20, 0.47381475536575046);
const v27 = new Int32Array(7);
const v33 = ("Zp")[-9223372036854775807 >= 78];
new Float32Array(13);
new BigInt64Array(255);
const o43 = {
    ..."1131340342",
};
let v44 = BigInt64Array;
v44 <<= v44;
new Int32Array(7, 13);
const o49 = {
    "a": v27,
    "d": v33,
    "c": v8,
    "b": -216427537,
};
