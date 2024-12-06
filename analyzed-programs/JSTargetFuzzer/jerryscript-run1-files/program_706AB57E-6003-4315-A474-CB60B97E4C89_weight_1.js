function f3(a4, a5) {
    const o20 = {
        __proto__: a4,
        toString(a7, a8) {
            try { a7(this, a5, -1000000.0); } catch (e) {}
            super.e = this.f;
            new BigUint64Array(4);
            new Float32Array(8);
            new Float32Array(-11);
            return a4;
        },
    };
    return o20;
}
f3(-1000000.0, 0.0);
const v22 = f3(0.0, -6.074496413412623e+307);
f3(v22, 0.0);
const v32 = new Float64Array(v22, 0.0, -418581.48644607223);
v32 != "-199008413";
