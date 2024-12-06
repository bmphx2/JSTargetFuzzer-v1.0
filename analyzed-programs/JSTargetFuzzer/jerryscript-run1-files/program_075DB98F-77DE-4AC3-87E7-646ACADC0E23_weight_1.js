new Int16Array(256);
new BigUint64Array(163);
new Float64Array(255);
new Float64Array(163);
new Uint16Array(3150);
new Int8Array(2122);
const v21 = [65535n,0n,964329252n];
let v22 = [964329252n,964329252n,v21,v21];
const v23 = [v22,v22,v21,964329252n,0n];
const v24 = [65535n,v22];
[v23,0n];
const v26 = [v22];
let v27 = 11;
const t13 = "fdNr";
t13[0] = 65535n;
let v33;
try {
const t0 = "localeCompare";
v33 = new t0(v21, v26, v26, 58270);
} catch (e) {}
async function* f34(a35, a36, a37) {
    ({"length":v27,...v22} = a36);
    yield v23;
    await a35;
    yield "localeCompare";
    return a35;
}
f34(58270, v24, v33);
