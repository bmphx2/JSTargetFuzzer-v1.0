const v0 = [129,24730,1,2147483648,1073741825];
const v1 = [-58910,-6,1024,49286,-2];
const v2 = [2051377809,11,2147483647,-12];
function f3(a4) {
    const o11 = {
        p(a6, a7) {
            a4 += a4;
            throw a4;
            return v2;
        },
        [-1]: v0,
        1073741824: v2,
        ...v0,
    };
    return o11;
}
const v12 = f3(v1);
const v13 = f3(v12);
const v14 = f3(v2);
function f15(a16, a17, a18) {
    const o32 = {
        __proto__: v13,
        "b": a16,
        "a": v12,
        [v12]: a18,
        "f": v2,
        483: v0,
        set e(a20) {
            super.c &&= a20;
            const v22 = Symbol.iterator;
            const o31 = {
                [v22]() {
                    let v24 = 10;
                    const o30 = {
                        next() {
                            v24--;
                            const v28 = v24 == 0;
                            const o29 = {
                                "done": v28,
                                "value": v24,
                            };
                            return o29;
                        },
                    };
                    return o30;
                },
            };
        },
    };
    return o32;
}
const v33 = f15(v1, v12, v13);
const v34 = f15(v2, v33, v13);
f15(v0, v34, v13);
v0[v1] = v1;
try {
    const v36 = [v14,v0,v33,v34];
    [v12,v1];
    [f3,v1,v36];
} catch(e39) {
    Object.defineProperty(e39, 2, { value: e39 });
}
typeof v0 === "symbol";
