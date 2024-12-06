new Uint8ClampedArray(10);
new Uint16Array(4);
new Int8Array(127);
const v15 = [65535n,0n,964329252n];
let v16 = [964329252n,964329252n,v15,v15];
const v17 = [v16,v16,v15,964329252n,0n];
const v18 = [65535n,v16];
[v17,0n];
const v20 = [v16];
([-1000.0,-Infinity,-3.0])["splice"]();
const t9 = "fdNr";
t9[0] = 65535n;
let v30;
try {
const t0 = "localeCompare";
v30 = new t0(v15, v20, v20, 58270);
} catch (e) {}
async function* f31(a32, a33, a34) {
    ({"length":a32,...v16} = a33);
    const v35 = [];
    function f36(a37, a38, a39) {
        return a39;
    }
    Object.defineProperty(v35, 950, { writable: true, enumerable: true, value: f36 });
    yield v15;
    await a32;
    yield "fdNr";
    return a32;
}
f31(58270, v18, v30);
