new BigUint64Array(831);
const v5 = new BigUint64Array(6);
const v8 = new BigInt64Array(1024);
function f9(a10, a11, a12, a13) {
    const o33 = {
        ...v8,
        set g(a15) {
            const v18 = a15 ** a12;
            Object.defineProperty(Math, v18, { writable: true, configurable: true, value: v18 });
            function F19(a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = v18;
                this.b = BigUint64Array;
            }
            new F19(a11, a15, a10);
            const v25 = new F19(831, a15, a11);
            new F19(v25, Math, v5);
            let v27 = 128;
            a11 * v27;
            2 - 2;
            --v27;
            Math.cosh(v27);
            !a11;
        },
    };
    return o33;
}
f9(831, 1024, 6, BigUint64Array);
f9(831, 6, 1024, f9(6, 1024, 6, 831));
-9n >> 268435456n;
