function f0() {
    const o12 = {
        "d": "unicode",
        "e": 0.00946303063553966,
        get b() {
            let v4 = this;
            let v5;
            try { v5 = v4("unicode", "unicode"); } catch (e) {}
            v4 |= v5;
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = 0.00946303063553966;
                this.b = v4;
                this.g = "b";
            }
            const v9 = new F6("unicode");
            new F6(v9);
            const v11 = new F6(0.00946303063553966);
            return v11;
        },
    };
    return o12;
}
f0();
f0();
f0();
new Int16Array(6);
new BigUint64Array(240);
new Uint32Array(128);
const v30 = new BigInt64Array(512);
const v33 = new Float64Array(16);
new Int8Array(15);
v33.buffer /= 16;
for (const v43 of v30) {
    new Float64Array(5);
    new Float64Array(2);
    new Float32Array(2983);
}
