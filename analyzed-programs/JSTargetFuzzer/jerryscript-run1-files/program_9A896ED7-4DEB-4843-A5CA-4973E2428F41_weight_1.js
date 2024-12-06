const v10 = new WeakMap();
function f11(a12, a13, a14, a15) {
    const o22 = {
        __proto__: "p",
        3: a13,
        [v10]: 1073741824,
        get f() {
            let v16 = this;
            super.b = a13;
            try {
                super.a = a14;
            } catch(e17) {
                super.g = v16;
                a15 = f11;
                v16 = ("setYear")["codePointAt"](14) || 1073741824;
            } finally {
                v10[11];
            }
            return "d";
        },
    };
    return o22;
}
f11("p", 1073741824, -65536n, 1073741824);
f11("d", 9007199254740991, -2147483647n, 1073741824);
f11("p", 1073741824, 4294967296n, 14);
const v28 = [Date(),Date];
for (let v29 = 0; v29 < 5; v29++) {
    v28["p" + v29] = v29;
}
v28["reverse"]();
