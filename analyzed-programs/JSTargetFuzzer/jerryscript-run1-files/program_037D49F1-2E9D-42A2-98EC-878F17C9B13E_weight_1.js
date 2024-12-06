function f0() {
}
function f1() {
    const o6 = {
        "d": f0,
        [f0]() {
            return f0;
        },
        "e": f0,
        0: f0,
        "b": f0,
    };
    return o6;
}
const v7 = f1();
f1();
const v9 = f1();
[[f1],v7,v9,v9,[v7,v7,f1,f0,v9]];
const v16 = [];
const v17 = [v16,v16];
const v18 = [v17,v17];
[v17,v18,v17,v18,v17];
for (let v25 = 0; v25 < 10; v25++) {
    3470935 ** 45279;
    Math.atan2(v25, 3470935);
    Math.acos(v25);
}
function* f36(a37, a38) {
    function f39(a40, a41, a42, a43) {
        Object.defineProperty(v17, 1, { enumerable: true, value: a37 });
        a43[8] |= 4.0;
        return arguments;
    }
    f39();
    yield 45279;
    return 39366;
}
f36(v18, 39366);
