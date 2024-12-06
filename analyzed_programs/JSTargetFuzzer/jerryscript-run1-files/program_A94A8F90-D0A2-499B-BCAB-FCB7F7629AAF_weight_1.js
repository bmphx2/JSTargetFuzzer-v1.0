function f7(a8, a9) {
    const o10 = {
        ...a8,
        "a": 811866439,
        "e": 9007199254740990,
        "d": a8,
        "b": 9007199254740991,
        "f": 811866439,
        ...a8,
        "c": 54993,
        "h": 811866439,
        ...a8,
    };
    return o10;
}
f7(54993, -2);
f7(f7, -2);
f7(9007199254740990, -2);
const v17 = [65535n,0n,964329252n];
let v18 = [v17,964329252n,v17,v17];
const v19 = [v18,v18,v17,964329252n,f7];
const v20 = [65535n,v18];
[v19,0n];
const v22 = [v18];
const t24 = "fdNr";
t24[0] = 65535n;
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
