class C9 {
    static 1060994991;
    valueOf(a11, a12, a13) {
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
        return o24;
    }
}
const v25 = new C9();
new C9();
new C9();
let v29 = -2147483647;
v25 || v25;
const v32 = v25 % v29;
v32 & v29;
const v37 = +v25;
v37 & v32;
const v39 = v32 || v29;
v39 ^ v39;
Math.exp(v37);
v29++;
