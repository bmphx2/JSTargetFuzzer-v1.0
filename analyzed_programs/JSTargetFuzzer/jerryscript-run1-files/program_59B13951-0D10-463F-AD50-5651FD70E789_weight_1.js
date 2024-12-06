function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 536870887;
    this.a = 536870887;
    this.d = 536870887;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
function f10() {
    return f6;
}
const v11 = [v3,v5,v4];
const v12 = [v4,f10];
const v13 = [v12,f6,f10,"string"];
function f14(a15, a16, a17, a18) {
    const o27 = {
        ...a18,
        ..."string",
        [a17](a20, a21, a22) {
            const v23 = f10();
            f6();
            v23 ** v4;
            f6();
            v11[536870912] = f6;
            return a21;
        },
        "a": f6,
        __proto__: "string",
        8: "536870887",
        "c": v12,
    };
    return o27;
}
f14(v5, v4, f14(v3, v4, "6", "string"), "6");
f14(v3, v4, v13, "536870887");
const v31 = v13.length;
new F0();
if (v31 >= "string") {
    const t42 = v12[8];
    t42.d <<= v31;
} else {
    v12.length = 0;
}
