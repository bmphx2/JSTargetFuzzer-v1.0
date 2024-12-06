function f6(a7, a8) {
    const o18 = {
        set e(a10) {
            a10 = Infinity;
        },
        "f": -4.0,
        valueOf(a12, a13, a14) {
            a7.toString = a7;
            let v15;
            try { v15 = a7(41711, -1000000000000.0, a7, a13, this); } catch (e) {}
            super.h = delete this[0];
            a12 = a13;
            let v17;
            try { v17 = v15(v15, a13, v15); } catch (e) {}
            return v17;
        },
        "g": -1000000000000.0,
    };
    return o18;
}
const v19 = f6(-9007199254740991, -256);
const v20 = f6(-9007199254740991, 41711);
const v21 = f6(v20, -9007199254740991);
function f22(a23, a24, a25) {
    const o33 = {
        __proto__: a23,
        p(a27, a28) {
            Object.defineProperty(v19, 3266001317, { enumerable: true, get: f6, set: f6 });
            this.toString = f6;
            return a27;
        },
        [-9007199254740991]: 41711,
        "a": v21,
        "f": f22,
        "b": v19,
        "d": a23,
        7: v20,
        "b": -1000000000000.0,
        ...a23,
        get h() {
            for (let v30 = 0; v30 < 32; v30++) {
                a23["p" + v30] = v30;
            }
            return this;
        },
    };
    return o33;
}
f22(v20, -1000000000000.0, Infinity);
f22(v19, -4.0, -1000000000000.0);
f22(v20, -1000000000000.0, -1000000000000.0);
function f37() {
}
let v38 = 63703n;
v38 = -2147483649n;
v21.g /= -1000000000000.0;
new Uint8Array(0);
let v54 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v57 = Symbol.iterator;
const o66 = {
    [v57]() {
        let v59 = 10;
        const o65 = {
            next() {
                v59--;
                const v63 = v59 == 0;
                const o64 = {
                    "done": v63,
                    "value": v59,
                };
                return o64;
            },
        };
        return o65;
    },
};
const v67 = new Int32Array(127);
v54 /= v67;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
