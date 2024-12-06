new BigInt64Array(128);
new Int8Array(BigInt64Array);
new Int32Array(16);
function f9() {
    return 6;
}
const v16 = [65535n,0n,964329252n];
let v17 = [964329252n,964329252n,v16,v16];
const v18 = [v17,v17,v16,964329252n,0n];
const v19 = [65535n,v17];
[v18,0n];
const v21 = [1n];
const t12 = "fdNr";
t12[0] = 65535n;
let v28;
try {
const t0 = "localeCompare";
v28 = new t0(v16, v21, v21, 58270);
} catch (e) {}
async function* f29(a30, a31, a32) {
    ({"length":a30,...v17} = a31);
    yield v16;
    await a30;
    yield v17;
    return a30;
}
f29(58270, v19, v28);
