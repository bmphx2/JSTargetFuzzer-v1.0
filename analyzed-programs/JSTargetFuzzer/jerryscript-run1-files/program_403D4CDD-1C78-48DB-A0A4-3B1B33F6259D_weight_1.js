function f3() {
    return 65537;
}
const v4 = [193885418,65537];
const v5 = [193885418,-2147483648];
const v6 = [v4,v5,v4,193885418,v5];
function f10(a11, a12, a13, a14) {
    const o18 = {
        get h() {
            this.unscopables **= a11;
            return v5;
        },
        set a(a17) {
            a14[3] = v4;
            this[v5] = this;
        },
        "h": a11,
        ..."undefined",
        "c": "hihX",
        5: a11,
        __proto__: "toString",
    };
    return o18;
}
f10(193885418, v6, 193885418, f10(v6, v4, "undefined", f10(v5, v5, "toString", v6)), v5, "undefined");
const v23 = new Uint8ClampedArray();
let v27;
try { v27 = v23["set"](4096, 23, ...v23, ...23); } catch (e) {}
for (const v28 in v27) {
}
