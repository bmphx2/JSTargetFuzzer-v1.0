const v3 = [-821157534,-1,-49495,32162,1,-294503443,-11,536870889];
const v4 = [-65536,440994226];
const v5 = [-6,-348764020,268435439,16,257,-62427,59607,5,-65048,-4294967295];
const v6 = [8,v4,v3,v3,v4];
const v7 = [-53400,v3,-53400,v4,v5];
const v8 = [v7,v6,v7];
class C9 {
    b = v7;
    valueOf(a11, a12) {
        [] = v7;
        try {
        const t0 = 8;
        new t0(v8, v6, -9007199254740990);
        } catch (e) {}
        const v15 = Symbol.iterator;
        const o24 = {
            [v15]() {
                let v17 = 10;
                const o23 = {
                    next() {
                        v17--;
                        const v21 = v17 == 0;
                        const o22 = {
                            "done": v21,
                            "value": v17,
                        };
                        return o22;
                    },
                };
                return o23;
            },
        };
        return a12;
    }
}
const v25 = new C9();
new C9();
const v27 = new C9();
const v31 = Math.log10(9007199254740991);
const v32 = Math.asinh(-9007199254740990);
Math.atanh(2147483647);
v27.valueOf = v31;
v3[7] = -9007199254740990;
const v35 = [v32,v27,v8,v7];
Reflect.apply(v25.valueOf, v7, v35);
