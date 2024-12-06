function f0() {
    const o8 = {
        16: 1e-15,
        __proto__: f0,
        ..."byteOffset",
        "f": 1e-15,
        [5043](a5) {
            this[6] = this;
            const v6 = a5 < this;
            try { new a5(a5, 5043, v6, v6); } catch (e) {}
            return v6;
        },
    };
    return o8;
}
f0();
f0();
f0();
new Map();
new Int32Array(6);
let v22 = Int16Array;
new v22(184);
const v26 = new Float64Array(65);
[v22] = v26;
const v34 = Symbol.iterator;
const o43 = {
    [v34]() {
        let v36 = 10;
        const o42 = {
            next() {
                v36--;
                const v40 = v36 == 0;
                const o41 = {
                    "done": v40,
                    "value": v36,
                };
                return 0;
            },
        };
        return o42;
    },
};
