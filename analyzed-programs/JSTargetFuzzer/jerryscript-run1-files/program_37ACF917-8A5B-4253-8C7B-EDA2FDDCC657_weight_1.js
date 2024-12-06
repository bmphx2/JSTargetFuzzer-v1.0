new Uint8ClampedArray(1000);
new Int16Array(255);
new Float64Array(214);
const v18 = [65535n,0n,964329252n];
const v19 = [964329252n,65535n,v18,v18];
let v20 = [v19,v19,v18,964329252n,0n];
const v21 = [65535n,v19];
[v20,0n];
const v23 = [v19];
const t9 = "fdNr";
t9[0] = 65535n;
let v30;
try {
const t0 = "localeCompare";
v30 = new t0(v18, v23, v23, 58270);
} catch (e) {}
async function* f31(a32, a33, a34) {
    ({"length":a32,...v20} = a33);
    yield v18;
    return yield await a32;
}
f31(58270, v21, v30);
