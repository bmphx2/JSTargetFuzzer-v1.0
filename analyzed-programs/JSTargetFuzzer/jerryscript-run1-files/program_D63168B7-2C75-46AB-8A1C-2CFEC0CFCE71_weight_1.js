const v2 = new Uint16Array(1000);
let v7 = -714920820;
const o10 = {
    valueOf() {
        v7 *= v7;
        try { Uint16Array(4294967297, 4096, 4096); } catch (e) {}
        return 1000;
    },
};
const v12 = v7 || 4294967297;
NaN + v12;
Math.trunc(v12);
Uint8Array ^ v2;
new Uint8Array(4096);
new Uint8ClampedArray(502);
new BigInt64Array(7);
const v25 = new Int32Array(10);
const v28 = Symbol.toPrimitive;
const o37 = {
    [v28]() {
        const o32 = {
            "maxByteLength": 1024,
        };
        const v34 = new ArrayBuffer(10, o32);
        new Uint32Array(v34);
        return 64;
    },
};
new BigInt64Array(64);
const v43 = Symbol.iterator;
const o55 = {
    [v43]() {
        let v45 = 10;
        const o54 = {
            next() {
                v45--;
                const v49 = v45 == 0;
                const o50 = {
                    "done": v49,
                    "value": v45,
                };
                o50[64] = v49;
                new BigInt64Array(Symbol, v45, 0);
                v25.length = 0;
                try { Symbol.keyFor(o37); } catch (e) {}
                return o50;
            },
        };
        return o54;
    },
};
function F56(a58) {
    if (!new.target) { throw 'must be called with new'; }
    -4096n / -4096n;
}
new F56();
