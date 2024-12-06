class C3 {
    static a;
    constructor(a5) {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == 0;
                        const o14 = {
                            "done": v13,
                            "value": v9,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
    }
}
const v17 = new C3("VM0");
const v18 = new C3(v17);
const v19 = new C3(v18);
new BigInt64Array(146);
const v28 = new Uint32Array(10);
[v28,-4.0];
[BigInt64Array];
[v18,-4.0,v17,v18,2298];
let v34 = -256;
--v34;
v19 || Uint32Array;
+Uint32Array;
v19 && v19;
v34 && Uint32Array;
Math.cosh(v19);
new Float64Array(2298);
([-511653095,-486842909,6,4294967296,4096,5,-9007199254740990,-48530]).reverse();
