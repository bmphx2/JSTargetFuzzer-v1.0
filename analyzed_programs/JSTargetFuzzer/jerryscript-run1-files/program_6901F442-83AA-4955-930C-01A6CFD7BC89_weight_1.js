new Array(256);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
new F3(F3);
new F3(Array);
const v8 = new F3(Array);
new Uint8Array(10);
new Uint8ClampedArray(16);
new BigInt64Array(2807);
let v18 = 0;
do {
    v18++;
} while ((() => {
        const v22 = Symbol.iterator;
        const o31 = {
            [v22]() {
                let v24 = 10;
                const o30 = {
                    next() {
                        v24--;
                        const v28 = v24 == 0;
                        const o29 = {
                            "done": v28,
                            "value": v24,
                        };
                        return o29;
                    },
                };
                return o30;
            },
        };
        this << Float32Array;
        new Uint8ClampedArray(16);
        v8 >>> 65535;
        Math.tan(65535);
        Math.max(866.9537335151842);
        return v18 < 8;
    })())
