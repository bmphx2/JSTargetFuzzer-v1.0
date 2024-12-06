function f6(a7, a8) {
    const o15 = {
        __proto__: "reject",
        ..."reject",
        get a() {
            let v10;
            try {
            const t0 = 2147483649;
            v10 = t0(this, ..."reject", this, -54896, this, 2147483649);
            } catch (e) {}
            v10[253911210] = a8;
            return -54896;
        },
        ..."number",
        ..."number",
        "c": "number",
    };
    return o15;
}
const v16 = f6(-54896, -54896);
const v17 = f6(-54896, 253911210);
const v18 = f6(253911210, 2147483649);
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -54896;
    this.b = v16;
    const o27 = {
        __proto__: a24,
        [a25]: v18,
    };
    v18[v18];
    this.f = -9007199254740990;
}
new F22(v16, "JS8Xa", 253911210);
new F22(v17, "number", 1878450741);
new F22(v16, "number", -9007199254740991);
try {
    for (const v33 of "preventExtensions") {
        break;
    }
    const t40 = "reject";
    t40[Symbol.match] = "preventExtensions";
    f6(-9007199254740990, "preventExtensions").__proto__;
} finally {
}
