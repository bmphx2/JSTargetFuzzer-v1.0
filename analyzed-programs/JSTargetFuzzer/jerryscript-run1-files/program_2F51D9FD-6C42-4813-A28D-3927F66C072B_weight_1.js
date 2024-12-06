const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v1;
    this.d = a4;
    this.e = WeakSet;
}
let v6 = new F2(v1, v1);
const v7 = new F2(F2, v6);
const v8 = new F2(v6, v7);
function f9(a10, a11, a12) {
    const o24 = {
        set g(a14) {
            v6++;
            const v18 = a12 != v8;
            if (v18) {
                Object.defineProperty(v7, "c", { writable: true, get: f9 });
            } else {
                try { new a11(f9, a11, Math, a11, v18); } catch (e) {}
            }
            const v20 = 268435441 ** 268435441;
            Math.round(v6);
            v20 % 268435441;
            ++v6;
        },
        "a": v1,
        "g": v8,
        "f": v8,
        "h": a10,
        "d": v1,
        __proto__: v8,
        "b": a11,
        1073741824: a12,
        [F2]: WeakSet,
        "h": WeakSet,
    };
    return o24;
}
const v25 = f9(v6, v6, F2);
const v26 = f9(v6, v6, v25);
const v27 = f9(v1, v1, v6);
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a32;
}
new F28(v26, v26, v25);
new F28(v26, v27, f9);
new F28(v25, v27, v26);
const v36 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o37 = {
};
const v39 = new Proxy(v36, o37);
for (const v40 in v39) {
}
