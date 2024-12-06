new Array(256);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
new F3(F3);
const v7 = new F3(Array);
const v8 = new F3(Array);
for (let v11 = 0; v11 < 32; v11++) {
    Array["p" + v11] = v11;
}
new Uint8Array(10);
new Uint8ClampedArray(16);
new BigInt64Array(2807);
let v21 = 0;
do {
    v21++;
} while ((() => {
        const v25 = Symbol.iterator;
        const o34 = {
            [v25]() {
                let v27 = 10;
                const o33 = {
                    next() {
                        v27--;
                        const v31 = v27 == 0;
                        const o32 = {
                            "done": v31,
                            "value": v27,
                        };
                        return v7;
                    },
                };
                return o33;
            },
        };
        this << Float32Array;
        new Uint8ClampedArray(16);
        v8 >>> 65535;
        Math.tan(65535);
        Math.max(866.9537335151842);
        return v21 < 8;
    })())
