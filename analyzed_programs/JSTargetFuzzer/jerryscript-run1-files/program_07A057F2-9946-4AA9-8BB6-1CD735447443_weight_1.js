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
    const o38 = {
        __proto__: v14,
        [a19]: v14,
        set b(a21) {
            const v22 = delete this[a21];
            v12.a >>>= a19;
            try {
                super.valueOf(a16, v13);
            } catch(e24) {
            }
            super.b = v22;
        },
        [a17](a26, a27) {
            try { new a16(); } catch (e) {}
            try {
                super.getYear(a16);
            } catch(e30) {
            }
            with (a27) {
                e = this;
                -4096 >>> v13;
                Math.ceil(a27);
                !0.1523926944197822;
            }
            return a27;
        },
    };
    return o38;
}
const v39 = f15(v12, v12, v12, v12);
v1.__proto__ = v39;
Object.defineProperty(v39, 536870912, { get: f15 });
const v43 = f15(v1, v14, v1, f15);
f15(v43, v13, v1, v43);
0n < 0n;
