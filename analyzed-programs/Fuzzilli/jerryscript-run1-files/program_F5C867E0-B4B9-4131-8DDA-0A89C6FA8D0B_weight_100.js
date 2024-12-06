const v3 = [4n];
let v4 = [4n];
const v5 = [v3,-1085262960n,-1085262960n];
function f6(a7, a8, a9) {
    const o10 = {
        "g": a7,
        "a": -65537n,
        __proto__: v5,
        "h": 4n,
        ...a7,
        ...a7,
        ...a7,
        "b": v4,
        "c": a8,
        [a9]: -1085262960n,
    };
    return o10;
}
const v11 = f6(v3, -1085262960n, f6);
f6(v3, -1085262960n, f6);
f6(v5, -1085262960n, -1085262960n);
v4 >>= v5;
v11.__proto__ = v11;
async function* f14(a15, a16, a17) {
    const o18 = {
        "construct": f6,
        "set": f6,
    };
    new Proxy(v11, o18);
    yield* await v4;
    return v11;
}
f14(-65537n, -65537n, 4n);
