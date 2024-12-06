const v0 = [];
function f3(a4, a5) {
    return a5(this);
}
new Promise(f3);
const v26 = [65535n,0n,964329252n];
let v27 = [964329252n,964329252n,v26,v26];
const v28 = [v27,v27,v26,964329252n,0n];
[65535n,v27];
const v31 = [[v28,0n]];
const t8 = "fdNr";
t8[0] = 65535n;
let v38;
try {
const t0 = "localeCompare";
v38 = new t0(v26, v31, v28, 58270);
} catch (e) {}
async function* f39(a40, a41, a42) {
    ({"length":a40,...v27} = a41);
    yield v26;
    await a40;
    yield "fdNr";
    return a40;
}
f39(58270, v0, v38);
