const v4 = new WeakSet();
const v6 = new Map();
for (let i11 = 0; i11 < 9; i11++) {
    v6.__proto__ = v4;
}
const v20 = [65535n,0n,964329252n];
let v21 = [964329252n,964329252n,v20,v20];
const v22 = [v21,v21,v20,964329252n,0n];
const v23 = [65535n,v21];
[v22,0n];
const v25 = [v21];
const t11 = "fdNr";
t11[0] = 65535n;
let v32;
try {
const t0 = "localeCompare";
v32 = new t0(v20, v25, v25, 58270);
} catch (e) {}
async function* f33(a34, a35, a36) {
    v25.toString = a34;
    let v37;
    try { v37 = new a36(a35, 58270, 0n, 11); } catch (e) {}
    var d = 1000000.0;
    const v38 = new Map("localeCompare");
    try { v38.get(v37); } catch (e) {}
    ({"length":a34,...v21} = a35);
    yield v20;
    await a34;
    yield "fdNr";
    return a34;
}
f33(58270, v23, v32);
