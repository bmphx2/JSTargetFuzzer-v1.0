function f0() {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a5;
        this <= "MIN_SAFE_INTEGER";
        a5 = this;
        const v7 = ("MIN_SAFE_INTEGER").__proto__;
        function f8() {
            return v7;
        }
        const t10 = -12;
        t10.d = a5;
    }
    new F3(f0);
    const v10 = new F3("MIN_SAFE_INTEGER");
    new F3(-12);
    const o19 = {
        "e": "MIN_SAFE_INTEGER",
        "h": v10,
        valueOf(a14, a15) {
            for (let v16 = 0; v16 < 32; v16++) {
                a14["p" + v16] = v16;
            }
            return this;
        },
    };
    return o19;
}
const v20 = f0();
f0(v20, v20, v20);
f0();
const v25 = new Float32Array(15);
new Uint32Array(62, Float32Array, Uint32Array, Uint32Array);
new BigUint64Array(3, v25, Float32Array);
Math.trunc(+-1632443971);
