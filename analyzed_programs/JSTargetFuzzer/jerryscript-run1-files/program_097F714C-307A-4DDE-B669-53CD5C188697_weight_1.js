[];
new BigUint64Array(8);
new Int32Array(3040);
new Int8Array(208);
const v19 = [65535n,0n,964329252n];
let v20 = [964329252n,964329252n,v19,v19];
const v21 = [v20,v20,v19,964329252n,0n];
const v22 = [65535n,v20];
[v21,0n,v21,0n];
const v24 = [v20];
const t10 = "fdNr";
t10[0] = 65535n;
let v31;
try {
const t0 = "localeCompare";
v31 = new t0(v19, v24, v24, 58270);
} catch (e) {}
async function* f32(a33, a34, a35) {
    ({"length":a33,...v20} = a34);
    yield v19;
    await a33;
    yield "fdNr";
    return a33;
}
f32(58270, v22, v31, -365, 3040, "localeCompare");
