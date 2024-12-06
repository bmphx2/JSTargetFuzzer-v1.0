const v1 = new WeakMap();
const v2 = /1/divm;
const v3 = /Va\Sct(ab)/isvm;
const v4 = /\w|\d/disvm;
function f5(a6) {
    const o15 = {
        [v4]: v3,
        ...v2,
        toString(a8, a9) {
            function f10(a11, a12) {
                v1.__proto__ = a12;
                v3.length = 0;
                return WeakMap;
            }
            f10(v2, v3);
            return v1;
        },
        ...v2,
        "e": v4,
    };
    return o15;
}
const v16 = f5(v2);
f5(v3);
const v18 = f5(v2);
const t22 = "bigint";
t22[15] = f5;
v18 & "object";
for (const v26 in v16) {
    const v28 = Symbol.iterator;
    const o37 = {
        [v28]() {
            let v30 = 10;
            const o36 = {
                next() {
                    v30--;
                    const v34 = v30 == 0;
                    const o35 = {
                        "done": v34,
                        "value": v30,
                    };
                    return o35;
                },
            };
            return o36;
        },
    };
}
