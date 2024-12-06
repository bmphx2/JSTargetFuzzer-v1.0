class C3 {
    o(a5, a6) {
        const v7 = super.g;
        this[a6] = this;
        const t4 = "1073741824";
        t4[-2] = a5;
        return v7 | a6;
    }
    set b(a10) {
        for (let v11 = 0; v11 < 76; v11++) {
            typeof a10 === "bigint";
        }
    }
}
new C3();
const v16 = new C3();
const v17 = new C3();
function f21(a22, a23, a24, a25) {
    const o32 = {
        ...v17,
        1: "1073741824",
        ..."1073741824",
        get g() {
            function f27() {
                return "1073741824";
            }
            this[26937n];
            for (let v29 = 0; v29 < 32; v29++) {
                this["p" + v29] = v29;
            }
            return "1073741824";
        },
        ..."bigint",
        "f": v16,
        __proto__: "bigint",
        "b": "1073741824",
    };
    return o32;
}
const v33 = f21(-65536n, 6n, 6n, v17);
f21(-65536n, 26937n, 26937n, v33);
f21(-65536n, v33, 26937n, v16);
RangeError();
