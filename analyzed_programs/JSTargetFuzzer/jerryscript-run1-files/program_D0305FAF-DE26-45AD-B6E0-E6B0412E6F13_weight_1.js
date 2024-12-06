function f0() {
    const o12 = {
        ..."p",
        "e": -2147483647,
        [13](a5) {
            function f6(a7) {
                const o8 = {
                    "e": "p",
                    "h": this,
                    "c": a5,
                };
                return o8;
            }
            const v9 = f6(this);
            f6(a5);
            return f6(v9);
        },
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
v13[v14] = v14;
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
const v26 = f0();
function f27(a28) {
    const o41 = {
        "a": v13,
        [v13]: v26,
        set d(a30) {
            try { a30(this, this, this, a30); } catch (e) {}
            f0();
            try {
                super.m();
            } catch(e34) {
                v14[512];
                !a28;
                this.a;
            }
        },
        __proto__: v26,
        2846: a28,
        6: a28,
    };
    return o41;
}
f27(v14);
f27(v14);
f27(v26);
new Int16Array(14);
new Float32Array(64);
new BigUint64Array(142);
([]).flat();
