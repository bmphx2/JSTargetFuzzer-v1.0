const v1 = new Map();
class C2 {
    o(a4) {
        try {
            super.entries(v1);
        } catch(e6) {
        }
        v1[4] = Map;
        return v1;
    }
    [Map] = v1;
    [v1] = v1;
    static [Map];
}
new C2();
const v8 = new C2();
new C2();
const v20 = [65535n,0n,964329252n];
Object.defineProperty(C2, "f", { configurable: true, value: v20 });
try { C2["p"](); } catch (e) {}
const v24 = new Set();
let v25 = [964329252n,964329252n,v20,v20];
const v26 = [v25,v25,v20,964329252n,0n];
const v27 = [65535n,v25];
[v26,0n];
const v29 = [v25];
const t26 = "fdNr";
t26[0] = 65535n;
let v36;
try {
const t0 = "localeCompare";
v36 = new t0(v20, v29, v29, 58270);
} catch (e) {}
async function* f37(a38, a39, a40) {
    ({"length":a38,...v25} = a39);
    yield v20;
    await a38;
    let {"g":v43,"size":v44,...v45} = v24;
    v8[v24];
    yield "fdNr";
    return a38;
}
f37(58270, v27, v36);
