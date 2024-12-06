class C3 {
    get d() {
        for (const v6 in this) {
        }
        return this;
    }
    d = 2147483648n;
    4096;
    [4466n];
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
function f13(a14, a15) {
    const o22 = {
        "h": a15,
        ...a15,
        __proto__: v11,
        "e": v12,
        [4466n](a17, a18, a19) {
            try {
                super.valueOf();
            } catch(e21) {
            }
            return a17;
        },
        "f": 2147483648n,
    };
    return o22;
}
const v23 = f13(1073741823n, v11);
const v24 = f13(4466n, C3);
f13(2147483648n, v11);
function f26(a27, a28, a29) {
    const o38 = {
        get f() {
            function f31(a32, a33, a34) {
                f13(this, a32 != this, a33, 4466n);
                return a27;
            }
            f31(v10, v10, 1073741823n);
            return 2147483648n;
        },
        "a": 2147483648n,
        "b": a28,
        "d": a29,
    };
    return o38;
}
const v39 = f26(v12, v24, v23);
f26(v10, v24, v23);
for (let [v42,...v43] of f26(v12, C3, v24)) {
    f26 && v43;
    v10[v43] = f13;
}
const v45 = v10 >> v39;
try { v23.o(v45, v10, C3, 2147483648n); } catch (e) {}
const v47 = f26(v11, v24, v24);
f13(4466n, v47);
f13(1073741823n, v10);
f13 << v47;
