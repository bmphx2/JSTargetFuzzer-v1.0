function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
    this.d = -51901;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o30 = {
        ...v5,
        16: v5,
        ...v3,
        [a7]: a8,
        __proto__: v4,
        "d": v4,
        m(a10, a11, a12, a13) {
            let v9 = this;
            a10[7];
            v9--;
            let v16 = 0;
            do {
                let v18 = -1937261971;
                const v20 = v18++;
                const v21 = v16 | -2147483647;
                Math.random();
                v18 * -2147483647;
                v20 || -2147483647;
                Math.exp(v16);
                v21 && -2147483647;
                v16++;
            } while (v16 < 1)
            return v5;
        },
    };
    return o30;
}
const v31 = f6(v4, v4);
const v32 = f6(v31, v5);
for (const v40 in f6(v3, v3)) {
    f6(v3, v5).d;
    v31[v32];
    v5[Symbol.unscopables] = v5;
}
v32.length = 0;
