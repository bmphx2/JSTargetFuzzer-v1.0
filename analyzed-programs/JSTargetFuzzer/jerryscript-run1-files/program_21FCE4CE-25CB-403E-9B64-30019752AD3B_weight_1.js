function f6() {
    return 65536;
}
function f7(a8, a9) {
    const o10 = {
        "replace": a9,
        "c": 268435439,
        ...268435439,
        1024: f6,
        "b": 1948405410,
        __proto__: a9,
        ...1948405410,
        ...22862,
        "a": 1948405410,
        "name": f6,
        "c": 1948405410,
    };
    return o10;
}
f7(1948405410, 22862);
f7(268435439, -2147483647);
f7(22862, -2147483647);
const v17 = [65535n,0n,964329252n,0n,-2147483647];
let v18 = [964329252n,964329252n,v17,v17];
const v19 = [v18,v18,v17,964329252n,0n];
const v20 = [65535n,v18];
[v19,0n];
const v22 = [v18];
const t28 = "fdNr";
t28[64] = 65535n;
let v29;
try {
const t0 = "localeCompare";
v29 = new t0(v17, v22, v22, 58270);
} catch (e) {}
async function* f30(a31, a32, a33) {
    ({"length":a31,...v18} = a32);
    yield v17;
    await a31;
    yield "fdNr";
    return a31;
}
f30(58270, v20, v29);
