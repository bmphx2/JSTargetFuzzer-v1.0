const v3 = [0,10,268435456];
const v4 = [10,-256,257];
const v5 = [4294967295,1];
function f9(a10, a11, a12, a13) {
    const o17 = {
        268435439: a10,
        ...v3,
        [4294967297]: 30350,
        set e(a15) {
            a11[this] = -2147483647;
            30350 - a15;
        },
        __proto__: a11,
        [a10]: a13,
        "b": -2147483647,
    };
    return o17;
}
f9(v5, v5, 30350, -52657);
f9(v4, v3, 255, -2147483647);
f9(v4, v3, 4294967297, 30350);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    v4.d = a35;
    this.f = -4294967296;
}
new F30(-4294967296, 5n, "global", "-16");
new F30(-4294967296, -7n, "-16", "global");
const v38 = new F30(-4294967296, 5n, "global", "global");
if ("function" == v38) {
} else {
    function F43(a45, a46, a47) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a47;
    }
    const v48 = new F43(F43, "global", "function");
    new F43(v48, "global", "function");
    new F43(v48, "global", "function");
}
