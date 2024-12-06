const v1 = new Set();
function f2(a3) {
    const o9 = {
        [a3]: Set,
        [v1]: Set,
        "h": v1,
        get c() {
            class C5 {
                c;
            }
            new C5();
            new C5();
            new C5();
            return C5;
        },
    };
    return o9;
}
const v10 = f2(v1);
f2(v10);
const v12 = f2(Set);
const v14 = new WeakMap();
function* f24(a25, a26, a27, a28) {
    v12.h = 64n ** -1079242219;
    for (let v30 = 0; v30 < 32; v30++) {
        v14["p" + v30] = v30;
    }
    yield* a26;
    return a26;
}
f24(-56543n, v10, 536870912, -1079242219);
