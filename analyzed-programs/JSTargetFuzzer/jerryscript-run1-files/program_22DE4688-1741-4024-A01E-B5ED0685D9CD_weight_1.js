[];
const v5 = Symbol.iterator;
const o17 = {
    [v5]() {
        let v7 = 10;
        const o16 = {
            m(a9, a10) {
                const t7 = "6u";
                t7[7] = a9;
                return a9;
            },
            "e": this,
            next() {
                v7--;
                const v14 = v7 == 0;
                const o15 = {
                    "done": v14,
                    "value": v7,
                };
                return o15;
            },
        };
        return o16;
    },
};
new Int32Array(1052);
new Uint32Array(8);
const v26 = new Uint8Array(14);
async function f27(a28, a29, a30) {
    const v33 = new ArrayBuffer(14);
    new Int32Array(v33);
    return v26;
}
f27();
