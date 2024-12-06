const v1 = new WeakMap();
function f2(a3, a4) {
    const o11 = {
        "g": a4,
        ...a3,
        set f(a6) {
            let v7;
            try { v7 = a6(this); } catch (e) {}
            const v8 = delete this[a3];
            try { new a4(v8, v7); } catch (e) {}
            v1.__proto__;
        },
        "d": a4,
        "a": v1,
        "c": a4,
    };
    return o11;
}
const v12 = f2(WeakMap, f2);
const v13 = f2(f2, f2);
const v14 = f2(v1, WeakMap);
function f15(a16, a17, a18, a19) {
    const o29 = {
        __proto__: v14,
        [a19]: v14,
        set b(a21) {
            super.b = delete this[a21];
        },
        [a18](a24, a25) {
            try { new a16(); } catch (e) {}
            try {
                super.getYear(a16);
            } catch(e28) {
            }
            return a25;
        },
    };
    return o29;
}
const v30 = f15(v12, v12, v12, v12);
v1.__proto__ = v30;
Object.defineProperty(v30, 536870912, { get: f15 });
const v34 = f15(v1, v14, v1, f15);
f15(v34, v13, v1, v34);
0n < 0n;
