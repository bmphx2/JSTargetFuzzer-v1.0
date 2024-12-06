const v8 = new Int16Array(3);
new Int8Array(129);
const o14 = {
    __proto__: v8,
    [3]: v8,
};
try { v8.sort(8n); } catch (e) {}
new Uint16Array(3719);
const v20 = [65535n,0n,964329252n];
let v21 = [964329252n,964329252n,v20,v20];
const v22 = [v21,v21,v20,964329252n,0n];
const v23 = [65535n,v21];
const v24 = [v22,0n];
const v25 = [v21];
function f28(a29, a30, a31) {
    const o32 = {
        "g": a30,
        268435440: a29,
        4: v8,
    };
    return o32;
}
f28(v24, -10, 129);
f28(v24, 3719, -20550);
f28(v20, 255, -10);
const t22 = "fdNr";
t22[0] = 65535n;
let v40;
try {
const t0 = "localeCompare";
v40 = new t0(v20, v25, v25, 58270);
} catch (e) {}
async function* f41(a42, a43, a44) {
    ({"length":a42,...v21} = a43);
    yield v20;
    await a42;
    yield "fdNr";
    return a42;
}
f41(58270, v23, v40);
