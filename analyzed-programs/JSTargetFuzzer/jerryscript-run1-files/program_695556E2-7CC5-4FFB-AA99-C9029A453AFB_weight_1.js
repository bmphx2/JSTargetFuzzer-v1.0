function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 10;
    this.f = 10;
}
const v3 = new F0();
const v4 = new F0();
new F0();
Math.imul(F0, F0);
v3 - -10;
Math.max(v3);
function f13(a14) {
    const o23 = {
        1570: a14,
        m(a16, a17) {
            Object.defineProperty(a14, a17, { writable: true, configurable: true, enumerable: true, value: a16 });
            try { new a14(); } catch (e) {}
            const v19 = a14 + a14;
            let v20;
            try { v20 = new a16(v19, F0, a14, v19); } catch (e) {}
            a14 -= a16;
            let v22;
            try { v22 = v20(v19, a14, WeakMap, WeakMap); } catch (e) {}
            return v22;
        },
        "a": a14,
        __proto__: v4,
        ...v4,
    };
    return o23;
}
f13(true);
f13(f13(f13));
const v37 = new WeakMap();
const v47 = new BigUint64Array(3);
new Uint32Array(2);
const v53 = new Uint16Array(255);
try { new BigUint64Array(...v53, BigUint64Array, ...undefined, "bigint", ...v37); } catch (e) {}
[-6,-1024,5];
[-2147483647,268435456,-15,-2147483648,-9223372036854775807,105026840];
[-485646260,536870889,287975270,128,679329586,268435441,-4294967295,-68651252,1];
Math.acos(v47);
Math.acos(-8);
Math.log10(-8);
Math.trunc(-8);
-8 - -8;
Math.cos(-8);
