function f0() {
}
function f1() {
    return f0;
}
function f5(a6) {
    const o17 = {
        "g": f1,
        [-4096]: -4096,
        "a": a6,
        [a6](a8, a9) {
            Object.defineProperty(this, "a", { configurable: true, enumerable: true, get: f1, set: f1 });
            const o12 = {
                "maxByteLength": 185,
            };
            const v14 = new SharedArrayBuffer(185, o12);
            new a6(v14);
            return this;
        },
    };
    return o17;
}
const v18 = f5(-4096);
f5(5);
const v20 = f5(5);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a27;
    this.d = v20;
    this.b = a29;
    [3.0,1000.0,-2.2250738585072014e-308,-1e-15,-1000.0,-1000000000.0,-4.0,9.19648226074213];
    const o31 = {
    };
    const v33 = new Proxy(o31, o31);
    const o34 = {
        ...v33,
    };
}
const v35 = new F24(1073741823, -9007199254740990, -4096, v18);
new F24(-9007199254740990, -4096, 1073741823, v35);
new F24(-14, -4096, 1073741823, -9007199254740990);
new String(1000);
