function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.f = -2147483647;
    this.e = -2147483647;
}
new F0();
new F0();
new F0();
new Set();
new Map();
new Int32Array(13);
new Uint32Array(10000);
new BigInt64Array(12);
new Int32Array(13);
let v29 = Int16Array;
new v29(184);
const v33 = new Float64Array(6);
[v29] = v33;
const o50 = {
    m(a42, a43, a44, a45) {
        if (a43) {
            4001 ^ -a43;
        } else {
            for (let v49 = 0; v49 < 5; v49++) {
            }
        }
        return a45;
    },
};
const v51 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
const v52 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v54 = 0; v54 < 32; v54++) {
    v51["p" + v54] = v54;
}
v51[9223372036854775807];
let {"a":v58,"length":v59,} = v52;
const v60 = Symbol.iterator;
const o69 = {
    [v60]() {
        let v62 = 10;
        const o68 = {
            next() {
                v62--;
                const v66 = v62 == 0;
                const o67 = {
                    "done": v66,
                    "value": v62,
                };
                return this;
            },
        };
        return v60;
    },
};
