function f3(a4, a5) {
    const o6 = {
        ...a5,
        "b": 1073741825n,
        "h": a5,
        [a4]: a4,
        ...a5,
        1073741825: a5,
        1000: a5,
        __proto__: a5,
        [-8n]: 1073741825n,
        ...a5,
        "a": a5,
        "f": 5031n,
        6: a5,
    };
    return o6;
}
const v7 = f3(5031n, 1073741825n);
f3(1073741825n, -8n);
const v9 = f3(5031n, 1073741825n);
function f13(a14, a15) {
    const o21 = {
        "c": f3,
        get h() {
            this.length = 0;
            a14[0] -= 2147483649;
            return this;
        },
        ...v7,
        "d": v7,
        __proto__: a15,
    };
    return o21;
}
f13(v9, f13(v7, v9));
let v24 = f13(v7, 2147483649);
[v24] = 1073741825n;
v24?.[2147483647];
Object.defineProperty(v7, "f", { enumerable: true, set: f13 });
let v29 = 62037;
v29 /= 10;
