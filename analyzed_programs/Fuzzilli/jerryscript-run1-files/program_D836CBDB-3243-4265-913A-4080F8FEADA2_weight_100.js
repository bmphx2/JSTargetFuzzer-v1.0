const v1 = new Set();
function f2(a3, a4) {
    const o9 = {
        "h": a3,
        "b": a3,
        "g": a4,
        "c": v1,
        ...a3,
        get f() {
            this.g = a3;
            a3 = a4;
            return 5;
        },
    };
    return o9;
}
const v10 = f2(v1, v1);
const v11 = f2(v1, Set);
const v12 = f2(v1, v11);
class C13 {
    constructor(a15, a16, a17) {
        a15[v1] = a15;
        a15 = v11;
        try { v11["getFullYear"](a15, this, a15, Set, this); } catch (e) {}
    }
    #o(a21, a22) {
        Object.defineProperty(v1, v12, { get: f2 });
        return a22;
    }
    [v1];
}
const v23 = new C13(v12, f2, v11);
new C13(v23, v11, C13);
new C13(v10, v11, v11);
async function f29(a30, a31, a32, a33) {
    v23.__proto__;
    typeof 15 === "string";
    await Set;
    return -1819845544;
}
v10[f29(v11, C13, C13, C13)];
