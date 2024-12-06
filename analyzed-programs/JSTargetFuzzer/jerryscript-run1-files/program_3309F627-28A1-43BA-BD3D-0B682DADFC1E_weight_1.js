function f0() {
    const o9 = {
        p(a5) {
            this.g = -87029.09222119558;
            return this;
        },
        [10]: 2.2250738585072014e-308,
        __proto__: 2.2250738585072014e-308,
        [-87029.09222119558]: 2.2250738585072014e-308,
    };
    return o9;
}
f0();
const v11 = f0();
const v12 = f0(v11, f0);
let v17 = 1e-15;
const v18 = -v11;
const v19 = v17++;
-v17;
Math.trunc(v18);
-4294967295 + v11;
Math.log10(v18);
const o27 = {
    n() {
        Object.defineProperty(v12, "b", { writable: true, get: f0, set: f0 });
        return v19;
    },
};
let v30 = 1000n;
v30 **= v30;
