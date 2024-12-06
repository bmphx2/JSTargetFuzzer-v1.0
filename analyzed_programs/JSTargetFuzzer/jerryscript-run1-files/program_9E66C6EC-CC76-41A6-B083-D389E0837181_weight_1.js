function f3(a4) {
    const o14 = {
        __proto__: "cause",
        set a(a6) {
            this[a6] = a6;
            const t5 = "h";
            t5[a4] /= a6;
            const o9 = {
                "maxByteLength": 3,
            };
            const v11 = new SharedArrayBuffer(0, o9);
            new DataView(v11);
        },
    };
    return o14;
}
const v15 = f3("cause");
const v16 = f3("h");
const v17 = f3("h");
function f21(a22, a23) {
    const o34 = {
        [-2]: "h",
        "g": a22,
        "a": v15,
        "h": a22,
        __proto__: v15,
        "b": a22,
        "c": "h",
        [a23](a25, a26, a27) {
            "byteLength" * a22;
            new WeakMap();
            -Infinity;
            return v16;
        },
    };
    return o34;
}
const v35 = f21(v17, 5);
f21(v35, 5);
f21(v35, -268435456);
new Int32Array(6);
let v42 = Int16Array;
new v42(Int32Array);
const v46 = new Float64Array(65);
[v42] = v46;
const v54 = Symbol.iterator;
const o63 = {
    [v54]() {
        let v56 = 10;
        const o62 = {
            next() {
                v56--;
                const v60 = v56 == 0;
                const o61 = {
                    "done": v60,
                    "value": v56,
                };
                return o61;
            },
        };
        return o62;
    },
};
