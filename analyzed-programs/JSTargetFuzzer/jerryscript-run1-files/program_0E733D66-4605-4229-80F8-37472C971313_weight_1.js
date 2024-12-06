function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = "toString";
    this.h = "268435456";
}
new F6(-13n, -13n, "AqM");
const v12 = new F6(-2147483648n, 127n, "AqM");
new F6(-13n, -2147483648n, "toString");
new Uint32Array(9);
new Float64Array(10);
new BigInt64Array(11);
[907.9122980495306,-409964.05748484307,1.0];
[-1000000000000.0];
const v28 = [-369609.8766072877,2.220446049250313e-16,-774516.0696689986];
let v29 = 0;
while (v29 < 4) {
    v28.e = "toString";
    const v32 = v12.h;
    try { v32(); } catch (e) {}
    v28[v32];
    v29++;
}
