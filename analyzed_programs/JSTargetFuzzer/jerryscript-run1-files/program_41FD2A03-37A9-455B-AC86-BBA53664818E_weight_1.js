new Uint8ClampedArray(3);
new Uint8ClampedArray(50);
new Int16Array(3);
const v18 = [65535n,0n,964329252n];
let v19 = [964329252n,964329252n,v18,v18];
const v20 = [v19,v19,v18,964329252n,0n];
const v21 = [65535n,v19];
[v20,0n];
const v23 = [v19];
const t9 = "fdNr";
t9[0] = 65535n;
try {
const t0 = "localeCompare";
new t0(v18, v23, v23, 58270);
} catch (e) {}
async function* f31(a32, a33, a34) {
    ({"length":a32,...v19} = a33);
    yield v18;
    await a32;
    yield "fdNr";
    return a32;
}
f31(58270, v21, 50);
