new BigUint64Array(4096);
const v5 = new Uint8ClampedArray(23);
new Int16Array(128);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 128;
    for (let i14 = 0; i14 < 0; i14++) {
        let v20 = 10;
        for (; v20--;) {
            function F22(a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = i14;
                this.h = a25;
            }
            new F22(23, 128, 23);
            new F22(a12, 4096, a12);
            new F22(23, 128, i14);
        }
    }
    this.d = v5;
    this.a = Uint8ClampedArray;
}
const o33 = {
};
const v35 = new Proxy(BigUint64Array, o33);
try {
const t0 = 4096;
t0(v35, v5, v35);
} catch (e) {}
new F9(4096, 4096);
new F9(128, 128);
new F9(23, 128);
-4294967297n < -4294967297n;
