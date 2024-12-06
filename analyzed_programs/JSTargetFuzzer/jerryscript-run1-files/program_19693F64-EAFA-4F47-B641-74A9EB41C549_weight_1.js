function f3(a4, a5) {
    const o17 = {
        __proto__: a5,
        set g(a7) {
            const v8 = -14 <= a7;
            try { a7(v8, a5, a5, v8); } catch (e) {}
            a7[v8] = -14;
        },
        toString(a11) {
            const v12 = -a4;
            let v13;
            try { v13 = a5(v12, a11, v12, 512); } catch (e) {}
            v13[a4] = -14;
            v13.__proto__ = a5;
            return -11;
        },
        [-14]: 512,
        "b": a4,
        ...a5,
        5: a4,
        512: f3,
    };
    return o17;
}
const v19 = f3(1383, f3(1383, 512));
f3(1383, -14);
new Map();
function f23() {
    return v19;
}
(-2n) ** 63703n;
