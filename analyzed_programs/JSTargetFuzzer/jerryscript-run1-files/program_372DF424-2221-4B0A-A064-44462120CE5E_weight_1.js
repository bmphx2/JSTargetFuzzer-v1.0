const v15 = [65535n,0n,964329252n];
let v16 = [964329252n,964329252n,v15,v15];
const v17 = [v16,v16,v16,964329252n,0n];
const v18 = [964329252n,v16];
const v19 = [v16,0n];
const v20 = [v15];
const t6 = 4294967295;
t6[4] = -1611691461;
try { new v19(v16); } catch (e) {}
const t9 = "fdNr";
t9[0] = [[-3.0,[v16,v20]],v17];
let v31;
try {
const t0 = "localeCompare";
v31 = new t0(v15, v20, v20, 58270);
} catch (e) {}
async function* f32(a33, a34, a35) {
    ({"length":a33,...v16} = a34);
    yield v15;
    const v37 = await a33;
    yield "fdNr";
    return v37;
}
f32(58270, v18, v31);
