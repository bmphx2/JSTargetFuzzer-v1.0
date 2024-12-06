class C3 {
    static valueOf(a5) {
        a5.f = this >>> "-1382672495";
        const t3 = "-1382672495";
        t3[a5] = this;
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return "-1382672495";
    }
}
const v18 = new C3();
new C3();
v18[255];
C3.length = 0;
new C3();
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a31;
    this.d = a33;
}
const v34 = new F29(C3, v18, C3);
new F29(255, "-1382672495", v34);
new F29(v34, C3, v34);
const v38 = new Float64Array();
v38.reduceRight(Array, undefined);
