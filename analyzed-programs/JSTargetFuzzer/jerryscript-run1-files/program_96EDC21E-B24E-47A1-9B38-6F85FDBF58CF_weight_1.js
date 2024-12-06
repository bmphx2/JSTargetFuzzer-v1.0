const v1 = new WeakSet();
const v2 = [v1,WeakSet,v1];
const v3 = [v1,v2,WeakSet];
const v4 = [v3,v3,v3,v2,v3];
const v8 = [-1262043607];
const v9 = [2147483647,v4,v4];
const v10 = [3,v8,v4];
function f11() {
    const o12 = {
        __proto__: v1,
        "a": f11,
        [f11]: v10,
    };
    return 2147483647;
}
function f13(a14, a15, a16, a17) {
    const o32 = {
        "e": a17,
        "c": v1,
        ...v1,
        7: v4,
        [v9]: -1262043607,
        __proto__: v9,
        "g": v1,
        "d": v8,
        m(a19, a20, a21, a22) {
            function F23(a25, a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a27;
                this.e = 2147483647;
            }
            new F23(a14, v4, F23, v2);
            const v30 = new F23(a15, a19, v8, v10);
            new F23(2147483647, v30, v10, v10);
            return 2147483647;
        },
    };
    a15 **= v4;
    o32.__proto__;
    f = v2;
    return o32;
}
f13(2147483647, 3, 3, v10);
f13(2147483647, 3, 2147483647, v8);
f13(3, 2147483647, 3, v2);
for (let i41 = 0;
    (() => {
        const o42 = {
        };
        return i41 < 7;
    })();
    i41++) {
}
