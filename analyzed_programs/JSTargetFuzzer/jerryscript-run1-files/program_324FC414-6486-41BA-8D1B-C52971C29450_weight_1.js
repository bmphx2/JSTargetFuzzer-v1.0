const v3 = [0,10,268435456];
const v4 = [10,-256,257];
const v5 = [4294967295,1];
let v9 = 58354n;
v9 <<= 39655n;
function f11(a12, a13, a14, a15) {
    const o19 = {
        268435439: a12,
        ...v3,
        [4294967297]: 30350,
        set e(a17) {
            a13[this] = -2147483647;
            30350 - a17;
        },
        __proto__: a13,
        [a12]: a15,
        "b": -2147483647,
    };
    return o19;
}
f11(v5, v5, 30350, -52657);
f11(v4, v3, 255, -2147483647);
f11(v4, v3, 4294967297, 30350);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    v4.d = a37;
    this.f = 61444;
}
new F32(61444, 5n, "global", "-16");
new F32(61444, -7n, "-16", "global");
const v40 = new F32(61444, 5n, "global", "global");
if ("function" == v40) {
} else {
    function F45(a47, a48, a49) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a49;
    }
    const v50 = new F45(F45, "global", "function");
    new F45(v50, "global", "function");
    new F45(v50, "global", "function");
}
