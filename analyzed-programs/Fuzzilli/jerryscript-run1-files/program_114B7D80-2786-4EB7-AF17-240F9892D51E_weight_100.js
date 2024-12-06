const v3 = [15,15,15];
const v4 = [v3];
const v5 = [1000,v4,15,v4];
function f6(a7, a8, a9, a10) {
    const o15 = {
        get g() {
            return a8;
        },
        "g": 1000,
        [v4]: a8,
        "f": 1000,
        "a": a10,
        "b": a7,
        "c": v5,
        "d": 16,
    };
    return o15;
}
const v16 = f6(v5, 15, v5, v5);
const v17 = f6(v3, 16, v3, v4);
f6(v3, 16, v3, v3);
class C19 extends f6 {
    #p(a21, a22, a23) {
        const v24 = [f6,a23];
        const v25 = [a21,v5];
        [v24,v25,v5,v25];
        return f6;
    }
    static 8 = 15;
    static [-2] = 1000;
    [f6] = v17;
    f;
    [v3] = 15;
    64 = v16;
    [v16];
}
new C19();
new C19();
new C19();
const v31 = Symbol.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
