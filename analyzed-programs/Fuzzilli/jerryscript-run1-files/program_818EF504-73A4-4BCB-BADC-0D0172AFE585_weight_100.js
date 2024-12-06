function f0() {
    const o15 = {
        get b() {
            const v5 = super.a;
            Math.max(2330);
            let v12 = v5 ** (-4294967297 + (v5 * 2330));
            Math.imul(2330, -4294967297);
            --v12;
            return 1;
        },
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
const v19 = [v18,f0];
const v20 = [v16,v18,v17,v19];
const v21 = [v18,v20,f0,v19,v16];
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a25;
}
const v26 = new F22(v21, v21);
new F22(v26, v21);
new F22(F22, v20);
const v30 = Symbol.iterator;
const o39 = {
    [v30]() {
        let v32 = 10;
        const o38 = {
            next() {
                v32--;
                const v36 = v32 == 0;
                const o37 = {
                    "done": v36,
                    "value": v32,
                };
                return o37;
            },
        };
        return o38;
    },
};
