function f3(a4) {
    const o22 = {
        ...a4,
        5: a4,
        "f": a4,
        valueOf(a6, a7) {
            for (let i10 = 0, i11 = 10; i10 < i11; i10++, i11--) {
            }
            return 268435456;
        },
    };
    return o22;
}
const v23 = f3(268435456);
const v24 = f3(v23);
const v25 = f3(v24);
function f26(a27, a28, a29, a30) {
    const o35 = {
        set g(a32) {
            const v33 = new f3(a27, this, v23, a27);
            v33 instanceof f3;
        },
        "b": -1073741824,
        __proto__: a28,
        "g": a29,
        "e": -1073741824,
        10: a27,
        "c": v23,
        ...a29,
    };
    return o35;
}
f26(268435439, v23, -1073741824, 268435439);
f26(268435439, v25, -1073741824, v24);
f26(-1073741824, v25, 268435439, -1073741824);
new Int32Array(6);
let v43 = Int16Array;
new v43(184);
const v47 = new Float64Array(65);
[v43] = v47;
const v55 = Symbol.iterator;
const o64 = {
    [v55]() {
        const o63 = {
            next() {
                let v58 = this;
                const v61 = 10 == v58--;
                const o62 = {
                    "done": v61,
                    "value": 10,
                };
                return o62;
            },
        };
        return o63;
    },
};
