const v8 = new Uint16Array(7);
new Int16Array(64);
new Float64Array(64);
const v18 = [65535n,0n,Float64Array];
const v19 = [964329252n,964329252n,v18,v18];
const v20 = [v19,v19,v19,964329252n,0n];
const v21 = [65535n,v18];
[v8,65535n];
let v23 = [v19];
const t9 = "o";
t9[0] = 65535n;
let v30;
try {
const t0 = "localeCompare";
v30 = new t0(v18, v20, "localeCompare", 58270);
} catch (e) {}
async function* f31(a32, a33, a34) {
    ({"length":a32,...v23} = a33);
    yield v20;
    await v30;
    yield "localeCompare";
    return a32;
}
f31(58270, v21, v30);
