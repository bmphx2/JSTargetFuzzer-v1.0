new Float64Array(127);
const o4 = {
    10: Float64Array,
};
o4[7] = o4;
delete o4[16];
new Float64Array(16);
new Uint8Array(16);
let v11 = -18699;
new WeakMap();
2n > v11++;
new Uint32Array(1);
new Float32Array(10);
new BigUint64Array(6);
([]).reduceRight(Date, "number");
const v31 = Symbol.toPrimitive;
const o33 = {
    [v31]() {
        Object.defineProperty(this, "b", { writable: true, configurable: true, enumerable: true, get: Symbol, set: Date });
        return 1;
    },
};
