function f0() {
    const o25 = {
        set a(a5) {
            -1.7976931348623157e+308 % -1.7976931348623157e+308;
            try { new a5(); } catch (e) {}
            function f8() {
                return -15782;
            }
            this[this] = f0;
            try {
                super.b;
            } catch(e13) {
                const v15 = Symbol.iterator;
                const o24 = {
                    [v15]() {
                        let v17 = 10;
                        const o23 = {
                            next() {
                                v17--;
                                const v21 = v17 == 0;
                                const o22 = {
                                    "done": v21,
                                    "value": v17,
                                };
                                return o22;
                            },
                        };
                        return o23;
                    },
                };
            }
        },
    };
    return o25;
}
const v26 = f0();
const v27 = f0();
const v28 = f0();
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v26;
}
new F29(v28, v26);
const v34 = new F29(v26, v27);
new F29(v28, v26);
const v44 = new Float32Array(1556);
const o46 = {
    ...v44,
    "b": v26,
    [v28]: v34,
    __proto__: v27,
    "c": v44,
    ...v26,
};
delete o46[1000];
