function f3(a4, a5) {
    const o11 = {
        "e": a4,
        ...a5,
        __proto__: a5,
        [4294967296n]: a5,
        get d() {
            let v6 = this;
            ({"c":a4,"e":v6,...a5} = v6);
            const o7 = {
            };
            new Proxy(v6, o7);
            v6 |= a5;
            a5.__proto__;
            return 4294967296n;
        },
        "a": -2n,
    };
    return o11;
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -2n;
    this.h = a14;
}
new F12(f3);
const v16 = new F12(4294967296n);
new F12(v16);
const v18 = f3(-2n, -2n);
const v19 = f3(-2n, 4294967296n);
const v20 = f3(-2n, -7n);
function f21(a22, a23, a24) {
    const o34 = {
        set a(a26) {
            new f3(-2n, a23);
            v20[12];
            v18[v19];
            super.h;
        },
        "f": -2n,
    };
    return o34;
}
const v35 = f21(v20, -2n, -2n);
const v36 = f21(v19, 4294967296n, -2n);
f21(v19, 4294967296n, -7n);
const v39 = new BigUint64Array(BigUint64Array, BigUint64Array, BigUint64Array);
if (-2n) {
    try { v20["isExtensible"](v35, v36, 4294967296n); } catch (e) {}
} else {
    v35[v19] = -2n;
    v39.length;
}
v39[Symbol.iterator] = 7;
const v47 = new Float32Array(Symbol, 7, 7);
v47[-1] = BigUint64Array;
