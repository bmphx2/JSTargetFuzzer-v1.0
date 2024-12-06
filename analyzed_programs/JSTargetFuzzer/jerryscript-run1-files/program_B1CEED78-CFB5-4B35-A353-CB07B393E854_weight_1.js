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
    const o28 = {
        set g(a14) {
            v6++;
            const v18 = a12 != v8;
            if (v18) {
                super.e;
                Math.__proto__ = v8;
                Object.defineProperty(v7, "c", { writable: true, get: f9 });
            } else {
                try { new a11(f9, a11, Math, a11, v18); } catch (e) {}
            }
            const v24 = 268435441 ** 268435441;
            Math.round(v6);
            v24 % 268435441;
            ++v6;
        },
        "a": v1,
        [a11]: v8,
        "f": a10,
        __proto__: v7,
        [f9]: WeakSet,
        [F2]: WeakSet,
        "g": v8,
        "f": v8,
        "h": a10,
        "d": v1,
        /*
        __proto__: v8,
        */
        "b": a11,
        1073741824: a12,
        [F2]: WeakSet,
        "h": WeakSet,
    };
    return o28;
}
const v29 = f9(v6, v6, F2);
const v30 = f9(v6, v6, v29);
const v31 = f9(v1, v1, v6);
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a36;
}
new F32(v30, v30, v29);
new F32(v30, v31, f9);
new F32(v29, v31, v30);
const v40 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
new Promise(Promise);
const o43 = {
};
const v45 = new Proxy(v40, o43);
for (const v46 in v45) {
}
