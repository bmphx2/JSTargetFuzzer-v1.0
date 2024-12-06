function f3(a4) {
    const o14 = {
        2147483647: "flags",
        __proto__: "462680871",
        get c() {
            Object.defineProperty(a4, "length", { enumerable: true, value: this });
            super.h;
            return "1311737641";
        },
        set f(a11) {
            a4.__proto__ = a4;
            new WeakMap();
        },
    };
    return o14;
}
const v15 = f3("462680871");
const v16 = f3("toString");
const v17 = f3("toString");
function f21(a22, a23, a24, a25) {
    const o40 = {
        "g": f3,
        ...v16,
        __proto__: v15,
        p(a27, a28, a29) {
            super.g = a27;
            Object.defineProperty(a22, 9, { writable: true, configurable: true, enumerable: true, value: v16 });
            return "toString";
        },
        "h": a22,
        get c() {
            a24 < a22 ? a24 : a22;
            return f3;
        },
    };
    return o40;
}
f21(v16, 2147483648, -1073741824, 2147483648);
f21(v16, -15, -1073741824, -1073741824);
const v43 = f21(v17, -1073741824, -1073741824, 2147483648);
let v47;
try { v47 = v43.p(v43, f3, -7, -15, -65537); } catch (e) {}
const v48 = new f3(v47);
f21 <= v48;
const o55 = {
    valueOf() {
        try { new v47(); } catch (e) {}
        return "toString";
    },
};
