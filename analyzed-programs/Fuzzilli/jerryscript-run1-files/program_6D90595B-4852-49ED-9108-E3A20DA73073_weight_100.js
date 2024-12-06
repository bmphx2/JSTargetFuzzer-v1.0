const v0 = /ifoo(?!bar)baz*/ugi;
const v1 = /kfoo[z]*17?/usid;
const v2 = /\cjK/i;
function f9(a10, a11) {
    const o16 = {
        __proto__: "Q7BoV",
        "a": a11,
        "g": a10,
        p(a13, a14) {
            return undefined;
        },
        ...v2,
        "f": v2,
        "h": 1.5729080441243223e+308,
    };
    return o16;
}
f9(1.5729080441243223e+308, v1);
const v18 = f9(1.5729080441243223e+308, v2);
const v20 = f9(1.5729080441243223e+308, v2)[128];
switch (v18.a) {
    default:
        break;
}
v0 instanceof v20;
