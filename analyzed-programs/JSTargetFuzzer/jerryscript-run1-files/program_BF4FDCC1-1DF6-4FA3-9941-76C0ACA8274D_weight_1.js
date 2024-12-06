const v0 = [];
const v1 = [v0,v0,v0];
[v0,[v0,v1,v1,v0]];
new Float64Array(136);
new Float32Array(136);
new Int32Array(227);
function f13() {
    const v14 = -Infinity;
    const o22 = {
        "g": 255,
        valueOf(a18) {
            a18.valueOf = 227;
            for (const v19 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, a18, 255, v14);
                } catch(e21) {
                }
            }
            return 255;
        },
        [v14]: v14,
        "d": v14,
    };
    return v1;
}
const v23 = f13();
const v24 = f13();
const v25 = f13();
function F26() {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F26();
new BigInt64Array(v28, v28, BigInt64Array);
function f34(a35, a36, a37, a38) {
    const v40 = new Uint8Array();
    gc(v40);
    const v43 = [0.7232674142291522,701118.1621341272,-Infinity,-9.497028516865004,9.911164307375006e+307,162030.69801292918,-1.3184861223005049e+308,5.860617559714003];
    v43[1073741824] = v43;
    const o58 = {
        ...Float32Array,
        "g": 4.0,
        set a(a46) {
            a46[a35] = a46;
            try { a46(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o58;
}
const v59 = f34(v25, 1000000000000.0, 1000000000000.0, 1000000.0);
f34(v24, 1000000000000.0, 1000000000000.0, 1000000.0);
f34(v23, 4.0, 4.0, 1000000000000.0);
const o73 = {
    [f13]: f13,
    [v28]() {
        let v66 = 10;
        const o72 = {
            next() {
                v66--;
                const v70 = v66 == 0;
                const o71 = {
                    "done": v70,
                    "value": v66,
                };
                return o71;
            },
        };
        return o72;
    },
    __proto__: v59,
    4037: 4.0,
    "a": v25,
};
const o74 = {
    "h": 1000000.0,
    ...1000000.0,
    "f": f34,
    "c": f34,
    "b": v23,
};
