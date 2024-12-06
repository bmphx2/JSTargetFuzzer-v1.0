function f0() {
    const o16 = {
        __proto__: 9007199254740990,
        [5.620243441104487](a5, a6) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = 5.620243441104487;
            }
            const v13 = new F8(5.620243441104487, a6, this);
            new F8(a6, 9007199254740990, -1073741824);
            new F8(9007199254740990, v13, print);
            return F8;
        },
    };
    return o16;
}
const v17 = f0(f0);
const v18 = f0();
f0(v18, v18);
new Uint32Array(0);
new Int8Array(468);
new Uint32Array(127, v17);
let v34 = [Date(Date)];
let v35 = --v34;
let v36 = ++v35;
const v38 = new Float32Array(Float32Array);
const v41 = v38[Symbol.iterator];
try { v41(Float32Array); } catch (e) {}
--v36 == -5555n;
