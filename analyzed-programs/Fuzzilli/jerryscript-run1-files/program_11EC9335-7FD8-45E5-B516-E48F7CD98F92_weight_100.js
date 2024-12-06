const v9 = [2.0,-3.0,-1e-15,1e-15,5.0,-683.9469437636154,-235.92809464043899,-9.389839994858814,4.0,1000000000000.0];
const v10 = [1.5688073591378404e+308,0.9067427628451149,0.8647638111536636,2.7683287350418695,-5.659593455400069e+307];
const v11 = [-1.7976931348623157e+308,-7.87552991344697,-466065.10874881456,1.7798139537390077e+308,-0.0,-3.0,-3.0];
function f12(a13, a14, a15, a16) {
    const o31 = {
        "g": a14,
        "b": a16,
        "h": 1073741824n,
        10: a13,
        p(a18, a19, a20, a21) {
            delete a19[a21];
            function F23(a25, a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = "268435456";
                this.g = a20;
                this.c = v11;
            }
            new F23(a15, v9, "undefined");
            new F23(2n, a14, a18);
            new F23(2n, a19, a18);
            return a20;
        },
    };
    return o31;
}
f12(1073741824n, v10, "f3CTj", "allSettled");
f12(1n, v11, f12(1n, v9, 2n, "268435456"), "268435456");
Object.defineProperty("268435456", 7, { writable: true, configurable: true, get: f12 });
new BigUint64Array(2);
new BigUint64Array(0);
new Int32Array(168);
