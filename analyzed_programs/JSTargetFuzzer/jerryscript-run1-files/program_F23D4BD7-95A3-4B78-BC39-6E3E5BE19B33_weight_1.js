function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9.h = a9;
    this.c = "-2";
}
const v10 = new F6("valueOf", -16);
const v11 = new F6("valueOf", 9007199254740992);
const v12 = new F6("16U3", 9007199254740992);
function f13() {
    return v11;
}
function f14(a15, a16, a17) {
    const o23 = {
        "g": F6,
        get f() {
            ("-2").__proto__;
            return this;
        },
        "c": a17,
        "f": F6,
        "a": "valueOf",
        "d": -16,
        "e": f13,
        ...v12,
    };
    return a15;
}
f14(v10, v12, "-2");
f14("16U3", v10, "valueOf");
f14("-2", v12, "16U3");
const v30 = [65535n,0n,"valueOf"];
let v31 = [964329252n,964329252n,v30,v30];
const v32 = [v31,v31,v30,964329252n,0n];
const v33 = [65535n,v31];
[v32,v10];
const v35 = [v31];
const t36 = "fdNr";
t36[0] = F6;
let v42;
try {
const t0 = "localeCompare";
v42 = new t0(v30, v35, v35, 58270);
} catch (e) {}
async function* f43(a44, a45, a46) {
    ({"length":a44,...v31} = a45);
    yield v30;
    await a44;
    yield "fdNr";
    return a44;
}
f43(v10, v33, v42);
