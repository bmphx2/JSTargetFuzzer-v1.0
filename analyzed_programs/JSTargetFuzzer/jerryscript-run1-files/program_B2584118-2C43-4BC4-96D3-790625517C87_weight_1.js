new Date();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = Date;
    this.e = Date;
}
new F3(Date);
new F3(F3);
const v8 = new F3(true);
[-128.84068800625937,-1e-15];
[1000000000.0,1.232911808128082e+307,781681.4929366708,509.2081384057949,-Infinity,1000000.0,0.6218227454606348];
[1000000.0,0.9977208562286174,-5.0,-4.0,2.2250738585072014e-308,0.35317620805727323,0.9083767136961768,NaN,2.220446049250313e-16];
Object.defineProperty(v8, true, { value: Date });
const v13 = Symbol.iterator;
const o22 = {
    [v13]() {
        let v15 = 10;
        const o21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                const o20 = {
                    "done": v19,
                    "value": v15,
                };
                return o20;
            },
        };
        return o21;
    },
};
