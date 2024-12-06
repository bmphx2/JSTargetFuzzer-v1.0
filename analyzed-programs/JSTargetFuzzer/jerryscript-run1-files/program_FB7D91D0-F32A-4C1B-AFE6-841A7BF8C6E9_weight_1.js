function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -57025;
    this.f = a7;
    this.b = a6;
}
const v8 = new F4(-2147483648, -2147483648);
const v9 = new F4(-2147483648, 11);
const v10 = new F4(-57025, 11);
function f11(a12, a13) {
    const o20 = {
        __proto__: v10,
        9: a12,
        [a13]: v10,
        set c(a15) {
            v10[v8];
        },
        [-57025]: a13,
        4096: 11,
        ...v9,
        "g": a12,
    };
    return o20;
}
f11(11, -57025);
f11(11, -57025);
f11(-2147483648, 11);
function f24() {
    return v9;
}
const v26 = [8n,8n,8n,8n,F4];
async function f27(a28, a29) {
    +a29;
    return 8n;
}
f27(v26, 8n);
