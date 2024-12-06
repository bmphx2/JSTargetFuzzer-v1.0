class C3 {
    ["g"];
    ["5"];
    ["MAX_SAFE_INTEGER"] = "MAX_SAFE_INTEGER";
    static #c;
    static n(a5, a6) {
        try { a6(a5, this, "MAX_SAFE_INTEGER", "g"); } catch (e) {}
        this.b = a5;
        try {
            const t9 = "5";
            t9.#c >>= this;
        } catch(e8) {
        }
        return "5";
    }
}
new C3();
const v10 = new C3();
new C3();
const v15 = [-268435456,"MAX_SAFE_INTEGER",10];
let v16 = [v15,C3,"5"];
const v17 = [C3,"g"];
const o18 = {
    6: v16,
    "g": 10,
};
async function f19(a20, a21, a22) {
    const v23 = ("g").__proto__;
    v23[6] = a20;
    v16 ||= v10;
    try { a20(v23, a21, a22); } catch (e) {}
    await v17;
    return "5";
}
f19("5", f19, v15);
