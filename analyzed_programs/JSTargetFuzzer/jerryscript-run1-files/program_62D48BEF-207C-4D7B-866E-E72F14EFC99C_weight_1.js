function f3(a4) {
    const o11 = {
        ...7,
        [7](a6, a7) {
            for (let v8 = 0; v8 < 32; v8++) {
                this["p" + v8] = v8;
            }
            return a7;
        },
        2: 7,
    };
    return o11;
}
const v12 = f3(268435439);
const v13 = f3(6);
const v14 = f3(6);
const v16 = new WeakMap();
function f17(a18, a19, a20, a21) {
    const o31 = {
        [a19](a23, a24, a25, a26) {
            v12 << a25;
            return a25;
        },
        "a": a20,
        2: v12,
        "h": f3,
    };
    return o31;
}
const v33 = f17(v13, v12, 7, f17(v16, v14, 7, v14));
f17(v33, v33, 268435439, v14);
([346223919]).lastIndexOf(-9223372036854775808, -65536);
