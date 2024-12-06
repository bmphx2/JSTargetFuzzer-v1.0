const v5 = Symbol.iterator;
const o14 = {
    [v5]() {
        let v7 = 10;
        const o13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                const o12 = {
                    "done": v11,
                    "value": v7,
                };
                return o12;
            },
        };
        return o13;
    },
};
const v16 = new BigInt64Array(256);
const v19 = new BigInt64Array(1000);
const v22 = new Float64Array(84);
function f23(a24, a25, a26, a27) {
    const o42 = {
        2: a24,
        "f": 256,
        get g() {
            this.f = a26;
            v22[this] = -65537;
            try { a24(this, a27, v19, 84); } catch (e) {}
            Object.defineProperty(a26, Float64Array, { configurable: true, value: a27 });
            Object.defineProperty(v22, "h", { configurable: true, enumerable: true, get: f23 });
            const v34 = [this,a27,[v22,this,this],35295];
            ([8.048710887091932,-2.2250738585072014e-308,2.220446049250313e-16,-1000.0,6.828082790414911,-Infinity,Infinity,1.6880399539526805e+308,Infinity]).copyWithin();
            const o37 = {
            };
            new Uint8ClampedArray(3007);
            [v22,v34,this];
            return 256;
        },
        ...v19,
        "e": a25,
        ...v16,
        "a": 40907,
        [o14]: a27,
        "c": a27,
        [a26]: a25,
        "h": 40907,
        ...a26,
        "d": BigInt64Array,
    };
    return o42;
}
f23(84, 1000, f23(256, -65537, v16, 84), 35295);
f23(1000, 40907, f23, 1000);
const v49 = Array();
Reflect.apply(v49.reverse, v49);
const v53 = [Int32Array,Array];
Reflect.apply(Array.from, v49, v53);
("2118791066").trimRight();
