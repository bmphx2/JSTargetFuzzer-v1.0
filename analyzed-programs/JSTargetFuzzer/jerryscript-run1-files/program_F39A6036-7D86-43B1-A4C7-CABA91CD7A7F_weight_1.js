function f0() {
    const o16 = {
        [57040]: "Y6A",
        get e() {
            268435441 / 268435441;
            "Y6A" ** 1.7976931348623157e+308;
            const v14 = "Y6A" >>> 512;
            Math.atanh(57040);
            return v14;
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
const v22 = new Float64Array(2489);
const v25 = new Uint32Array(1000);
const v28 = new BigInt64Array(5);
function f29() {
    return Uint32Array;
}
function f30(a31, a32) {
    const o52 = {
        get e() {
            Object.defineProperty(this, 1024, { writable: true, get: f0, set: f29 });
            return a32;
        },
        "h": v17,
        ...v28,
        __proto__: v19,
        "g": a32,
        valueOf(a35, a36, a37, a38) {
            if (BigInt64Array != a38) {
            } else {
                const v42 = Symbol.iterator;
                const o51 = {
                    [v42]() {
                        let v44 = 10;
                        const o50 = {
                            next() {
                                v44--;
                                const v48 = v44 == 0;
                                const o49 = {
                                    "done": v48,
                                    "value": v44,
                                };
                                return o49;
                            },
                        };
                        return o50;
                    },
                };
            }
            return a36;
        },
    };
    return o52;
}
const v53 = f30(5, f29);
f30(5, v22);
f30(5, BigInt64Array);
function f56(a57) {
    return v53;
}
class C58 extends f56 {
    #e = v18;
    static [v25];
    e = v19;
}
new BigInt64Array(1000, 1000, 2489);
