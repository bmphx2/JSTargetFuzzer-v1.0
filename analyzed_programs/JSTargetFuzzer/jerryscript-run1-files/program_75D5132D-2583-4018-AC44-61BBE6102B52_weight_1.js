new Date();
new Int16Array(1024);
new Uint32Array(9);
new Uint8ClampedArray(64);
const v20 = [65535n,0n,964329252n];
let v21 = [964329252n,964329252n,v20,v20];
const v22 = [v21,v21,v20,964329252n,0n];
const v23 = [65535n,v21];
const v25 = [[v22,0n]];
const t9 = "fdNr";
t9[0] = 65535n;
let v32;
try {
const t0 = "localeCompare";
v32 = new t0(v20, v25, v25, 58270);
} catch (e) {}
async function* f33(a34, a35, a36) {
    ({"length":a34,...v21} = a35);
    yield v20;
    yield await a34;
    return a34;
}
f33(58270, v23, v32);
