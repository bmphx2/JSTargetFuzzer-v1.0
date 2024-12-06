new Float32Array(1);
new BigInt64Array(129);
new Uint8Array(1024);
new Map();
new Int32Array(6);
let v18 = Int16Array;
new v18(184);
class C22 {
    constructor(a24) {
        ("1073741824").match(a24);
    }
}
const v26 = new C22("1073741824");
new C22(v26);
new C22(v26);
const v30 = new Float64Array(65);
[v18] = v30;
const v38 = Symbol.iterator;
const o47 = {
    [v38]() {
        let v40 = 10;
        const o46 = {
            next() {
                v40--;
                const v44 = v40 == 0;
                const o45 = {
                    "done": v44,
                    "value": v40,
                };
                return o45;
            },
        };
        return o46;
    },
};
